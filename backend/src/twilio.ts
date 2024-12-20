import twilio from "twilio";
import { TWILIO_PHONE_SID, TWILIO_TOKEN_SID, TWILIO_TOKEN_SECRET, TWILIO_ACCOUNT_SID, TWILIO_SERVICE } from './index';

class Twilio {
    phoneNumber = process.env.TWILIO_PHONE;
    phoneNumberSid = process.env.TWILIO_PHONE_SID;
    tokenSid = process.env.TWILIO_TOKEN_SID;
    tokenSecret = process.env.TWILIO_TOKEN_SECRET;
    accountSid = process.env.TWILIO_ACCOUNT_SID;
    verify = process.env.TWILIO_SERVICE!;
    client;
    constructor() {
        this.client = twilio(this.tokenSid, this.tokenSecret, 
            {accountSid: this.accountSid});
    }
    getTwilio() {
        this.client
    }
    async sendVerifyAsync(to: string, channel: string) {
        const data = await this.client.verify.v2.services(this.verify).verifications.create({
            to,
            channel
        });
        console.log("SendVerify: ", data);
        return data;        
    }
}

const instance = new Twilio();
Object.freeze(instance)

export {instance as twilioClient};