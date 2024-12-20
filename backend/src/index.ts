import express from "express";
import {config} from "dotenv-safe";
import {twilioClient} from "./twilio";

config();
const client = twilioClient.client;
const PORT = 3001

const app = express();
app.get('/hs', (req, res)=>{
    res.send("Welcome to twilio")
});
app.get('/login', async (req, res)=>{
    console.log("Login in");
    const data = await twilioClient.sendVerifyAsync(process.env.MOBILE!, "sms")    
    res.send("Loging in")
});
app.get('/verify', (req, res)=>{
    res.send("Verify code")
});
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});