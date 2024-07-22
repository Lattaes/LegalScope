import tensorflow as tf
import numpy as np
import joblib

class PrediksiPencurian:
    def __init__(self, model_path):
        try:
            self.model = joblib.load(model_path)
            print("Model loaded successfully.")
        except Exception as e:
            print(f"Error loading model: {e}")

    def predict(self, input_data):
        prediction = self.model.predict(input_data)
        predicted_class = prediction[0]
        return predicted_class