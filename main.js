const aws = require("aws-sdk")
const env = require("dotenv")

class AWSMassDeploy {

    constructor(access_key,secret_key,powershell) {
        process.env.AWS_ACCESS_KEY_ID = access_key
        process.env.AWS_SECRET_ACCESS_KEY = secret_key
        this.powershell = powershell
    }
    generateInstance = async ()=>{

        aws.config.update({region: "us-east-1"})
        let awsInstance = new aws.EC2({apiVersion: "latest"})
        let awsInstancePromise = awsInstance.runInstances({
            MaxCount: 1,
            MinCount: 1,
            ImageId: "ami-0be6f09264f372d7a",
            UserData: this.powershell
        }).promise()
        return await awsInstancePromise.then((data) => {
            let id = data.Instances[0].InstanceId
            return id;
        });

    }
    stopInstance = async (id)=>{
        aws.config.update({region: "us-east-1"})
        let ec2Instance = new aws.EC2({apiVersion: "latest"})
        let stopPromise = ec2Instance.stopInstances({
            InstanceIds: [
                id
            ]
        }).promise()

        let stopPromiseResults = await stopPromise.then( (data)=>{
            console.log(data)
        })

    }


}
module.exports = AWSMassDeploy;
