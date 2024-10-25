import mongoose from "mongoose"


export const connectMongoDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/clase-11");
        console.log("Mongo DB connected");
    } catch (error: any) {
        console.log(error.message);        
    }
}