import mongoose,{model,Schema} from 'mongoose';

// MongoDB Atlas connection with proper database name and error handling
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI as string);
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

