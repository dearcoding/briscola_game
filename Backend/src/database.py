import mongoengine as me 

class Player(me.EmbeddedDocument):
    name = me.StringField(primary_key=True)
    #cards = 

class Game(me.Document):
    player1 = me.EmbeddedDocumentField(Player)
    player2 = me.EmbeddedDocumentField(Player)
    #briscola = me.
    #cards = me.
    #remaining_cards = me.IntField()
    winner = me.EmbeddedDocumentField(Player)
