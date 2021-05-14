import React from 'react'

export default function Score({name,val}) {
    return (
        <div className="score text-center bg-danger">
            <div className="score-inner bg-danger">{name}</div>
            <div className="score-inner bg-danger">{val}</div>
        </div>
    )
}
