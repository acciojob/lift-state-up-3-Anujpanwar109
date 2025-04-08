import React,{useState} from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

const Selected = () => {
    let[data,setData]=useState("")
    function handelOption(option){
        setData(option)
    }
  return (
    <div className="parent">
    <h1>Parent Component</h1>
        <Comp1
            option={handelOption}
        />
        <Comp2
            option={handelOption}
        />

        <p>Selected Option:{data}</p>
    </div>
  )
}

export default Selected
