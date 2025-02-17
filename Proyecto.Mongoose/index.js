require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Conectar con MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(error => console.error("❌ Error conectando a MongoDB:", error));

// 🔹 Definir el esquema de la tarea
const tareaSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String
});

// 🔹 Crear el modelo basado en el esquema
const Tarea = mongoose.model("Tarea", tareaSchema);

// 📌 GET: Obtener todas las tareas desde MongoDB
app.get('/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: "Error obteniendo las tareas" });
    }
});

// 📌 POST: Crear una nueva tarea en MongoDB
app.post('/tareas', async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        if (!titulo || !descripcion) {
            return res.status(400).json({ error: "Título y descripción son obligatorios" });
        }

        const nuevaTarea = new Tarea({ titulo, descripcion });
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(500).json({ error: "Error creando la tarea" });
    }
});

// 📌 DELETE: Eliminar una tarea por ID en MongoDB
app.delete('/tareas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tareaEliminada = await Tarea.findByIdAndDelete(id);
        if (!tareaEliminada) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }
        res.json({ message: `Tarea ${id} eliminada` });
    } catch (error) {
        res.status(500).json({ error: "Error eliminando la tarea" });
    }
});

// 🔹 Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});