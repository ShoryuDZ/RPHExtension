# app.py
from flask import Flask, request, Response
import script
import json
app = Flask(__name__)

@app.route('/randomsites', methods=['GET'])
def randomSites():
    sites = open('sites.json')
    response = Response(json.load(sites))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return (response)