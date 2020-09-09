import JSModel from 'react-native-jsmodel';

export default class CardModel extends JSModel {
    constructor(json) {
        super(json);
        if (this.validate(json)) {
            this.card = json.card;
            this.suit = json.suit;
        }
    }
    getCard(){
        return this.card;
    }
    getSuit(){
        return this.suit;
    }

    toString(){
        return this.card+this.suit;
    }
}
