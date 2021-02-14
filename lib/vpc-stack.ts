import * as ec2 from '@aws-cdk/aws-ec2';
import * as ssm from '@aws-cdk/aws-ssm';
import * as cdk from '@aws-cdk/core';

// SSMに値を格納
export class VPCStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'VPC', {});
        new ssm.StringParameter(this, 'vpc-id', {
            stringValue: vpc.vpcId,
        });
    }
}
