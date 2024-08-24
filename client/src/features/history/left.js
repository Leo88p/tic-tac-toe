import React from 'react'
export function Left(props) {
    const gameOver = props.gameOver;
    const totalCount = props.totalCount;
    const xCount = props.xCount;
    const oCount = props.oCount;
    const drawCount = props.drawCount;
    return (
        <div className="column-right" style = {gameOver?{marginTop:'30px'}:{marginTop:'96px'}}>
            <p>Сыграно партий: {totalCount}<br/>
            Побед крестиков: {xCount}<br/>
            Побед ноликов: {oCount}<br/>
            Ничьих: {drawCount}</p>
        </div>
    )
}