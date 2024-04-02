const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const clienteRoute = require("./routes/clientes");
const proyectoRoute = require("./routes/proyectos");
const observacionRoute = require("./routes/observaciones");
const actividadRoute = require("./routes/actividades");
const permisopRoute = require("./routes/permisosp");
const rolpRoute = require("./routes/rolesp");
const rolxpermisoRoute = require("./routes/rolesxpermisosp");
const permisosRoute = require("./routes/permisos");
const rolRoute = require("./routes/roles");
const usuarioRoute = require("./routes/usuarios");
const miembroproyectoRoute = require("./routes/miembrosproyectos");
const tareaRoute = require("./routes/tareas");
//const userRoute = require("./routes/user");
//const dateRoute = require("./routes/date");
//const orderRoute = require("./routes/order");

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json()); 
app.use("/api", clienteRoute);
app.use("/api", proyectoRoute);
app.use("/api", observacionRoute);
app.use("/api", actividadRoute);
app.use("/api", permisopRoute);
app.use("/api", rolpRoute);
app.use("/api", rolxpermisoRoute);
app.use("/api", permisosRoute);
app.use("/api", rolRoute);
app.use("/api", usuarioRoute); 
app.use("/api", miembroproyectoRoute); 
app.use("/api", tareaRoute);
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
