const express = require("express");

const nodemailer = require("nodemailer");

const multiparty = require("multiparty");

require("dotenv").config();


const app = express();

const transporter = nodemailer.createTransport({

    

});