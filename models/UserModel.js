const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    date_created: {
        type: Date
    }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;