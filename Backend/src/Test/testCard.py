import unittest
import sys
sys.path.append("/home/bigboss98/Programming/Projects/briscola_game/Backend")
from src.card import Card

class TestCard(unittest.TestCase):

    def testRightCard(self):
        card1 = Card("Denari", "Dieci")
        card2 = Card("Bastoni", "Asso")
        card3 = Card("Spade", "Tre")
        self.assertEqual(str(card1), "Dieci of Denari")
        self.assertEqual(str(card2), "Asso of Bastoni")
        self.assertEqual(str(card3), "Tre of Spade")

    def testSuitError(self):
        card1 = Card("Denari", "Sette")
        card2 = Card("Bastoni", "Tre")
        card3 = Card("Spade", "Due")
        self.assertNotEqual(str(card1), "Sette of Bastoni")
        self.assertNotEqual(str(card2), "Tre of Denari")
        self.assertNotEqual(str(card3), "Due of Coppe")

    def testCardError(self):
        card1 = Card("Denari", "Sei")
        card2 = Card("Bastoni", "Cinque")
        card3 = Card("Spade", "Asso")
        self.assertNotEqual(str(card1), "Sette of Denari")
        self.assertNotEqual(str(card2), "Tre of Bastoni")
        self.assertNotEqual(str(card3), "Due of Spade")

    def testCompleteCardError(self):
        card1 = Card("Denari", "Sei")
        card2 = Card("Bastoni", "Due")
        card3 = Card("Spade", "Asso")
        self.assertNotEqual(str(card1), "Sette of Bastoni")
        self.assertNotEqual(str(card2), "Tre of Denari")
        self.assertNotEqual(str(card3), "Due of Coppe")

if __name__ == '__main__':
    unittest.main()
        
