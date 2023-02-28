const corsModule = require('cors')
const functions = require("firebase-functions");
// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();
const database = admin.database();
const cors = corsModule({origin:true})
exports.addAmount = functions.https.onRequest((req, res) => {
  cors(req,res,()=>{
    database.ref("users").get().then((ss) => {
      const arr = [0, 0, 0, 0, 0, 0, 0, 0];
      ss.forEach((s) => {
        if (s.child("Bet/Bet1").exists() && s.child("Bet/Bet1").val() != "") {
          arr[0] = arr[0] + parseInt(s.child("Bet/Bet1").val());
        }
        if (s.child("Bet/Bet2").exists() && s.child("Bet/Bet2").val() != "") {
          arr[1] = arr[1] + parseInt(s.child("Bet/Bet2").val());
        }
        if (s.child("Bet/Bet3").exists() && s.child("Bet/Bet3").val() != "") {
          arr[2] = arr[2] + parseInt(s.child("Bet/Bet3").val());
        }
        if (s.child("Bet/Bet4").exists() && s.child("Bet/Bet4").val() != "") {
          arr[3] = arr[3] + parseInt(s.child("Bet/Bet4").val());
        }
        if (s.child("Bet/Bet5").exists() && s.child("Bet/Bet5").val() != "") {
          arr[4] = arr[4] + parseInt(s.child("Bet/Bet5").val());
        }
        if (s.child("Bet/Bet6").exists() && s.child("Bet/Bet6").val() != "") {
          arr[5] = arr[5] + parseInt(s.child("Bet/Bet6").val());
        }
        if (s.child("Bet/Bet7").exists() && s.child("Bet/Bet7").val() != "") {
          arr[6] = arr[6] + parseInt(s.child("Bet/Bet7").val());
        }
        if (s.child("Bet/Bet8").exists() && s.child("Bet/Bet8").val() != "") {
          arr[7] = arr[7] + parseInt(s.child("Bet/Bet8").val());
        }
      });
      res.send(arr);
    });
  })
});
