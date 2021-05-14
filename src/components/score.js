import React from 'react'

export default function Score({name,val}) {
    return (
        <div className="score text-center bg-danger col-3 sm-m-auto">
            <div className="score-inner bg-danger">{name}</div>
            <div className="score-inner bg-danger">{val}</div>
        </div>
    )
}
