const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const clienteRoute = require("./routes/clientes");
const proyectoRoute = require("./routes/proyectos");
const observacionRoute = require("./routes/observaciones");
const actividadRoute = require("./routes/actividades");

//const userRoute = require("./routes/user");
//const dateRoute = require("./routes/date");
//~const orderRoute = require("./routes/order");

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // Para parsear JSON en el cuerpo de las solicitudes
app.use("/api", clienteRoute);
app.use("/api", proyectoRoute);
app.use("/api", observacionRoute);
app.use("/api", actividadRoute);
//app.use("/api", userRoute);

//app.use("/api", dateRoute);

//app.use("/api", orderRoute);

// Rutas
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// Iniciando el servidor
app.listen(port, () => {
    console.log("Server listening on port http://localhost:" + port + "/");
});
