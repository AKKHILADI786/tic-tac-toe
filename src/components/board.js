import React from 'react'
import Square from './square'
export default function Board(){
    return(
        <div>
            { /* we have to return all thing in a div */ }
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
                
            
        </div>
    )
}