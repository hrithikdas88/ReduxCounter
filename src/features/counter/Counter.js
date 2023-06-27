import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset,incrementByAmount} from './counterSlice'
import { useState } from 'react'
const Counter = () => {
    const count =useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        <button>incrementByAmount</button>     
        <button onClick={()=>dispatch(reset())}>reset</button>
        </div>

    </section>
  )
}

export default Counter