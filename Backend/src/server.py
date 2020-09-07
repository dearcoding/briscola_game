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
from card import Card
import json

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
        "db": "briscola",
    }

db = MongoEngine(app)
ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))


def cards_object_to_list(object):
    new_list = []
    for card in object.cards:
        tmp = {}
        tmp['suit'] = (card.suit)
        tmp['card'] = (card.card)
        new_list.append(tmp)
    return new_list

def board_to_dict(board):
    # FROM CARDS LIST OF OBJECT TO SIMPLE LIST
    board_cards = cards_object_to_list(board)
    player_cards = cards_object_to_list(board.player)
    other_cards = cards_object_to_list(board.other)
    # GENERATE NEW DICT
    new_dict = board.__dict__
    new_dict['cards'] = board_cards
    new_dict['player'] = board.player.__dict__
    new_dict['player']['cards'] = player_cards
    new_dict['other'] = board.other.__dict__
    new_dict['other']['cards'] = player_cards

    tmp = {}
    tmp['suit'] = board.briscola.suit
    tmp['card'] = board.briscola.card

    new_dict['briscola'] = tmp
    return new_dict

@app.route('/new_game/<string:player>', methods=['GET'])
def new_game(player):
    game = Game(player1 = Player(name=player), player2 = Player(name="cpu"))
    game.save()
    return({"game_id": str(game.id)})

@app.route('/start_game/<string:game_id>', methods=['POST'])
def start_game(game_id):
    game = Game.objects(id=game_id)
    board = Board()
    board.initialize_game()
    game.update(set__board=jsonpickle.encode(board))
    new_board = jsonpickle.decode(game[0].board)
    new_board_dict = board_to_dict(new_board)
    return({'cards': new_board_dict['player']['cards'],
                'briscola': new_board_dict['briscola']})


@app.route('/move/<string:game_id>', methods=['POST'])
def move(game_id):
    # we get json data
    card = request.json["card"]
    turn = request.json["turn"]

    game = Game.objects(id=game_id)

    board = jsonpickle.decode(game[0].board)
    board.player.set_chosen_card(Card(card["suit"], card["card"]))
    board.other.set_chosen_card()

    board.turn(turn)

    game.update(set__board=jsonpickle.encode(board))

    new_board = jsonpickle.decode(game[0].board)
    new_board_dict = board_to_dict(new_board)

    return({'card_opponent': new_board_dict['other']['chosen_card'],
           'new_draw_card': None,
           'win': "True" if board.last_winner == 0 else "False"})

app.run(host='0.0.0.0', port=5000, debug=True)
