import unittest
import sys
sys.path.append("/home/bigboss98/Programming/Projects/briscola_game/Backend/src")
from board import *

class TestBoard(unittest.TestCase):

    def setUp(self):
        self.suits = ['Denari', 'Spade', 'Bastoni', 'Coppe']
        self.card_numbers = ['Asso', 'Tre', 'Re', 'Donna', 'Fante', 'Sette', 'Sei', 'Cinque', 'Quattro', 'Due']
        self.card_example = [Card(suit, card) for card in self.card_numbers for suit in self.suits]
        self.board = Board()
        self.assertEqual(self.board.remaining_cards, 40)

    def testInitializeCards(self):
        self.assertListEqual([str(elem) for elem in self.board.initialize_cards()], 
                             [str(elem) for elem in self.card_example])

    def testShuffle(self):
        self.board.shuffle()
        self.assertNotEqual([str(elem) for elem in self.board.cards],
                                [str(elem) for elem in self.card_example])

    def testInitialDeal(self):
        self.board.deal(0)
        self.assertEqual(len(self.board.player.cards), 3)
        self.assertEqual(len(self.board.other.cards), 3)
        self.assertEqual(self.board.remaining_cards, 33)
        self.assertEqual(self.board.briscola, self.board.cards[6])
        
    def testHandWithSameSuit(self):
        board = Board()
        board.initialize_game()
        board.player.chosen_card = Card("Denari", "Tre")
        board.other.chosen_card = Card("Denari", "Asso")
        board.last_winner = 1
        self.assertEqual(board.decideWinner(), 1)
        
    def testHandWithBriscola(self):
        board = Board()
        board.initialize_game()
        board.player.chosen_card = Card(board.briscola.suit, "Re")
        board.other.chosen_card = Card("Denari", "Cinque")
        board.last_winner = 0
        self.assertEqual(board.decideWinner(), 0)

    def testHandWithBothBriscola(self):
        board = Board()
        board.initialize_game()
        board.player.chosen_card = Card(board.briscola.suit, "Quattro")
        board.other.chosen_card = Card(board.briscola.suit, "Tre")
        board.last_winner = 0
        self.assertEqual(board.decideWinner(), 1)
    
    def testHandWithDifferentSuit(self):
        board = Board()
        board.initialize_game()
        board.player.chosen_card = Card("Denari", "Tre")
        board.other.chosen_card = Card("Spade", "Quattro")
        board.last_winner = 0
        self.assertEqual(board.decideWinner(), 0)
