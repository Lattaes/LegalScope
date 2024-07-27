import numpy as np
from flask import Blueprint, request, jsonify
from flask_server.models.chatbot import chatbotModel
import os

chatbot_bp = Blueprint('chatbot_bp', __name__)

model_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../Model/LegalScopeChatbot/chatbot_model.h5'))
tokenizer_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../Model/LegalScopeChatbot/tokenizer_chatbot_dict.json'))
label_decoder_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../Model/LegalScopeChatbot/label_decoder.json'))
dataset_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../Model/LegalScopeChatbot/Dataset/law_qna.json'))

chatbot_model = chatbotModel(model_path, tokenizer_path, label_decoder_path, dataset_path)

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message')
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    prediction, tagResultSequence, confi_score = chatbot_model.predict(message)
    
    if confi_score < 0.6:
        return jsonify({'response': 'Maaf, saya tidak bisa memahami maksud anda. Mohon jelaskan kembali...'})
    
    tagResult = chatbot_model.get_key_by_value(chatbot_model.tagsClass, tagResultSequence)
    responses = next((d['responses'] for d in chatbot_model.dataset['intents'] if d['tag'] == tagResult), ["Sorry, I didn't get that."])
    response = np.random.choice(responses)
    
    return jsonify({'response': response})