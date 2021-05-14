import React from 'react'
import Score from './score'
export default function ScoreBoard({win,loss,tie}) {
    return (
        <div className="board-row">
            <Score name={'player'} val={win} />
            <Score name={'tie'} val={tie} />
            <Score name={'computer'} val={loss} />
        </div>
    )
}
