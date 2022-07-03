const PadButton = (props) => {

    const BUTTON_ID = {
        "AC":"clear",
        "C":"C",
        "/":"divide",
        "*":"multiply",
        "+":"add",
        "-":"subtract",
        "=":"equals",
        "1":"one",
        "2":"two",
        "3":"three",
        "4":"four",
        "5":"five",
        "6":"six",
        "7":"seven",
        "8":"eight",
        "9":"nine",
        "0":"zero",
        ".":"decimal",
    };

    const BUTTON_CLASS = {
        "1":"one number",
        "2":"two number",
        "3":"three number",
        "4":"four number",
        "5":"five number",
        "6":"six number",
        "7":"seven number",
        "8":"eight number",
        "9":"nine number",
        "0":"zero number",
        ".":"dot number",
        "AC":"AC clear",
        "C":"C clear",
        "/":"div sign",
        "*":"times sign",
        "+":"plus sign",
        "-":"minus sign",
        "=":"equal sign",
    }

    const numberAndSymbol = ["1","2","3","4","5","6","7","8","9","0",".","/","*","+","-"];

    const display = (symbol) => {
        props.setExpression(prev => prev + symbol)
        if (props.expression[props.expression.length-1] === "=") {
            if(/[0-9]/.test(symbol)) {
                props.setExpression(symbol)
            } else {
                props.setExpression(props.answer + symbol)
            }
        }

    };

    const calculate = () => {
        props.setAnswer(eval(props.expression))
        props.setExpression(prev => prev + "=")
    };

    const allClear = () => {
        props.setExpression("");
        props.setAnswer(0);
    };

    const clear = () => {
        props.setExpression(prev => prev.split("").slice(0, prev.length-1).join(""))
        props.setAnswer(0)
    };

    return (
        <div 
            id={BUTTON_ID[props.text]}
            className={`pad-button ${BUTTON_CLASS[props.text]}`} 
            onClick={() => numberAndSymbol.includes(props.text) 
                            ? display(props.text) 
                            : props.text === "=" 
                            ? calculate()
                            : props.text === "AC"
                            ? allClear()
                            : props.text === "C"
                            ? clear()
                            : ""
                        } 
        >
            {props.text}
        </div>
    );
}

export default PadButton;