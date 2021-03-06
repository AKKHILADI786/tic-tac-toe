import React from 'react'
import Board from './board'
import Scoreboard from './scoreBoard'
import Status from './Status'
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xisNext: true,
            stepNumber: 0,
            human: 'X',
            computer: 'O',
            win: 0,
            loss: 0,
            tie: 0,
            possible_wins: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]

            ],
            board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            history: [
                { squares: Array(9).fill(null) }

            ]
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const square = current.squares.slice();
        const newBoar = this.state.board;

        const winner = calculateWinner(newBoar);
        //console.log('current board structure', newBoar)
        if (winner) {
            this.playagain();
            return;
        }
        if (square[i]) {
            return;
        }
        square[i] = this.state.xisNext ? 'X' : 'O';
        //this.state.board[i]=square[i];

        newBoar[i] = square[i];

        this.setState({
            history: history.concat({
                squares: square
            }),
            xisNext: !this.state.xisNext,
            stepNumber: history.length,
            board: newBoar
        }, () => {
           this.computerturn();
            
        })

        
        //console.log('you have clicked ', i, square)

        //setTimeout(()=>{
        // this.computerturn();
        //}, 500);

    }
    gameOver(board) {
        const possibleWins = this.state.possible_wins;
        for (let i = 0; i < possibleWins.length; i++) {
            const [a, b, c] = possibleWins[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                // Returns the winner: X or O.
                return board[a];
            }
        }
        if (board.filter(sqr => sqr !== 'X' && sqr !== 'O').length) {
            // Returns true when the game is not finished.
            return false;
        } else {
            // Returns false when it's a tie.
            return 'TIE';
        }
    }
    computerThink(board, player) {
        // Has the available empty squares on the board.
        //console.log(typeof(board));
        const emptySquares = board.filter(sqr => sqr !== 'X' && sqr !== 'O');

        // Checks if the game is over and returns its final state.
        // Known as the leaves of the tree generated by the algorithm.
        if (this.gameOver(board) === this.state.human) {
            return { score: -10 };
        } else if (this.gameOver(board) === this.state.computer) {
            return { score: 10 };
        } else if (emptySquares.length === 0) {
            return { score: 0 };
        }

        // Holds each move with index and score from the empty squares.
        // E.g.: { index: '' , score: '' }
        let moves = [];

        // Loops through the empty squares array
        for (let i = 0; i < emptySquares.length; i++) {
            let move = {}; // Holds each index/score.
            move.index = board[emptySquares[i]]; // Holds the board's index.
            board[emptySquares[i]] = player; // Simulates a player's move.

            // Changes the player to continue the simulation and makes a recursive
            // call to this method (the MiniMax Algorithm itself).
            if (player === this.state.computer) {
                let newMove = this.computerThink(board, this.state.human);
                move.score = newMove.score;
            } else if (player === this.state.human) {
                let newMove = this.computerThink(board, this.state.computer);
                move.score = newMove.score;
            }

            // Empties the board for the next iteration
            board[emptySquares[i]] = move.index;

            // Includes the simulated move into the moves array.
            moves.push(move);
        }

        //console.log('the moves',moves)
        // Holds the bestMove, the one which scores the highest for the computer and
        // the lowest for the human.
        let bestMove;

        // Returns the MiniMax scores: 'max' for the computer;'min' for the human.
        if (player === this.state.computer) {
            let bestScore = -5000; // Sets a small enough score to compare.
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else if (player === this.state.human) {
            let bestScore = 5000; // Sets a big enough score to compare.
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        // Gives back the best possible moves as an array.
        return moves[bestMove];

    }
    Restart(){
        this.setState({
            xisNext: true,
            stepNumber: 0,
            human: 'X',
            computer: 'O',
            win: 0,
            loss: 0,
            tie: 0,
            possible_wins: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]

            ],
            board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            history: [
                { squares: Array(9).fill(null) }

            ]
        })

    }
    playagain() {
        let win=this.state.win;
        let loss=this.state.loss;
        let tie=this.state.tie;
        const game=this.gameOver(this.state.board);
        if(game===this.state.human){
            win++;
        }
        else if(game===this.state.computer){
            loss++;
        }
        else if(game==='TIE'){
            tie++;
        }

        this.setState({
            xisNext: true,
            stepNumber: 0,
            human: 'X',
            win:win,
            loss:loss,
            tie:tie,
            computer: 'O',
            possible_wins: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]

            ],
            board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            history: [
                { squares: Array(9).fill(null) }

            ]
        })
    }
    computerturn() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const square = current.squares.slice();
        const board = this.state.board;

        const arr = this.computerThink(board, this.state.computer);
        //console.log('output of computer', arr)
       // console.log('index chossen', arr.index)
        board[arr.index] = this.state.computer;
        square[arr.index] = board[arr.index];
        setTimeout(() => {
            this.setState({
                board: board,
                history: history.concat({
                    squares: square
                }),
                xisNext: !this.state.xisNext,
                stepNumber: history.length
            })
        }, 500);
        


        return;
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const board=this.state.board;
        let status;

        const game=this.gameOver(board);
        if(game==='TIE'){
            status="Match Draw !";

        }
        else if (winner) {
            if(winner==='X'){
                status="Congratulations! You Win"
            }
            else{
                status="Better Luck! Next Time"
            }
            // status = "winner is  " + winner;

            // this.playagain();
        }
        else {
            

            if(this.state.xisNext){
                status="Player Turn"
            }
            else{
                status="Computer Turn"
            }
            //status = `This is turn of ${this.state.xisNext ? 'X' : 'O'}`;

        }
        console.log(status);

        return (
            <div className="container d-flex justify-content-center">
                <div className="game">
                    
                    {game?<Status bg={'success'} status={status}/>:<Status bg={'danger'} status={status}/>}
                   
                    <button className="btn btn-danger sm-m-0 m-2" onClick={()=>this.playagain()}>Play again</button>
                    <button className="btn btn-danger sm-m-0 m-2"  onClick={()=>this.playagain()}>Clear</button>
                    <button className="btn btn-danger sm-m-0 m-2"  onClick={()=>this.Restart()}>Restart</button>
                    <hr className="liness"></hr>
                    <Board onClick={(i) => this.handleClick(i)} squares={current.squares} />
                    <hr className="liness"></hr>
                    <Scoreboard win={this.state.win} loss={this.state.loss} tie={this.state.tie} />
                </div>

            </div>

        )
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[c] === squares[b]) {
            return squares[a];
        }
    }
    return null;
}


