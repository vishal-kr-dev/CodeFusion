import mongoose from 'mongoose'

const Connect = async ()=> {
    try {
        await mongoose
            .connect(`${process.env.MONGO_URI}`)
            .then(console.log("Connected with Mongodb"));
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);       
    }
}

export default Connect