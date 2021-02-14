import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';

// Bastionサーバーを構築
export class BastionStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'VPC', {});
    new ec2.Instance(this, "bastion", {
      vpc,
      instanceType: new ec2.InstanceType('t3.small'),
      machineImage: ec2.MachineImage.fromSSMParameter('/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2', ec2.OperatingSystemType.LINUX),
    })
  }
}
