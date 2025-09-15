import mongoose,{model,Schema} from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// MongoDB Atlas connection with proper database name and error handling
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }
        await mongoose.connect(mongoUri);
        console.log("MongoDB Atlas connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

const UserSchema = new Schema({
    username:{type:String,unique:true},
    password:String,
})

export const UserModel = model("User",UserSchema)

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true},

})

export const ContentModel = model("Content",ContentSchema)

export { connectDB }

