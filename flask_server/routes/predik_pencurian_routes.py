from flask import Blueprint, request, jsonify
from flask_server.models.predik_pencurian import PrediksiPencurian
from flask_server.utils.mapping import tempat_kejadian_pencurian_map, waktu_kejadian_map, pelaku_menggunakan_alat_map, sasaran_kejahatan_map, jumlah_kerugian_map, mo_map
import numpy as np
import os

prediksi_pencurian_bp = Blueprint('prediksi_pencurian_bp', __name__)

model_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../Model/PredikJenisPencurian/model_pencurian_gnb.pkl'))
model = PrediksiPencurian(model_path)

@prediksi_pencurian_bp.route('/predict', methods=['POST'])
def predict():
    data = request.json
    tempat_kejadian = tempat_kejadian_pencurian_map[data['Tempat Kejadian']]
    waktu_kejadian = waktu_kejadian_map[data['Waktu Kejadian']]
    pelaku_alat = pelaku_menggunakan_alat_map[data['Pelaku Menggunakan Alat']]
    sasaran = sasaran_kejahatan_map[data['Sasaran Kejahatan']]
    kerugian = jumlah_kerugian_map[data['Jumlah Kerugian']]
    modus = mo_map[data['Modus Operandi']]
    
    input_data = np.array([[tempat_kejadian, waktu_kejadian, pelaku_alat, sasaran, kerugian, modus]])
    predicted_class = model.predict(input_data)

    jenis_pencurian_map = {0: 'CUBIS', 1: 'CURAT', 2: 'CURAS'}
    result = jenis_pencurian_map[predicted_class]

    return jsonify({'prediksi': result})