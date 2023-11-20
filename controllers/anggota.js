const { json } = require("sequelize");
const { anggota } = require("../models");

//Mendapatkan Semua Data
const index = async (req, res) => {
    try {
        const Anggota = await anggota.findAll();
        res.status(200).json({ anggota: Anggota });
    } catch (error) {
        console.log(error, '<<< Anggota tidak ditemukan!');
    }
};

//Membuat Data
const store = async (req, res) => {
    //Mendapatkan Request Body
    const { IDAnggota, Nama,Jurusan,MasaBerlaku } = req.body;
    try {
        //Menambahkan Data Baru
        const Anggota = await anggota.create({
            IDAnggota: IDAnggota,
            Nama: Nama,
            Jurusan: Jurusan,
            MasaBerlaku: MasaBerlaku
        });
        //Mengembalikan Response ke Client
        res.status(201).json(Anggota);
    } catch (error) {
        console.log(error);
    }
};
//Mengupdate Data Berdasarkan ID
const update = async (req, res) => {
    //Mendapatkan req.body
    const { IDAnggota, Nama,Jurusan,MasaBerlaku } = req.body;
    try {
        //Mendapatkan req.params
        const { IDAnggota } = req.params;
        //Mencari Data Berdasarkan ID
        const Anggota = await anggota.findByPk(IDAnggota);
        //Kondisi Data Jika tidak ditemukan
        if (!Anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }
        //Mengupdate Data
        Anggota.IDAnggota = IDAnggota || Anggota.IDAnggota;
        Anggota.Nama = Nama || Anggota.Nama;
        Anggota.Jurusan = Jurusan || Anggota.Jurusan;
        Anggota.MasaBerlaku = MasaBerlaku || Anggota.MasaBerlaku;
        //Menyimpan data
        Anggota.save();
        //Mengembalikan Response ke Client
        res.status(200).json(Anggota);
    } catch (error) {
        console.log(error);
    }
};

//Mendapatkan Data Berdasarkan ID
const show = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { IDAnggota } = req.params;
        //Mencari Data Berdasarkan ID
        const Anggota = await anggota.findByPk(IDAnggota);
        //Kondisi Data Jika Tidak Ditemukan
        if (!Anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }
        //Mengembalikan Response ke Client
        res.status(200).json(Anggota);
    } catch (error) {
        console.log(error);
    }
};
//Menghapus Data
const remove = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { IDAnggota } = req.params;
        //Mencari Data Berdasarkan ID
        const Anggota= await anggota.findByPk(IDAnggota);
        //Kondisi Data Jika Tidak Ditemukan
        if (!Anggota) {
            return res.status(404).json({ message: "Anggota tidak ditemukan" });
        }
        //Menghapus Data
        Anggota.destroy();
        //Mengembalikan Response ke Client
        res.status(200).json({
            message: `Anggota dengan ID ${Anggota.IDAnggota} dan Nama ${Anggota.Nama} berhasil dihapus`,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    index,
    store,
    show,
    update,
    remove
};