const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
const authRoutes = require('./Routes/authRoutes')

mongoose
  .connect("mongodb://localhost:27017/authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT,() =>{
    console.log(`server started  at ${PORT}`)
})
