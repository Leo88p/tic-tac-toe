import React from 'react'
import { play } from '../counter/counterSlice'

export function Field(props) {
    const board = props.board;
    const gameOver = props.gameOver;
    const currentStep = props.currentStep;
    const step = props.step;
    const dispatch = props.dispatch;
    let letter ='';
    if (board[props.y][props.x] > 0 && board[props.y][props.x]%10 <= currentStep) {
        letter = 'X';
    }
    else if (board[props.y][props.x]/currentStep < 0 && board[props.y][props.x]%10 >= -currentStep) {
        letter = '0';
    }
    let className = 'field'
    if (Math.abs(board[props.y][props.x]) > 9 && currentStep==step) {
        className = 'winningField';
    }
    return (
        <td className = "gameTd">
            <button 
                className={className} 
                onClick={()=>dispatch(play({y: props.y,x: props.x}))}
                disabled={Math.abs(board[props.y][props.x])>0 || gameOver || currentStep != step}
            >
                {letter}
            </button>
        </td>
    )
}