import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { UserModel, connectDB, ContentModel } from './db';
import { JWT_PASSWORD } from './config';
import { useMiddleware } from './middleware';

const app = express();
app.use(express.json());

app.post('/api/v1/signup', async(req, res) => {
const username = req.body.username;
const password = req.body.password;
try{
await UserModel.create({username:username,password:password}) 
res.json({message:"Signup successful"})
}catch(error){
res.status(411).json({message:"User already exists"})
}
})

app.post('/api/v1/signin', async(req, res) => {
 const username = req.body.username;
 const password = req.body.password;
 const existingUser =  await UserModel.findOne({
    username,
    password
  });
  if (!existingUser) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }else{
    const token = jwt.sign({
        id: existingUser._id
    },JWT_PASSWORD);
    res.json({ token });
  }
 });

app.post('/api/v1/content', useMiddleware,async(req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    await ContentModel.create({
        link,
        title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    return res.json({message:"Content added successfully"})
})

app.get('/api/v1/content',useMiddleware, async(req, res) => {
    //@ts-ignore
 const userId = req.userId;
  const content = await ContentModel.find({userId:userId}).populate("userId","username");
  res.json(content)
})

app.delete('/api/v1/content', async(req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteOne({contentId,
        //@ts-ignore
        userId:req.userId
    })
})


app.post('/api/v1/brain/share',(req, res) => {
    
})

app.post('/api/v1/brain/:shareLink',(req, res) => {})

// Start server after connecting to database
const startServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("Server started on port 3000")
        })
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();