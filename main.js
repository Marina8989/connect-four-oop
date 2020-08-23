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

    makeHTMLBoard() {
        const board = document.getElementById('board');
        board.innrHTML = '';
        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        this.handleGameClick = this.handleGAmeClick.bind(this);
        top.addEventListener('click', this.handleGameClick);

        for(let x = 0; x < this.width; x++) {
          const headCell = document.createElement('td');
          headCell.setAttribute('id', x);
          top.append(headCell);
        }
        board.append(top);
    }
}