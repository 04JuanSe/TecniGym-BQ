
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
