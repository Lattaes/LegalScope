import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./Router/index.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(route);

// Models
import { create, findPeraturan, findPeraturanById } from './models/peraturan.model.js';

// Root route
app.get('/', (req, res) => {
    res.send('Hello');
});



// Add Peraturan
app.post('/api/peraturan', async (req, res) => {
    try {
        const peraturan = await create(req.body);
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Data
app.get('/api/peraturan', async (req, res) => {
    try {
        const peraturan = await findPeraturan({});
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Peraturan Based on ID
app.get('/api/peraturan/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const peraturan = await findPeraturanById(id);
        res.status(200).json(peraturan);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server listening on http://127.0.0.1:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Connection failed: ', error);
    });