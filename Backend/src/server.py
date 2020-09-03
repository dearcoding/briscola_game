import datetime 
import hashlib
from flask import request
from flask import Flask
from flask import jsonify
import requests
import os
import json
import random

app = Flask(__name__)

ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/new_game', methods=['GET'])
def new_game():
    game_id = "lol"
    return({"game_id": game_id})

@app.route('/start_game', methods=['POST'])
def start_game(game_id):



@app.route('/move', methods=['POST'])
def move(game_id, card_played):


app.run(host='0.0.0.0', port=5000, debug=True)
