const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '../.env.local');
const envFileContent = fs.readFileSync(envFilePath, 'utf8');
const parsedEnv = dotenv.parse(envFileContent);

const mongoConnectionURI = parsedEnv.MONGODB_URI;

const connectToMongoDB = () => {
    try {
        mongoose.connect(mongoConnectionURI);
        console.log("Connected to the database successfully.")
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToMongoDB;