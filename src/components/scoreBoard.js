import React from 'react'
import Score from './score'
export default function ScoreBoard() {
    return (
        <div className="board-row">
            <Score name={'player'} val={1} />
            <Score name={'tie'} val={1} />
            <Score name={'computer'} val={1} />
        </div>
    )
}
