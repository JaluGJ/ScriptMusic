
const axios = require('axios');
const API_URL = 'https://sm.up.railway.app';

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
