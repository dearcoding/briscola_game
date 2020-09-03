"""
Module Player to manage a player of Briscola game
"""
import random

class Player():
    """
    Player class manage a generic player
    """

    def __init__(self, cards, name, points = 0):
        self.points = points
        self.name = name
        self.cards = cards
        self.chosen_card = None
       

    
    def set_card(self, card):
        """
        Set card of a Player, received after the deal 
        after a turn of Game

        Param:
            card (object of type Card)

        """
        for temp in self.cards:
            if temp is None:
                temp = card

    def get_chosen_card(self):
        """
        Get the chosen card by a Player during a turn
        """
        return self.chosen_card



class User(Player):
    """
    User class extends the player class 
    """

    def __init__(self, cards, player_name="Player"):
        super().__init__(cards, player_name)




class CPU(Player):
    """
    CPU class extends the player class
    """
    def __init__(self, cards, player_name="CPU"):
        super().__init__(cards, player_name)

    def chosen_card(self):
        """
        Choose card to play by CPU player
        """
        index = random.randint(0, 2)
        self.chosen_card = self.cards[index]
        self.cards[index] = None


