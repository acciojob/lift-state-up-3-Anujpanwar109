import React from 'react'

const Comp1 = ({option}) => {
    
  return (
    <div id='child1'>
        <h2>Child Component 1</h2>
        <button onClick={()=>option('Option 1')}>Option 1</button>
    </div>
  )
}

export default Comp1