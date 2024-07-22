import tensorflow as tf 
import numpy as np
import json
class chatbotModel:
    def __init__(self, model_path, tokenizer_path, label_decoder_path, dataset_path):
        self.model = tf.keras.models.load_model(model_path)
        with open(tokenizer_path, 'r', encoding='utf-8') as f:
            self.tokenizer = json.load(f)
        with open(label_decoder_path, 'r', encoding='utf-8') as f:
            self.tagsClass = json.load(f)
        with open(dataset_path, 'r', encoding='utf-8') as f:
            self.dataset = json.load(f)
            
    def preprcessing_text(self, sentence):
        # Define replace_words in a better place if it's a constant
        replace_words = [
            ['saya', ['gua', 'gue', 'aku', 'gueh', 'ogut', 'gw', 'beta', 'gweh']],
            ['kamu', ['lu', 'sampean', 'elu', 'ngana', 'ente', 'anda']],
            ['hak asasi manusia', ['ham']],
            ['pencuri', ['maling']]
        ]
        filtered_words = sentence.lower().replace(r'[^\w\d\s]', '')
        words = filtered_words.split()
        
        cleaned_words = []
        for word in words:
            replaced = False
            for replacement, target in replace_words:
                if word in target:
                    cleaned_words.append(replacement)
                    replaced = True
            if not replaced:
                cleaned_words.append(word)

        return ' '.join(cleaned_words)
    
    def tokenize(self, text, max_length):
        text = text.lower()
        text = ''.join(e for e in text if e.isalnum() or e.isspace())
        
        split_text = text.split()
        tokens = [self.tokenizer.get(word, 0) for word in split_text[:max_length]]
        
        while len(tokens) < max_length:
            tokens.append(0)
            
        return np.array([tokens])
    
    def get_key_by_value(self, object, targetValue):
        for key, value in object.items():
            if value == targetValue:
                return key
        return None
    
    def predict(self, message):
        processed_text = self.preprcessing_text(message)
        tokenized_text = self.tokenize(processed_text, 12)
        prediction = self.model.predict(tokenized_text)
        return prediction, np.argmax(prediction), np.max(prediction)