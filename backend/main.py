import os
import requests
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")


# Constants
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG = int(os.environ.get("DEBUG", 1))


# Error Check for UNSPLASH_KEY validation
if not UNSPLASH_KEY:
    raise EnvironmentError("Unsplash Key cannot be NULL!")


# Intializing Flask App
app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG


# New Image GET API call
@app.route("/new-image")
def newImage():
    word = request.args.get("query")
    headers = {"Accept-version": "v1", "Authorization": "Client-ID " + UNSPLASH_KEY}
    params = {"query": word}

    respose = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    return respose.json()


# Driver Code
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)  # Run application
