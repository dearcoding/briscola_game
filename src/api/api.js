import axios from 'axios';

export async function newGame(text) {
    /*
     * API function that make a request to backend to obtain gameID
     * 
     * Param:
     *      name: name of player
     */
    let request = await axios.get('http://192.168.1.58:5000/new_game/' + text);
    let gameIdData = await request.game_id;
    alert(gameIdData);
    alert("DIo" + request.game_id);
     /*axios
        .get('http://192.168.1.58:5000/new_game/' + text)
        .then(function (response) {
            gameIdData = response.data.game_id;
            //alert(gameIdData);
            
        })
        .catch(function (error) {
            alert(error.message + text);
            
        });*/
    return gameIdData;
}


export function startGame(gameId) {
    /*
     * API function that makes the request to backend to initialize and start a game
     *
     * Param:
     *      gameId: ID of a game
     */

     axios
        .post('http://192.168.1.58:5000/start_game/' + gameId)
        .then(function (response) {
            return response.data;
            briscola = new CardModel(response.data.briscola);
            cardsList = new CardModelList(response.data.cards);
            let i = 0;
            cardsList.getList().forEach(function (obj) {
                const temp = i;
                const move = 50 + i * 100;
                player.push(
                    <View style={{
                        position: 'absolute',
                        top: 560,
                        left: move,
                    }}>
                        <TouchableOpacity myId={temp} onPress={() => moveCard(temp)}>
                            <Card nameCard={obj.toString()}></Card>
                        </TouchableOpacity>
                    </View>
                );
                i += 1;
            });
            let briscolaName = briscola.toString();
            briscolaNewTmp = (
                <Card nameCard={briscolaName} style={styles.briscola} position={"absolute"} top={20} left={300}></Card>
            );
            setPlayers(player);
            setBriscola(briscolaNewTmp);
        })
        .catch(function (error) {
            alert(error.message);
        });
}