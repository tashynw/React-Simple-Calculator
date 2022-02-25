import React from 'react'

const ResultBox = ( { result } ) => {
  return (
    <input className='result-box' type="text" value={result} disabled textAlign="center"/>
  )
}

export default ResultBox