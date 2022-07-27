import React from 'react'
import { useState } from 'react'

export const Triple=()=> {
    const[count,setCount] = useState(0)
    let counter = 0
    const HandleClick=()=>{
        counter = counter +1
        if(counter%3===0){
            setCount(count+1)
        }
    }
    const SubClick=()=>{
        counter = counter-1
        if(counter%2==0){
            setCount(count-1)
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>HandleClick()}>ADD</button>
        <button onClick={()=>SubClick()}>SUB</button>
    </div>
  )
}

// export default Triple