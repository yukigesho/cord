#!/bin/bash -e

# Use this script to connect docker to the AWS Elastic Container
# Registry (ECR).

URI="https://026090525299.dkr.ecr.us-west-2.amazonaws.com"
aws ecr get-login-password --region "us-west-2" | \
    docker login -u AWS "$URI" --password-stdin
