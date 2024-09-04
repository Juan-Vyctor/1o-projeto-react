import { useReducer } from "react";

export default function Texto(props){
    let valueR = 100;
    let valueG = 0;
    let valueB = 0;
    let cor = "rgb("+valueR+","+valueG+","+valueB+")";
    
    return(
        <div>
            <h1 style={{color: cor}}>{props.text}</h1>
            
            <Reducer>
            </Reducer>
        </div>
    );

}

function Reducer() {
    function reducer(color, action) {
        if (action.type === 'increment' && color<255) {
            return color + 1;
        } else if (action.type === 'decrement' && color>0) {
            return color - 1;
        } else {
            return color;
        }
      }
      
      function Counter() {
        const [color, dispatch] = useReducer(reducer, 0);

        return (
          <div>
            <div>
                <h3>Numeração atual: {color.red}</h3>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                
                <label for="red">O "red" da cor:</label>
                <input type="range" id="red" name="red" min="0" max="255"></input>
            </div>
            <div>
                <h3>Numeração atual: {color.green}</h3>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>

                <label for="green">O "green" da cor:</label>
                <input type="range" id="green" name="green" min="0" max="255"></input>
            </div>
            <div>
                <h3>Numeração atual: {color.blue}</h3>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>

                <label for="blue">O "blue" da cor:</label>
                <input type="range" id="blue" name="blue" min="0" max="255"></input>
            </div>
          </div>
        );
      }
}