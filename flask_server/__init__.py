from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# Konfigurasi CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

from flask_server.routes.predik_pencurian_routes import prediksi_pencurian_bp
from flask_server.routes.chatbot_routes import chatbot_bp

app.register_blueprint(prediksi_pencurian_bp)
app.register_blueprint(chatbot_bp)