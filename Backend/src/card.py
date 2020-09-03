"""
Module card.py to represent Card object for Briscola game
"""

class Card():
    """
    Card class that represent a Card object
    """

    def __init__(self, suit, card):
        self.suit = suit
        self.card = card

    def __str__(self):
        return self.card + " of " + self.suit


