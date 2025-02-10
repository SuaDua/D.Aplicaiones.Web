const express = require('express');
const cors = require('cors');
const path = require('path'); // Importar el módulo 'path'

const app = express();
app.use(cors());
app.use(express.json());

let tareas = []; // Simulación de base de datos en memoria

// Servir el archivo HTML como página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { titulo, descripcion } = req.body;
    if (!titulo || !descripcion) {
        return res.status(400).json({ error: "Título y descripción son obligatorios" });
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo,
        descripcion
    };

    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Eliminar una tarea por ID
app.delete('/tareas/:id', (req, res) => {
    const { id } = req.params;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === parseInt(id));

    if (tareaIndex === -1) {
        return res.status(404).json({ error: `Tarea con ID ${id} no encontrada` });
    }

    tareas.splice(tareaIndex, 1);
    res.json({ message: `Tarea ${id} eliminada` });
});

// Manejar rutas no encontradas (opcional)
app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
