const mongoose = require("mongoose");

CONNECTION_STRING = "mongodb+srv://admin:admin@zaryabnode.vfkes94.mongodb.net/backendcontacts?retryWrites=true&w=majority"

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log(
            "db connected",
            connect.connection.host,
            connect.connection.name
        );
    } catch(err){
        console.log(err);
        process.exit(1);
    }

    
}

module.exports = connectDb;