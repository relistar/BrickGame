import Game from "../Game.js";
import TetrisGameField from "./TetrisGameField.js";

export default class Tetris extends Game {
    #score = 0;
    #level = 0;
    #lines = 0;
    #gameField = this.#generateGameField();
    #activePiece = this.#generateNextPiece();
    #shadowPiece = this.#computeShadowPiece();

    init() {

    }

    getState() {
        return {
            score: this.#score,
            level: this.#level,
            lines: this.#lines,
            gameField: this.#gameField,
            activePiece: this.#activePiece,
            shadowPiece: this.#shadowPiece
        }
    }

    #generateGameField() {
        const gameField = new TetrisGameField();
        return gameField.field;
    }

    #generateNextPiece() {
        return undefined;
    }

    #computeShadowPiece() {
        return undefined;
    }
}