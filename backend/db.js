const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://rittima30iem:8Z8Prs15SmAgLl0s@website.bh1gvn2.mongodb.net/?retryWrites=true&w=majority&appName=website";
// const mongoURI = "mongodb+srv://aditya:iJqoc9ObHOxaGFLU@cluster2.tgtdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2";

const connectToMongo = async () => {
    
        await mongoose.connect(mongoURI, {
            dbName: "CarrierRise-Database" // Optional: specify your database name
        });
        console.log('Connected to MongoDB');
}

module.exports = connectToMongo;


