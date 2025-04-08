import React from 'react'


const Comp2 = ({option}) => {
    
  return (
    <div id='child2'>
        <h2>Child Component 2</h2>
        <button onClick={()=>option("Option 2")}>option2</button>
    </div>
  )
}

export default Comp2