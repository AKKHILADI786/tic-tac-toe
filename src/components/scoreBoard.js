import React from 'react'
import Score from './score'
export default function ScoreBoard({win,loss,tie}) {
    return (
        <div className="board-row score-board">
            <Score name={'Player'} val={win} />
            <Score name={'Tie'} val={tie} />
            <Score name={'Computer'} val={loss} />
        </div>
    )
}
