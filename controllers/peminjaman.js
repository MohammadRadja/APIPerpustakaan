const { anggota, buku, peminjaman } = require("../models");

const index = async (req, res) => {
    try {
        const Peminjaman = await peminjaman.findAll({
            include: [
                {
                    model: buku,
                    as: "buku", // Gunakan alias yang sesuai
                },
                {
                    model: anggota,
                    as: "anggota", // Gunakan alias yang sesuai
                },
            ],
        });
        res.status(200).json({ peminjaman: Peminjaman });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const store = async (req, res) => {
    try {
        const { JudulBuku, TanggalPinjam, TanggalKembali } = req.body;
        // tolong buatkan review baru untuk movie ini dengan data yang dikirimkan dan tampilkan hasilnya beserta data movie-nya
        const Peminjaman = await peminjaman.create({
            JudulBuku,
            TanggalPinjam,
            TanggalKembali,
            IDBuku: req.buku.id,
            IDAnggota: req.anggota.id
        });
        return res.status(201).json(Peminjaman);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const update = async (req, res) => {
    try {
        const IDPeminjaman = req.params.id;
        const { JudulBuku, TanggalPinjam, TanggalKembali } = req.body;

        const Peminjaman = await peminjaman.findByPk(IDPeminjaman);
        if (!Peminjaman) {
            return res.status(404).json({ message: "Peminjaman not found" });
        }

        Peminjaman.JudulBuku = TanggalPinjam || Peminjaman.JudulBuku;
        Peminjaman.JudulBuku = TanggalKembali || Peminjaman.TanggalPinjam;
        Peminjaman.JudulBuku= JudulBuku || Peminjaman.TanggalKembali;

        await Peminjaman.save();

        res.status(200).json(Peminjaman);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const Peminjaman = await peminjaman.findByPk(id);
        if (!Peminjaman) {
            return res.status(404).json({ message: "Peminjaman not found" });
        }

        await Peminjaman.destroy();
        return res
            .status(200)
            .json({ message: `Peminjaman denganID ${Peminjaman.id} telah dihapus` });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
module.exports = { 
    index, 
    store, 
    update, 
    remove 
};