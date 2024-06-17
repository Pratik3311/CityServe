const mongoose  = require("mongoose");

const mongoDb = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://Pratik3311:Pratik3311@cluster0.9kkj7.mongodb.net/test1");
        console.log("database connected ")
    }
   catch(err){
    console.error("eroor is " , err.message);
    process.exit(1);
   }
}
module.exports = mongoDb;