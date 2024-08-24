import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {noPrime } from './counterSlice'
import {Table} from '../field/table.js'
import {History} from '../history/history.js'
import {Left} from '../history/left.js'

export function Counter() {
  const gameOver = useSelector(state => state.counter.gameOver);
  const prime = useSelector(state => state.counter.prime);
  const totalCount = useSelector(state => state.counter.totalCount);
  const xCount = useSelector(state => state.counter.xCount);
  const oCount = useSelector(state => state.counter.oCount);
  const drawCount = useSelector(state => state.counter.drawCount);
  const currentStep = useSelector(state => state.counter.currentStep);
  const step = useSelector(state => state.counter.step);

  const dispatch = useDispatch();
  if (prime == 0) 
  {
    dispatch({type: 'FETCH'});
    dispatch(noPrime());
  }
  else if (gameOver) {
    dispatch({type: 'GIVE', totalCount: totalCount, xCount: xCount, oCount: oCount, drawCount: drawCount});
  }
  return (
    <div className = "main">
        <Left gameOver = {gameOver} totalCount = {totalCount} xCount = {xCount} oCount = {oCount} drawCount = {drawCount}/>
        <Table gameOver = {gameOver} currentStep = {currentStep} step = {step} dispatch = {dispatch}/>
        <History gameOver={gameOver} currentStep = {currentStep} step = {step} dispatch = {dispatch}/>
    </div>
  )
}