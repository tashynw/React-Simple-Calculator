import './App.css';
import ResultBox from './ResultBox';
import Buttons from './Buttons';
import { useState } from 'react';
import { create,all } from 'mathjs';

function App() {
  const [result,setResult] = useState('');

  const compute=()=>{
    setResult(math.evaluate(result));
  }
  const math = create(all,  {})

  return (
    
    <div className="App">
      <ResultBox result={result}/>
      <Buttons
        result={result}
        setResult={setResult}
        compute={compute}
      />
    </div>
  );
}

export default App;
