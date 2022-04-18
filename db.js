var admin = require("firebase-admin");
var serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-lightfirebase-default-rtdb.asia-southeast1.firebasedatabase.app"
});

var db = admin.database();
var lightRef = db.ref("lights");

const lightOperation = {
    addLight(obj, res){
        var oneLight = lightRef.child(obj.roll);
        oneLight.push(obj,(err) => {
            if(err){
                res.status(300).json({"msg":"Something went wrong","error":err});
            }
            else{
                res.status(200).json({"msg":"user created sucessfully"});
            }
        })
    },
    demoLight(obj,res){
        var lightRefdemo=db.ref("lightusers");
        var lightUser= lightRefdemo.child(obj.roll);
        lightUser.push(obj,(err)=>{
            if(err){
                res.status(300).json({"msg":"Something went wrong","error":err});
            }
            else{
                res.status(200).json({"msg":"user created sucessfully"});
            }
        })
    },
    getLights(res){
        lightRef.once('value',function(snap){
            res.status(200).json({"lights":snap.val()});
        })
    },
    getOneLight(obj,res){
        var lightRefdemo = db.ref("lights");
        var oneLight = lightRefdemo.child(obj.roll);
        oneLight.once('value', function(snap){
            res.status(200).json({"light": snap.val()});
        })
    }
}

module.exports = lightOperation;