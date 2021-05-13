import React from 'react'
import Board from './board'

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            xisNext: true,
            stepCount: 0,
            history: [
                { square: Array(9).fill(null) }
            ]
        }
    }
    render() {
        return (
            <div>
                <Board />
            </div>

        )
    }
}



