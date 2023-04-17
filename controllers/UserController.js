const db = require('./../config/db_config');
const UserModel = require('./../models/UserModel');

exports.GetAllUser = async (req, res) => {
    try {
        return await UserModel.find()
        .then(response => {
            res.status(200).json({
                data: response.map(value => ({
                    id: value._id,
                    name: value.name,
                    email: value.email,
                    role: value.role,
                    date_created: new Date(value.date_created).toDateString()
                })),
                message: "List User Successfully",
                status: true,
            })
        })
    } catch(err) {
        return await res.status(400).json({
            message: `Something Went Error With message ${err}`,
            status: false
        });
    }
}

exports.GetDetailUser = async (req, res) => {
    try {
        return await UserModel.findOne({ _id: req.params.id })
        .then(response => {
            res.status(200).json({
                data: {
                    id: response._id,
                    name: response.name,
                    email: response.email,
                    role: response.role,
                    date_created: new Date(response.date_created).toDateString()
                },
                message: 'Detail User Successfully',
                status: false,
            })
        })
        .catch(err => {
            res.status(404).json({
                message: 'Data not found',
                status: false
            })
        })
    } catch(err) {
        res.status(400).json({
            message: `Something error with message ${err}`,
            status: false,
        })
    }
}

exports.CreateUser = async (req, res) => {
    try {
        let data = req.body;
        data.date_created = new Date();
        return await UserModel.create(data)
        .then(value => {
            res.status(201).json({
                message: "Successfully Create User",
                status: true,
            });
        })
        .catch(err => {
            res.status(400).send({
                message: "Failed Create User",
                status: false,
            });
        });
    } catch(err) {
        res.status(422).send({
            message: `Something Went Error With message ${err}`,
            status: false
        });
    }
}

exports.UpdateUser = async (req, res) => {
    try { 
        let data = req.body;
    } catch (err) {
        res.status(422).send({
            message: `Something went error with message ${err}`,
            status: false 
        });
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        console.log('delete user')
    } catch (err) {
        console.log(err)
    }
}