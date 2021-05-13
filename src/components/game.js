import React from 'react'
import Board from './board'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xisNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    handleClick(i){
        const history=this.state.history.slice(0,this.state.stepNumber+1);
        const current=history[history.length-1]
        const square=current.squares.slice();
        const winner=calculateWinner(square);
        if(winner || square[i]){
            return;
        }
        square[i]=this.state.xisNext?'X':'O';

        this.setState({
            history:history.concat({
                squares:square
            }),
            xisNext:!this.state.xisNext,
            stepNumber:history.length
        })
        console.log('you have clicked ',i,square)

    }
    render() {
        const history=this.state.history;
        const current=history[this.state.stepNumber];

        return (
            <div className="game">
                <div>
                    <Board onClick={(i)=>this.handleClick(i)} squares={current.squares}/>
                </div>
                
            </div>

        )
    }
}


function calculateWinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8]

    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a] && squares[a]===squares[b] &&squares[c]===squares[b]){
            return squares[a];
        }
    }
    return null;
}


