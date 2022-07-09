import { useState } from 'react';
import './App.scss';

function App() {

  const [expression, setExpression] = useState("0");
  const [answer, setAnswer] = useState(expression);

  var display = (symbol) => {
    setExpression(prevValue => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }
        return newValue
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          console.log("valArr " + JSON.stringify(valArr));
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            console.log("symbol = empty ");
            symbol = "";
          }
        }

        return (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
      }
      
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
    console.log(expression)
    console.log(answer)
  }

  var calculate = () => {
    setAnswer(eval(expression))
    setExpression(eval(expression))
  };

  function allClear() {
      setExpression("");
      setAnswer(0);
  };

  var clear = () => {
    setExpression(prev => {
      setAnswer(0);
      prev = prev + ""
      return prev
        .split("")
        .slice(0, prev.length-1)
        .join("")
    })

  };

  const Pad = () => {

    const BUTTON_LAYOUT = [
        ["AC","C","/","*"],
        ["7","8","9","-"],
        ["4","5","6","+"],
        ["1","2","3","="],
        ["0","."]
    ];
    
    const BUTTON_ID = {
      "AC":"clear","C":"C","/":"divide",
      "*":"multiply","+":"add","-":"subtract",
      "=":"equals","1":"one","2":"two",
      "3":"three","4":"four","5":"five",
      "6":"six","7":"seven","8":"eight",
      "9":"nine","0":"zero",".":"decimal",
    };

    const BUTTON_CLASS = {
        "1":"one number","2":"two number","3":"three number",
        "4":"four number","5":"five number","6":"six number",
        "7":"seven number","8":"eight number","9":"nine number",
        "0":"zero number",".":"dot number","AC":"AC clear",
        "C":"C clear","/":"div sign","*":"times sign",
        "+":"plus sign","-":"minus sign","=":"equal sign",
    }

    const numberAndSymbol = ["1","2","3","4","5","6","7","8","9","0",".","/","*","+","-"];
    return (
        BUTTON_LAYOUT.map((row, index1) => 
            row.map((buttonText, index2) => {
              return <div 
                  id={BUTTON_ID[buttonText]}
                  className={`pad-button ${BUTTON_CLASS[buttonText]}`} 
                  onClick={() => numberAndSymbol.includes(buttonText) 
                                  ? display(buttonText) 
                                  : buttonText === "=" 
                                  ? calculate()
                                  : buttonText === "AC"
                                  ? allClear()
                                  : buttonText === "C"
                                  ? clear()
                                  : ""
                              } 
              >
                  {buttonText}
              </div>
            })
        )
        
      );
  };

  return (
    <div className="App">
      <div className="grid">
        <div className="display">
            <input  type="text" disabled placeholder="0" value={expression} ></input>
            <input id="display" className="total" disabled value={answer} ></input>
        </div>
        {Pad()}
      </div>
    </div>
  );
};

export default App;
