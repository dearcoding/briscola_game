import JSModel from 'react-native-jsmodel';
import CardModel from "../models/CardModel";

export default class CardModelList extends JSModel {
    constructor(json) {
        super(json);
        if (this.validate(json)) {
            const cards = [];
            json.forEach(function(obj) {
                let card = new CardModel(obj);
                cards.push(card);
            });
            this.cards = cards;
        }
    }

    toString(){
        let str = "";
        this.cards.forEach(function (i) {
            str = str + "card: " + i.getCard() + " suit: " + i.getSuit() + " ";
        })
        return str;
    }

    getList(){
        return this.cards;
    }
}
