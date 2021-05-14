import React from 'react'


export default function Square(props) {
    return (

        <button className="square col-3 sm-m-auto" onClick={props.onClick}>
            {props.value}
        </button>

    )
}