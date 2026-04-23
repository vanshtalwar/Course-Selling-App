import mongoose from "mongoose"

 const MongoDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI) 
        console.log(`mongo db connected ${conn.connection.host} `);
        
    } catch (error) {
        console.log("error in MongoDB");
        
    }
}

export default MongoDb