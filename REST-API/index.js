require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/router");
app.use(cors());
app.use(express.json());
app.use("/api", router);


const {DB_NAME, DB_CONNECTION ,PORT} = process.env;
mongoose.connect(`${DB_CONNECTION}/${DB_NAME}`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {console.log(`Connected to ${DB_NAME}`);});
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});
