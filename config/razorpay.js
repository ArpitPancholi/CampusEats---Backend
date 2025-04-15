require('dotenv').config();
const Razorpay = require("razorpay");

const key_id = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID.trim();
const key_secret = process.env.RAZORPAY_SECRET && process.env.RAZORPAY_SECRET.trim();


exports.instance = new Razorpay({
  key_id,
  key_secret,
});