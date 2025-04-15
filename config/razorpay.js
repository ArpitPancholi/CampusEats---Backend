// const Razorpay = require("razorpay");

// console.log("Razorpay Key:", process.env.RAZORPAY_KEY_ID); // Debug log

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

require('dotenv').config();
const Razorpay = require("razorpay");

const key_id = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID.trim();
const key_secret = process.env.RAZORPAY_SECRET && process.env.RAZORPAY_SECRET.trim();

//console.log("Razorpay Key:", key_id); // Verify that no extra spaces exist

exports.instance = new Razorpay({
  key_id,
  key_secret,
});