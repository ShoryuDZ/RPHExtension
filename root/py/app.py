# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import json
import random
app = Flask(__name__)
CORS(app)

@app.route('/randomsite')
def randomSite():
    sitesFile = open('sites.json')
    sites = json.load(sitesFile)
    index = random.randint(0, len(sites))
    site = jsonify(["http://www.pornhub.com" + sites[index]])
    return (site)

if __name__ == "__main__":
    app.run()
