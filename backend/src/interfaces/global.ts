declare namespace NodeJS {
    interface ProcessEnv {
      TWILIO_ACCOUNT_SID: string;
      TWILIO_TOKEN_SECRET: string;
      TWILIO_PHONE: string;
      TWILIO_PHONE_SID: string;
      TWILIO_TOKEN_SID: string;
      TWILIO_SERVICE: string;
      PORT: string;
      MOBILE: string;
      // other environment variables...
    }
}