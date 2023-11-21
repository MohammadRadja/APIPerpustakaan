const { json } = require("sequelize");
const { buku } = require("../models");

//Get All Data
const index = async (req, res) => {
    try {
        const bukus = await buku.findAll();
        res.status(200).json({ buku: bukus });
    } catch (error) {
        console.log(error, '<<< Buku tidak ditemukan!');
    }
};

//Create Data
const store = async (req, res) => {
    //Get Request Body
    const { JudulBuku,Pengarang,Kategori,Penerbit,Tahun } = req.body;
    try {
        //Menambahkan Data Baru
        const bukus = await buku.create({
            JudulBuku: JudulBuku,
            Pengarang: Pengarang,
            Kategori: Kategori,
            Penerbit: Penerbit,
            Tahun: Tahun
        });
        //Mengembalikan Response ke Client
        res.status(201).json(bukus);
    } catch (error) {
        console.log(error);
    }
};
//Mengupdate Data Berdasarkan ID
const update = async (req, res) => {
    //Mendapatkan req.body
    const { JudulBuku,Pengarang,Kategori,Penerbit,Tahun } = req.body;
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const bukus = await buku.findByPk(id);
        //Kondisi Data Jika tidak ditemukan
        if (!bukus) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        //Mengupdate Data
        bukus.JudulBuku = JudulBuku || bukus.JudulBuku;
        bukus.Pengarang = Pengarang || bukus.Pengarang;
        bukus.Kategori = Kategori || bukus.Kategori;
        bukus.Penerbit = Penerbit || bukus.Penerbit;
        bukus.Tahun = Tahun || bukus.Tahun;
        //Menyimpan data
        await bukus.save();
        //Mengembalikan Response ke Client
        res.status(200).json(bukus);
    } catch (error) {
        console.log(error);
    }
};

//Mendapatkan Data Berdasarkan ID
const show = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const bukus = await buku.findByPk(id);
        //Kondisi Data Jika Tidak Ditemukan
        if (!bukus) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        //Mengembalikan Response ke Client
        res.status(200).json(bukus);
    } catch (error) {
        console.log(error);
    }
};
//Menghapus Data
const remove = async (req, res) => {
    try {
        //Mendapatkan req.params
        const { id } = req.params;
        //Mencari Data Berdasarkan ID
        const bukus = await buku.findByPk(id);
        //Kondisi Data Jika Tidak Ditemukan
        if (!bukus) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        //Menghapus Data
        await bukus.destroy();
        //Mengembalikan Response ke Client
        res.status(200).json({
            message: `Buku dengan ID ${bukus.IDBuku} dan Judul ${bukus.JudulBuku} berhasil dihapus`,
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