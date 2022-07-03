import PadButton from "./PadButton";

const Pad = (props) => {

    const BUTTON_LAYOUT = [
        ["AC","C","/","*"],
        ["7","8","9","-"],
        ["4","5","6","+"],
        ["1","2","3","="],
        ["0","."]
    ];
    
    return (
        BUTTON_LAYOUT.map((row, index1) => 
            row.map((buttonText, index2) => 
                <PadButton 
                    text={buttonText} 
                    key={`${index1} ${index2}`}
                    expression={props.expression}
                    setExpression={props.setExpression}
                    answer={props.answer} 
                    setAnswer={props.setAnswer}
                />
            )
        )
        
    );
};

export default Pad;