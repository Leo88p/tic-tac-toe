import React from 'react'
import {Field} from './field.js'
import {newGame} from '../counter/counterSlice.js'
import { useSelector} from 'react-redux'

export function Table(props) {
    const player = useSelector(state => state.counter.player);
    const gameOver = props.gameOver;
    const currentStep = props.currentStep;
    const step = props.step;
    const board = useSelector(state => state.counter.board);
    const dispatch = props.dispatch;
    const winner = useSelector(state => state.counter.winner);
    return(
        <div className="game">
            <p hidden = {gameOver}>Сейчас ходит {player}</p>
            <table>
                <tbody>
                    <tr>
                        <Field y='0' x='0' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='0' x='1' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='0' x='2' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                    </tr>
                    <tr>
                        <Field y='1' x='0' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='1' x='1' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='1' x='2' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                    </tr>
                    <tr>
                        <Field y='2' x='0' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='2' x='1' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                        <Field y='2' x='2' gameOver={gameOver} currentStep = {currentStep} step = {step} board = {board} dispatch = {dispatch}/>
                    </tr>
                </tbody>
            </table>
            <p hidden = {!winner}>Игра окончена. Победил {winner}</p>
            <p hidden = {!gameOver || winner}>Игра окончена вничью</p>
            <button style={{fontSize: '20px'}} hidden = {!gameOver} onClick={()=>dispatch(newGame())}>Сыграть ещё раз</button>
            <p style={{flexGrow: 1}}/>
        </div>
    )
}