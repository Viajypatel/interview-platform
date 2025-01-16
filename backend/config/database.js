const mongoose=require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const dbConnect=()=>{

         try{

             mongoose.connect(process.env.MONGO_URL);
             console.log("Mongodb Connected succefully");

         }
         catch(error){

            console.error('Error connecting to MongoDB:', error.message);
            process.exit(1);
         }
}

module.exports=dbConnect;