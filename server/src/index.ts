import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { requestHandler } from './utils/requestHandler'
import { errorAPI } from './utils/errorAPI'
import { sendMail } from './utils/sendMail'
import { successAPI } from './utils/successAPI'
import cors from 'cors'

const app = express()

dotenv.config({
    path:'./.env'
})

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "https://nikhil-patil-portfolio.vercel.app/",
        credentials: true,
    })
);


const PORT = process.env.PORT||5000


app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Health check route!")
})

app.post('/email',requestHandler(async(req:Request,res:Response) => {
    const {email,name,message} = req.body

    if([email,name,message].some((field) => field?.trim() === "")){
        throw new errorAPI(401,"Please fill all the fields!")
    }

    // console.log("USername: ", process.env.USER);
    // console.log("Password: ", process.env.PASSWORD);
    
    const mailSent = await sendMail(process.env.USER,process.env.PASSWORD,email,name,message)

    if(!mailSent){
        throw new errorAPI(401,"Something went wrong while sending an email!")
    }

    return res.json(
        new successAPI(201,"Email sent succesfully!")
    )
}))

app.listen(PORT,()=>{
    console.log(`Server connect on port: ${PORT}`)
})