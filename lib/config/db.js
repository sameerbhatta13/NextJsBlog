import mongoose from "mongoose";

export const dbConnect = async () => {
    await mongoose.connect('mongodb+srv://sameer_13:mega123@cluster0.4r8bn.mongodb.net/blog-app')
    console.log('database connected')

}