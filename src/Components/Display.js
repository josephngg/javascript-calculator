const Display = (props) => {
    return(
        <div className="display">
            <input  type="text" value={props.expression} placeholder="0" disabled />
            <div id="display" className="total">{props.answer}</div>
        </div>
    );
};

export default Display;