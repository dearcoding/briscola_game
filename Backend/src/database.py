import mongoengine as me 

class Player(me.EmbeddedDocument):
    name = me.StringField(primary_key=True)

class Game(me.Document):
    player1 = me.EmbeddedDocumentField(Player)
    player2 = me.EmbeddedDocumentField(Player)
    board = me.DictField(required=True)
    winner = me.EmbeddedDocumentField(Player)
