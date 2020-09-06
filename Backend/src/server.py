import datetime 
import hashlib
from flask import request
from flask import Flask
from flask import jsonify
from flask_mongoengine import MongoEngine
import requests
import os
import jsonpickle
import random
import sys
from board import Board
from database import Game, Player

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
        "db": "briscola",
    }

db = MongoEngine(app)
ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/new_game/<string:player>', methods=['GET'])
def new_game(player):
    board = Board()
    board.initialize_game()
    game = Game(player1= Player(name=player), player2= Player(name="cpu"), board=jsonpickle.encode(board))
    game.save()
    return({"game_id": str(game.id)})

@app.route('/start_game/<string:game_id>', methods=['POST'])
def start_game(game_id):
    game = Game.objects(id=game_id)
    board = jsonpickle.decode(game.board)
    board.turn(request['turn'])
    game.board = jsonpickle.encode(board)
    game.save()


@app.route('/move', methods=['POST'])
def move(game_id, card_played):
    pass

app.run(host='0.0.0.0', port=5000, debug=True)
