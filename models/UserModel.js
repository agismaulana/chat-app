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
    phone_number: {
        type: String
    },
    role: {
        type: String,
    },
    date_created: {
        type: Date
    },
    bio: {
        type: String
    },
    last_login_at: {
        type: Date
    }
})

const User = mongoose.model('users', UserSchema);

module.exports = User;