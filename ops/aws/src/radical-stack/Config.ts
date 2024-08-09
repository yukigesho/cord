import type { Tier } from 'ops/aws/src/common.ts';

// AWS Environment values
export const AWS_REGION = 'us-west-2';

// Default resource owner, used for tagging resources with tags that Vanta reads
export const DEFAULT_OWNER = 'my-gmail@gmail.com';

// The user group that is allowed to ssh to EC2 instances
export const EC2_INSTANCE_CONNECT_GROUP = 'engineering';

// The email address to send ops notifications to
export const OPS_NOTIFICATION_EMAIL = 'my-gmail@gmail.com';

// S3 bucket names have to be globally unique, so prefix all bucket names with
// this string
export const S3_BUCKET_PREFIX = 'cord-api-';

// AWS sets up a default VPC and security group in each region, and you're not
// able to create replacements with exactly the same properties in CF, so
// instead we import them by ID.  Replace these with the IDs of the objects that
// AWS creates for you.
export const DEFAULT_VPC_ID = 'vpc-091eacfe30411bd9e';
export const DEFAULT_SECURITY_GROUP_ID = 'sg-083db94f7abef5ea4';
export const DEFAULT_PUBLIC_SUBNET_A_ID = 'subnet-0073afbc2525dfe9c';
export const DEFAULT_PUBLIC_SUBNET_B_ID = 'subnet-0ccdc6566666e5c49';
export const DEFAULT_PUBLIC_SUBNET_C_ID = 'subnet-0f918153e3b5dd083';
export const DEFAULT_VPC_ID_US_EAST_1 = 'vpc-09e10bf6f20d2f32b';

// all the domains under which we serve the product
export const CORD_COM_DOMAINS = ['001048.xyz'];

// The domain name we want all requests to be redirected to, and that serves as
// the base for all other domains (eg, api., app.)
export const PRIMARY_DOMAIN_NAME = CORD_COM_DOMAINS[0];

// domains for which we set up gmail
export const GMAIL_DOMAINS = ['001048.xyz'];

// Domain TXT records, for Google site verification and such things
export const TXT_RECORDS = {
  '001048.xyz': [
    'google-site-verification=o0E3i6wuU7HmxGIf_D7jLS089pFF7l19xfj8OebZ8ds',
    'google-site-verification=33uewWcG3InRmPHAs8TUHCjGTHZonvQzd7MxjPZSaEo',
    'OSSRH-82140',
    'ahrefs-site-verification_4b6190ed0dbc98695c8737c1ad9070106203ccfca7f7cd1f309a73010d2cf744',
  ],
};

// Domain keys for DKIM
export const DOMAIN_KEYS = {
  '001048.xyz': {
    // google = Google (our email)
    google:
      'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiwzgkiUn2tEnh417+3ate4MfoK72XsUU2PKXAyQ8BOzmb3AcpnrYcyafFLWGxSZfFvai3F2PcRGe02JWDq2+x7YlS/JICm6vyyofM/F1qu1/YZv2+7xNyDEx0R2ccQGgOXrczX2ecWu7aHnCRWgQB0UtKE/78OYXEvoKeSQnFjmeY2v4KGu1W35gQ9o7Y44jNJrXKrsPTV+iIwuoaqh/F2zsDBgt0izEiiQcSaNJyXx3RKinQDhlKMTCR9gM4yQ4Zmi+S+M4BrZZ6WZD0P1sBiO5vfs4k7zCwWr2c+MLYwPIexw12T6socOtqcAjoHLkZ3gYHCGzNIz3Ct6aM/is4wIDAQAB',
  },
};

type SpfType = Record<string, string | Record<string, string> | undefined> & {
  default: string;
};

// SPF records
export const SPF_RECORDS: SpfType = {
  // _spf.google.com = Google (our email)
  // amazonses.com = Loops (marketing)
  // sendgrid.net = Sendgrid (product notifications)
  default: 'v=spf1 include:_spf.google.com ~all',
  '001048.xyz': 'v=spf1 include:_spf.google.com ~all',
};

// CI/CD values
export const ECR_SERVER_REPO_NAME = 'server';
export const ECR_ONCALL_REPO_NAME = 'oncall';

export const SLACK_OAUTH_STATE_SIGNING_SECRET = 'SlackOauthStateSigningSecret';
export const SLACK_OAUTH_STATE_SIGNING_KEY_REF_NAME =
  'SlackOauthStateSigningSecretKey';

export const SENDGRID_INBOUND_WEBHOOK_SECRET = 'SendgridInboundWebhookSecret';
export const SENDGRID_INBOUND_WEBHOOK_SECRET_KEY_REF_NAME =
  'SendgridInboundWebhookSecretKey';

export const CORD_COM_WILDCARD_CERTIFICATE_US_EAST_1 =
  'arn:aws:acm:us-east-1:026090525299:certificate/a0dccd74-3e3c-4bc9-8e77-140853d30be5';
export const STAGING_CORD_COM_WILDCARD_CERTIFICATE_US_EAST_1 =
  'arn:aws:acm:us-east-1:026090525299:certificate/630ea315-e4ec-4adc-a1a2-699c1a049618';
export const LOADTEST_CORD_COM_WILDCARD_CERTIFICATE_US_EAST_1 =
  'arn:aws:acm:us-east-1:026090525299:certificate/24fa8df8-b188-4558-9c4a-f99d88309944';

type ScalingConstraints = {
  minCapacity: number;
  maxCapacity: number;
};
export const SERVER_AUTOSCALING_CAPACITY: {
  [k in Tier]: ScalingConstraints;
} = {
  prod: {
    minCapacity: 6,
    maxCapacity: 12,
  },
  staging: {
    minCapacity: 2,
    maxCapacity: 4,
  },
  loadtest: {
    minCapacity: 4,
    maxCapacity: 4,
  },
};
