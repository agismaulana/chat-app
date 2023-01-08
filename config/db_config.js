const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config()
const uri = process.env.DB_URI;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri);
}