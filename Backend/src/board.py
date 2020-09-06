import random
from player import *
from card import Card

suits = ['Denari', 'Spade', 'Bastoni', 'Coppe']
card_numbers = ['Asso', 'Tre', 'Re', 'Donna', 'Fante', 'Sette', 'Sei', 'Cinque', 'Quattro', 'Due']

class Board():
    
    def __init__(self, number_cards=40):
        self.cards = self.initialize_cards()
        self.remaining_cards = number_cards
        self.last_winner = 0        

    def shuffle(self):
        """
        Shuffle the cards 
        """
        for card in self.cards:
            index = random.randint(0, self.remaining_cards-1)
            
            #Swap element
            temp = card
            card = self.cards[index]
            self.cards[index] = temp

    def deal(self, turn):
        """
        Deal the card (3 for each player during turn 0 and
        1 each player during other turn)
        
        Last_winner = 0 means that Player wins last turn instead
        last_winner = 1 means that CPU wins last turn
        Param:
            turn (number of turn on game)
            player (object of type Player)
            other (object of type Player)
        """
        if turn == 0:
            self.player = User(self.cards[0:3])
            self.other = CPU(self.cards[3:6])
            self.briscola = self.cards[6]
            self.remaining_cards = self.remaining_cards - 7
        elif self.last_winner == 0:#Player wins last turn
            if self.remaining_cards == 1:
                self.player.set_card(self.cards[40-self.remaining_cards])
                self.other.set_card(self.briscola)
                self.remaining_cards = self.remaining_cards - 1
            else:
                self.player.set_card(self.cards[40-self.remaining_cards])
                self.remaining_cards = self.remaining_cards - 1
                self.other.set_card(self.cards[40-self.remaining_cards])
                self.remaining_cards = self.remaining_cards - 1
        else:#CPU Winner turn
            if self.remaining_cards == 1:
                self.other.set_card(self.cards[40-self.remaining_cards])
                self.player.set_card(self.briscola)
                self.remaining_cards = self.remaining_cards - 1
            else:
                self.other.set_card(self.cards[40-self.remaining_cards])
                self.remaining_cards = self.remaining_cards - 1
                self.player.set_card(self.cards[40-self.remaining_cards])
                self.remaining_cards = self.remaining_cards - 1
            
    def initialize_cards(self):
        """
        Initialize cards of Briscola game
        """
        return [Card(suit, card) for card in card_numbers for suit in suits]



    def initialize_game(self):
        """
        Initialize the game of Briscola(shuffle and deal initial cards)

        Param:
            player1 (object of type Player)
            other (object of type Player)
        """
        self.shuffle()
        self.deal(0)

    def turn(self, turn, last_winner=0):
        """
        A turn of Game of Briscola(decide the winner of turn and
        deal the new cards)

        Param:
            turn (number of turn on Game)
            player (object of type Player)
            other (object of type Player)
        """
        self.last_winner = decideWinner(last_winner)
        deal(self, turn)
        return self.last_winner
        
    def decideWinner(self, last_winner):
        """
        Decide who is the winner of a hand in Briscola game

        Param:
            last_winner (boolean value to indicate which player has won
                         the last turn)
        """
        if last_winner == 0:
            card1 = self.player.get_chosen_card()
            card2 = self.other.get_chosen_card()
        else:
            card1 = self.other.get_chosen_card()
            card2 = self.player.get_chosen_card()

        if card1.suit == self.briscola.suit and card2.suit == self.briscola.suit:
            card1index = card_numbers.index(card1.card)
            card2index = card_numbers.index(card2.card)
            return last_winner if card1index < card2index else 1 - last_winner 
        elif card1.suit == self.briscola.suit:
            return last_winner

        elif card2.suit == self.briscola.suit:
            return 1 - last_winner

        elif card1.suit == card2.suit:
            card1index = card_numbers.index(card1.card)
            card2index = card_numbers.index(card2.card)
            return last_winner if card1index < card2index else 1 - last_winner
        else:
            return last_winner
            
