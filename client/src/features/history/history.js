import React from 'react'
import { setStep} from '../counter/counterSlice'

export function History(props) {
    const step = props.step;
    const currentStep = props.currentStep;
    const dispatch = props.dispatch;
    const gameOver = props.gameOver;
    return (
        <div className="column" style = {gameOver?{marginTop:'30px'}:{marginTop:'96px'}}>
            <table>
                <tbody>
                    <tr><td hidden = {step>=1?false:true}><button  disabled = {currentStep==1?true:false} onClick={()=>dispatch(setStep({n: 1}))}>Ход 1</button></td></tr>
                    <tr><td hidden = {step>=2?false:true}><button  disabled = {currentStep==2?true:false} onClick={()=>dispatch(setStep({n: 2}))}>Ход 2</button></td></tr>
                    <tr><td hidden = {step>=3?false:true}><button  disabled = {currentStep==3?true:false} onClick={()=>dispatch(setStep({n: 3}))}>Ход 3</button></td></tr>
                    <tr><td hidden = {step>=4?false:true}><button  disabled = {currentStep==4?true:false} onClick={()=>dispatch(setStep({n: 4}))}>Ход 4</button></td></tr>
                    <tr><td hidden = {step>=5?false:true}><button  disabled = {currentStep==5?true:false} onClick={()=>dispatch(setStep({n: 5}))}>Ход 5</button></td></tr>
                    <tr><td hidden = {step>=6?false:true}><button  disabled = {currentStep==6?true:false} onClick={()=>dispatch(setStep({n: 6}))}>Ход 6</button></td></tr>
                    <tr><td hidden = {step>=7?false:true}><button  disabled = {currentStep==7?true:false} onClick={()=>dispatch(setStep({n: 7}))}>Ход 7</button></td></tr>
                    <tr><td hidden = {step>=8?false:true}><button  disabled = {currentStep==8?true:false} onClick={()=>dispatch(setStep({n: 8}))}>Ход 8</button></td></tr>
                    <tr><td style = {{borderBottom: 'none'}} hidden = {step>=9?false:true}><button  disabled = {currentStep==9?true:false} onClick={()=>dispatch(setStep({n: 9}))}>Ход 9</button></td></tr>
                </tbody>
            </table>
        </div>
    )
}
