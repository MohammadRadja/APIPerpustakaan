const express = require("express");
const BukuRoutes = require("./routes/buku-route.js");
const PeminjamanRoutes = require("./routes/peminjaman-route.js");
const AnggotaRoutes = require("./routes/anggota-route.js");
const userRoutes = require("./routes/petugas-route.js");
const app = express();
const PORT = 3000;
const payloadParsing = require("./middlewares/payloadParse");
const morgan = require("morgan");
const dotenv = require('dotenv')

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(payloadParsing);
app.use(morgan('dev'));
app.use(BukuRoutes);
app.use(PeminjamanRoutes);
app.use(AnggotaRoutes);
app.use(userRoutes);

app.use((err, req, res, next) => {
    if (err?.name === "unauthorized"){
        res.status(401).json({ message: err?.message ?? "unauthorized" });
        return;
    }
    if (err?.name === "forbidden"){
        res.status(403).json({ message: err?.message ?? "forbidden" });
        return;
    }
    if (err?.name === "bad request"){
        res.status(400).json({ message: err?.message ?? "bad request" });
        return;
    }  
    
    res.status(500).json({ message: err?.message });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});