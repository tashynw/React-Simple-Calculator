import React from 'react'

const Buttons = ({ setResult,result,compute }) => {
  return (
    <div className='button-container'>
        <button className='button' onClick={() => {setResult(result+"7");}}>7</button>
        <button className='button' onClick={() => {setResult(result+"8");}}>8</button>
        <button className='button' onClick={() => {setResult(result+"9");}}>9</button>
        <button className='button' onClick={()=>setResult('')}>AC</button>
        <button className='button' onClick={()=>setResult(result.substring(0,result.length-1))}>Back</button>
        <button className='button' onClick={() => {setResult(result+"4");}}>4</button>
        <button className='button' onClick={() => {setResult(result+"5");}}>5</button>
        <button className='button' onClick={() => {setResult(result+"6");}}>6</button>
        <button className='button' onClick={()=>setResult(result+"*")}>X</button>
        <button className='button' onClick={()=>setResult(result+"(")}>(</button>
        <button className='button' onClick={() => {setResult(result+"1");}}>1</button>
        <button className='button' onClick={() => {setResult(result+"2");}}>2</button>
        <button className='button' onClick={() => {setResult(result+"3");}}>3</button>
        <button className='button' onClick={()=>setResult(result+"/")}>/</button>
        <button className='button' onClick={()=>setResult(result+")")}>)</button>
        <button className='button' onClick={()=>setResult(result+"+")}>+</button>
        <button className='button' onClick={() => {setResult(result+"0")}}>0</button>
        <button className='button' onClick={()=>setResult(result+"-")}>-</button>
        <button className='button' onClick={compute}>=</button> 
    </div>
  )
}

export default Buttons