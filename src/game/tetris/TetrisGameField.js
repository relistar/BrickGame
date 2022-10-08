export default class TetrisGameField {
    #width = 10;
    #height = 20;
    #field = this.generateField();

    get field() {
        return this.#field;
    }

    generateField () {
        const field = [];

        for(let line = 0; line < this.#height; line++) {
            field[line] = [];
            for(let column = 0; line < this.#width; column++) {
                field[line][column] = 0;
            }
        }

        return field;
    }
}