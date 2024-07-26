import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://jinishcena:3MqiiMzyOPDgvkJ4@cluster0.pfbsaie.mongodb.net/fresheatin').then(()=>console.log("DB Connected"));

}