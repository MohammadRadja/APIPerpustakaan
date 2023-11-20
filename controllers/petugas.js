const { petugas } = require("../models/");
const bcrypt = require("bcrypt");
const { generateToken } = require('../utils/jwt');

const register = async (req, res) => {
    try {
        const { Nama, Username, Password } = req.body;
        const isExist = await petugas.findOne({ where: { Username } });
        if (isExist) {
            throw {name: "bad request", message: "Username/password sudah terdaftar"};
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const Petugas = await petugas.create({ 
            Nama, 
            Username, 
            Password: hashedPassword
        });
        
        return res.status(200).json({
            message: 'Petugas Registered Succesfully',
            data: Petugas
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Petugas Registered Failed',
            error: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { Username, Password } = req.body;
        if (!Username || !Password) {
            return res.status(400).json({ message: 'username and password are required' });
        }

        const Petugas = await petugas.findOne({ where: { Username } });
        if (!Petugas) {
            throw {name: "bad request", message: "Username tidak terdaftar"};
        }

        const isValidPassword = await bcrypt.compare(Password, Petugas.Password);
        if (!isValidPassword) {
            throw {name: "bad request", message: "Password salah"};
        }

        const payload = {
            id: Petugas.id,
            Username: Petugas.Username,
            isAdmin: Petugas.isAdmin
        };

        const token = generateToken(payload);
        
        return res.status(200).json({ 
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Login Failed' });
    }
};

module.exports = { 
    register, 
    login 
};