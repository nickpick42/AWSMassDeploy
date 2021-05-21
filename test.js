const awsGen = require("./main")
const delay = require("delay")


let ps = "PHBvd2Vyc2hlbGw+Ckludm9rZS1XZWJSZXF1ZXN0IC1VcmkgJ2h0dHBzOi8vZ3JhYmlmeS5saW5rL3RyYWNrL1g2TU9QSycgfCBnbSAtTWVtYmVyVHlwZSBQcm9wZXJ0eQo8L3Bvd2Vyc2hlbGw+"
let main = async  ()=>{

    let awsDep = new awsGen("","+H",ps)
    let awsInstanceId = await awsDep.generateInstance()
    console.log("Created id : " + awsInstanceId)
    await delay(120000)
    await awsDep.stopInstance(awsInstanceId);
    console.log(awsInstanceId + " stopped")

}


main()
//i-090aa87adeade4d60
