
const axios = require('axios');
const API_URL = 'http://62.108.35.100:3001';

export const fetchPaymentIntent = async (body) => {
    const {data} = await axios.post(`${API_URL}/create-payment-intents`, body);
    const {clientSecret,error} = data;
    return {clientSecret,error};
}


export const fetchStatusPayment = async (body,statusPay) => {
    let newBody = {
        ...body,
        status: statusPay
    }
    const {data} = await axios.post(`${API_URL}/status-payment`,newBody)
    const {msg,error} = data
    return {msg,error}
  }
