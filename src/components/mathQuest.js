import React, { useEffect, useState } from 'react'
import './mathQuest.css'

// import TextField from '@mui/material/TextField';






const  MathQuest = (props) => {
const [addA ,setAddA] = useState(null)
const [addB, setAddB] = useState(null)
const [answer, setAnswer] = useState(null)


useEffect(()=>{
    generateValues()
},[])

const generateValues = () =>{

    let first = Math.floor((Math.random() * 100))
    setAddA(first)

    let second = Math.floor((Math.random()* 100))
    setAddB(second)

}

const checkAns = () =>{
    let correctAns = addA + addB
    let submitAns =  answer

    if(correctAns == submitAns){
        alert("correct")
        setAddA(null)
        setAddB(null)
        setAnswer(null)
        generateValues()
    }
    else{
        alert("wrong")
        setAddA(null)
        setAddB(null)
        setAnswer(null)
        generateValues()
    }
}

    return (
        <div>
            
            <div className={"box1"}>
                <p className={"p1"}>{addA}+ {addB}</p>
            </div>
            <div className={"box1"}>
            <p className={'headline'}>Your Answer</p>
                <form
                onSubmit={e =>{e.preventDefault(); checkAns()}}
                >
                    
                    <input className={"input"}
                    type="numbers" 
                    value={answer} 
                    onChange={(e => setAnswer(e.target.value))}
                    >

                    </input>
                    <button type="submit"className={"button"}>Submit</button>
                </form>
                
                
            </div>
        </div>
    );
}

export default MathQuest;