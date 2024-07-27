import express from 'express';
import { createPeraturan, findPeraturan, findPeraturanById, findPeraturanByJenis } from '../controller/peraturan.js';
import { isAuthenticated } from '../middleware/auth.js';


const router = express.Router();

// Endpoint untuk membuat peraturan
router.post('/', async (req, res) => {
    try {
        const peraturan = await createPeraturan(req.body);
        res.status(201).json(peraturan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Endpoint untuk mendapatkan peraturan berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const peraturan = await findPeraturanById(req.params.id);
        if (!peraturan) {
            return res.status(404).json({ message: 'Peraturan tidak ditemukan' });
        }
        res.status(200).json(peraturan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Endpoint untuk memperbarui peraturan berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const peraturan = await findPeraturanById(req.params.id);
        if (!peraturan) {
            return res.status(404).json({ message: 'Peraturan tidak ditemukan' });
        }
        // Update logic goes here, e.g. peraturan.set(req.body); peraturan.save();
        res.status(200).json(peraturan); // Return updated peraturan
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/jenis/:jenis', async (req, res) => {
    try {
        const {jenis} = req.params;
        const {judul, tahun} = req.params;
        const peraturan = await findPeraturanByJenis(jenis, judul, tahun);
        res.status(200).json(peraturan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;