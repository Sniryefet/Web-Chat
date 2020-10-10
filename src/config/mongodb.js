import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const initMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{console.log("Connected to MongoDB");});
    
  };

export default initMongoDB