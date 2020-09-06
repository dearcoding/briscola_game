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
    game = Game(player1= Player(name=player), player2= Player(name="cpu"))
    game.save()
    return({"game_id": str(game.id)})

@app.route('/start_game/<string:game_id>', methods=['POST'])
def start_game(game_id):
    game = Game.objects(id=game_id)
    board = Board()
    board.initialize_game()
    game.modify(upsert=True, new=True, set__board=jsonpickle.encode(board))
    return({'cards': jsonpickle.encode(board.player.cards),
            'briscola': jsonpickle.encode(board.briscola)})


@app.route('/move/<string:game_id>', methods=['POST'])
def move(game_id):
    board = jsonpickle.decode(Game.objects(id=game_id).board)
    board.player.set_chosen_card(Card(request.form['suit'], request.form['card']))
    board.turn(request.form['turn'])
    Game.objects(id=game_id).modify(upsert=True, new=True, set__board=jsonpickle.encode(board))
    return({'card_opponent': board.other.get_chosen_card(), 
           'new_draw_card': None,
           'win': "True" if board.last_winner == 0 else "False"})

app.run(host='0.0.0.0', port=5000, debug=True)
