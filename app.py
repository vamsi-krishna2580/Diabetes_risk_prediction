from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS
import warnings

# -------------------------------
# Suppress sklearn feature-name warning ONLY
# -------------------------------
warnings.filterwarnings(
    "ignore",
    message="X does not have valid feature names*"
)

app = Flask(__name__)
CORS(app)

# -------------------------------
# Load model and scaler
# -------------------------------
model = joblib.load("model/svm_diabetes_model.pkl")
scaler = joblib.load("model/scaler.pkl")

# Feature names used during training
FEATURE_NAMES = [
    "Pregnancies",
    "Glucose",
    "BloodPressure",
    "SkinThickness",
    "Insulin",
    "BMI",
    "DiabetesPedigreeFunction",
    "Age"
]

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # -------------------------------
        # Print input from frontend
        # -------------------------------
        print("\n📥 Input received from frontend:")
        for key, value in data.items():
            print(f"  {key}: {value}")

        # Convert input to DataFrame (keeps feature names)
        features = pd.DataFrame([[
            float(data["pregnancies"]),
            float(data["glucose"]),
            float(data["bloodPressure"]),
            float(data["skinThickness"]),
            float(data["insulin"]),
            float(data["bmi"]),
            float(data["dpf"]),
            float(data["age"])
        ]], columns=FEATURE_NAMES)

        # Scale features
        features_scaled = scaler.transform(features)

        # Predict
        prediction = model.predict(features_scaled)[0]
        result = "High Risk" if prediction == 1 else "Low Risk"

        # -------------------------------
        # Print model output
        # -------------------------------
        print("📤 Model output:")
        print(f"  Prediction class : {prediction}")
        print(f"  Risk category    : {result}")

        return jsonify({
            "prediction": result
        })

    except Exception as e:
        print("❌ Prediction error:", str(e))
        return jsonify({
            "error": "Invalid input data",
            "message": str(e)
        }), 400


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "Backend running"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)