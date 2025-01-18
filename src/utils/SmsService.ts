

// curl --location 'http://155.12.30.77:8085/api/v1/send-sms' \
// --header 'Content-Type: application/json' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LmJ1bGtzbXMiLCJyb2xlcyI6WyIvY29udGFjdC1saXN0cyIsIi9zbXMtc2NoZWR1bGVkIiwiL2Rhc2hib2FyZCIsIi9zZW5kZXJzIiwiL3Ntcy1zZW5kIiwiL21hbmFnZS11c2VycyIsIi9zbXMtdGVtcGxhdGVzIiwiL3Ntcy1wdXJjaGFzZSIsIi9zbXMtb3V0Ym94IiwiL21hbmFnZS1yZXBvcnRzIl0sImV4cCI6MTY1NjA1ODU4OSwiaWF0IjoxNjU1OTk4NTg5fQ.vqu0E9XYFPr_dnTPNHanoHICMT22BKG8nQd1mzNSg4ZNaGaoR_xmLnXLg51c3ReGZNrTfmYOVgltiDAdLcylCA' \
// --data-raw '{
//     "username":"test.bulksms",
//     "password":"KijumbeWeb@2020",
//     "senderId":"SHAMBA BORA",
//     "message":"Hello from alpha codes",
//     "phoneNumbers":["0783512912"]
// }'


import axios from 'axios';

type SmsPayload= {
    message:string;
    phoneNumbers:string[];
}

type SendSms = {
    username: string;
    password: string;
    senderId: string;
    message:string;
    phoneNumbers:string[];
  };


  async function SendSmsService(smsPayload: SmsPayload) {
    const sendSms:SendSms={
        username:"ShambaBora",
        password:"ShambaBora@2020",
        senderId:"SHAMBA BORA",
        message:smsPayload.message,
        phoneNumbers:smsPayload.phoneNumbers
    }
    try {
      console.log("Sending sms to : "+smsPayload.phoneNumbers +" "+smsPayload.message) 
      const { data, status } = await axios.post<SendSms>('http://155.12.30.77:8085/api/v1/send-sms', sendSms, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(JSON.stringify(data));
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  export {SmsPayload,SendSmsService}