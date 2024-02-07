from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, supports_credentials=True)

users = [{
    "email": "user@gmail.com", "password": "user123"}  # Example user
]

@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"message": "Invalid request, must provide JSON"}), 400

    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    found_user = next((user for user in users if user["email"] == email and user["password"] == password), None)

    if not found_user:
        return jsonify({"message": "No user with those credentials found!"}), 401


    sanitized_user = {"name": found_user.get("name"), "id": found_user.get("id"), "email": found_user.get("email")}

    users[found_user.get("name")] = {"watchlist": [], "favorites": []}

    return jsonify({"user": sanitized_user})

@app.route('/add_favorite', methods=['POST'])
def add_favorite():
    if not request.is_json:
        return jsonify({"message": "Invalid request, must provide JSON"}), 400

    email = request.json.get("email")
    movie = request.json.get("movie")  # Assuming movie is a dictionary or an ID

    if not email or not movie:
        return jsonify({"message": "Email and movie are required"}), 400

    for user in users:
        if user["email"] == email:
            user["favorites"].append(movie)
            return jsonify({"message": "Movie added to favorites"}), 200

    return jsonify({"message": "User not found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
