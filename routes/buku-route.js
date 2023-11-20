const express = require("express");
const BukuController = require("../controllers/buku.js");
const router = express.Router();
const { authUser, isAdmin } = require("../middlewares/auth.js");


//Membuat Data
router.post("/buku", authUser, BukuController.store);
//Mendapatkan Semua Data
router.get("/buku", BukuController.index);
//Mendapatkan Data Berdasarkan ID
router.get("/buku/:id", BukuController.show);
// //Mengakses Data Berdasarkan ID
router.route("/buku/:id").put(BukuController.update).patch(BukuController.update);
//Mengambil Data Berdasarkan ID
router.put("/buku/:id", authUser, isAdmin, BukuController.update);
//Menghapus Data
router.delete("/buku/:id", authUser, isAdmin, BukuController.remove);

module.exports = router;