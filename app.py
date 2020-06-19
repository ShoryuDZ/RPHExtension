# app.py
from flask import Flask, jsonify, request
import script
app = Flask(__name__)

@app.route('/randomsites', methods=['GET'])
def randomSites():
    return jsonify(script.returnSites())