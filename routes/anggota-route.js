const express = require("express");
const AnggotaController = require("../controllers/anggota.js");
const router = express.Router();
const { authUser, isAdmin } = require("../middlewares/auth.js");


//Membuat Data
router.post("/anggota", authUser, AnggotaController.store);
//Mendapatkan Semua Data
router.get("/anggota", AnggotaController.index);
//Mendapatkan Data Berdasarkan ID
router.get("/anggota/:id", AnggotaController.show);
// //Mengakses Data Berdasarkan ID
router.route("/anggota/:id").put(AnggotaController.update).patch(AnggotaController.update);
//Mengambil Data Berdasarkan ID
router.put("/anggota/:id", authUser, isAdmin, AnggotaController.update);
//Menghapus Data
router.delete("/anggota/:id", authUser, isAdmin, AnggotaController.remove);

module.exports = router;