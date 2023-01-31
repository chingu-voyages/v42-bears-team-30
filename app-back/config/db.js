const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDb connect on ${connect.connection.host}`)
    }catch(err){

        console.error(err)
        process.exit(1);
    }
}

module.exports = connectDB