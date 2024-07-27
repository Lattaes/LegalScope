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

export async function findPeraturanByJenis(jenis, judul = "", tahun = "") {
    try {
        let query = {};
        if (jenis === 'peraturan lainnya') {
            query = {
                jenis_bentuk_peraturan: { $nin: ['UNDANG-UNDANG', 'PERATURAN PEMERINTAH PENGGANTI UNDANG-UNDANG', 'PERATURAN PEMERINTAH', 'PERATURAN PRESIDEN', 'PERATURAN MENTERI', 'PERATURAN BADAN/LEMBAGA', 'PERATURAN DAERAH'] }
            };
        } else {
            query = { jenis_bentuk_peraturan: jenis };
        }

        if(judul){
            query.judul = {$regex: judul, $options: 'i'};
        }

        if(tahun){
            query.tahun = Number(tahun);
        }
        const peraturan = await Peraturan.find(query);
        return peraturan;
    } catch (error) {
        throw new Error('Tidak dapat menemukan peraturan');
    }
}