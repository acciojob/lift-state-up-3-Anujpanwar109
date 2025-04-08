import React from 'react'

const Comp1 = ({option}) => {
    
  return (
    <div id='child1'>
        <h2>Child Component 1</h2>
        <button onClick={()=>option('option1')}>option1</button>
    </div>
  )
}

export default Comp1