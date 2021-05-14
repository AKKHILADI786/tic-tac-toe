import React from 'react'

export default function Score({name,val}) {
    return (
        <div className="score text-center bg-primary">
            <div className="score-inner bg-primary">{name}</div>
            <div className="score-inner bg-primary">{val}</div>
        </div>
    )
}
