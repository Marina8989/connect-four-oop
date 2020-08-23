class Game{
    constructor(p1, p2, height = 6, width = 7){
       this.players = [p1, p2];
       this.height = height;
       this.width = width;
       this.currPlayer = p1;
       this.makeBoard();
       this.makeHTMLBoard();
       this.gameOver() = false;
    }

    makeBoard() {
        this.board = [];
        for(let y = 0; y < this.height; y++){
           this.board.push(Array.from({length: width}));
        }
    }
}