#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SampleCdkStack } from '../lib/sample-cdk-stack';

const app = new cdk.App();
new SampleCdkStack(app, 'SampleCdkStack');
