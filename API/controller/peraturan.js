import { Peraturan } from '../models/peraturan.model.js';

export async function createPeraturan(data) {
    try {
        const peraturan = await Peraturan.create(data);
        return peraturan;
    } catch (error) {
        throw new Error('Error creating peraturan');
    }
}

export async function findPeraturan(query) {
    try {
        const peraturan = await Peraturan.find(query);
        return peraturan;
    } catch (error) {
        throw new Error('Error finding peraturan');
    }
}

export async function findPeraturanById(id) {
    try {
        const peraturan = await Peraturan.findById(id);
        return peraturan;
    } catch (error) {
        throw new Error('Error finding peraturan by ID');
    }
}