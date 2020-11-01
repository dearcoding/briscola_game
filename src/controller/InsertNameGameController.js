import req from '../api/req.js'

/*
     * API function that make a request to backend to obtain gameID
     *
     * Param:
     *      name: name of player
     *
*/
export async function newGame(text) {
    const response = await req.get('/new_game/' + text);
    const gameId = response.data.game_id
    return gameId;
}
