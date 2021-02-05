import req from '../api/req.js'

/*
     * API used to start a game
     *
     * Param:
     *      game_id: the id of the game to start
     *
*/
export async function startGame(game_id) {
    const response = await req.post('/start_game/' + game_id);
    return response.data;
}
