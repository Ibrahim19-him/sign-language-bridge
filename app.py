from flask import Flask, request, jsonify
import json

app = Flask(__name__)

with open("gesture_map.json", "r", encoding="utf-8") as f:
    gesture_map = json.load(f)

@app.route("/get-video", methods=["POST"])
def get_video():
    data = request.get_json()
    text = data.get("text", "").strip().lower()
    video = gesture_map.get(text, "default.mp4")
    return jsonify({"video": video})

if __name__ == "__main__":
    app.run()
