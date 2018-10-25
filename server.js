const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql'); 

const port = process.env.port || 3000;