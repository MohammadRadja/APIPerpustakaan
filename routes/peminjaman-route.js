const express = require("express");
const router = express.Router();
const PeminjamanControllers = require("../controllers/peminjaman.js");
const { authUser, isAdmin } = require("../middlewares/auth.js");


//Membuat Data
router.post("/peminjaman", authUser, PeminjamanControllers.store);
//Mendapatkan Semua Data
router.get("/peminjaman", PeminjamanControllers.index);
//Mengambil Data Berdasarkan ID
router.put("/peminjaman/:id", authUser, isAdmin, PeminjamanControllers.update);
//Menghapus data
router.delete("/peminjaman/:id", authUser, isAdmin, PeminjamanControllers.remove);

module.exports = router;