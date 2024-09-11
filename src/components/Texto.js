import { useReducer, useState } from "react";
import './css/Texto.css';

export default function Texto(props){
    
    return(
        <div>
            <h1>A vida é melhor com <Reducer text={props.text}/></h1>
        </div>
    );

}

function Reducer(props) {

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
        const [red, setRed] = useReducer(reducer, 0);
        const [green, setGreen] = useReducer(reducer, 0);
        const [blue, setBlue] = useReducer(reducer, 0);

        const [oldRed, setOldRed] = useState(0);
        const [oldGreen, setOldGreen] = useState(0);
        const [oldBlue, setOldBlue] = useState(0);
        // setcontsvalue()
        return (
            <div class='dinamic_text'>
                <p style={{color: "rgb("+red+","+green+","+blue+")"}}>{props.text}</p>
                <div class='hide_controler'>
                    <h4>Red atual do texto: {red}</h4>
                    <input type="range" id="red" name="red" min="0" max="255"
                        onChange={
                            (e) => {
                                e.stopPropagation();
                                setOldRed(e.target.value);
                                if (document.getElementById("red").value > oldRed) {
                                    setRed({type: "increment"})
                                } else if (document.getElementById("red").value < oldRed) {
                                    setRed({type: "decrement"})
                                }
                            }
                        }
                    >
                    </input>
                </div>
                <div class='hide_controler'>
                    <h4>Green atual do texto: {green}</h4>
                        <input type="range" id="green" name="green" min="0" max="255"
                            onChange={
                                (e) => {
                                    e.stopPropagation();
                                    setOldGreen(e.target.value);
                                    if (document.getElementById("green").value > oldGreen) {
                                        setGreen({type: "increment"})
                                    } else if (document.getElementById("green").value < oldGreen) {
                                        setGreen({type: "decrement"})
                                    }
                                }
                            }
                        >
                        </input>
                </div>
                <div class='hide_controler'>
                    <h4>Blue atual do texto: {blue}</h4>
                        <input type="range" id="blue" name="blue" min="0" max="255"
                            onChange={
                                (e) => {
                                    e.stopPropagation();
                                    setOldBlue(e.target.value);
                                    if (document.getElementById("blue").value > oldBlue) {
                                        setBlue({type: "increment"})
                                    } else if (document.getElementById("blue").value < oldBlue) {
                                        setBlue({type: "decrement"})
                                    }
                                }
                            }
                        >
                        </input>
                </div>
            </div>
        );
    }
    return Counter();        
}