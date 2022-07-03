import { useState } from 'react';
import './App.scss';
import Pad from './Components/Pad';
import Display from './Components/Display';

function App() {

  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  return (
    <div className="App">
      <div className="grid">
        <Display 
          expression={expression} 
          setExpression={setExpression} 
          answer={answer} 
          setAnswer={setAnswer}
        />
        <Pad 
          expression={expression} 
          setExpression={setExpression} 
          answer={answer} 
          setAnswer={setAnswer}
        />
      </div>
    </div>
  );
};

export default App;
