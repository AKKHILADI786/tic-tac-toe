import React from 'react'

export default function Score({name,val}) {
    return (
        <div className="score">
            <div>{name}</div>
            <div>{val}</div>
        </div>
    )
}
