import React from 'react'

export default function Status({ status,bg}) {
    const a=`status_bar col bg-${bg}`;
    return (
        <div className="row status-back">
            <div className={a}>
                {status}
            </div>
        </div>

    )
}
