import Tetris from "./game/tetris/Tetris.js";

export default class BrickGame {
    start() {
        const game = new Tetris();
        game.init();

        const state = game.getState();
        console.log(state);
    }
}