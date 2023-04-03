import React, {useState} from "react";
import * as math from "mathjs";
import './Calculadora.css';

function Calculadora(){
  const[expresion, setExpresion] = useState("");
  const [resultado, setResultado] = useState("");


function handleButtonClick(event){
  const value = event.target.value;
  if (value === "="){
    try{
      setResultado(math.evaluate(expresion));
    }catch(error){
      setResultado("Error");
    }
  }else if (value === "C"){
    setExpresion("");
    setResultado("");
  }else{
    setExpresion((prexExpresion) => prexExpresion + value);
  }
}
return (
  <div className="container-calcu">
    <input type="text" value={expresion} disabled />
    <input type="text" value={resultado} disabled />
    <table>
      <tbody>
        <tr>
          <td>
            <button value="7" onClick={handleButtonClick}>
              7
            </button>
          </td>
          <td>
            <button value="8" onClick={handleButtonClick}>
              8
            </button>
          </td>
          <td>
            <button value="9" onClick={handleButtonClick}>
              9
            </button>
          </td>
          <td>
            <button value="/" onClick={handleButtonClick}>
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value="4" onClick={handleButtonClick}>
              4
            </button>
          </td>
          <td>
            <button value="5" onClick={handleButtonClick}>
              5
            </button>
          </td>
          <td>
            <button value="6" onClick={handleButtonClick}>
              6
            </button>
          </td>
          <td>
            <button value="*" onClick={handleButtonClick}>
              ×
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value="1" onClick={handleButtonClick}>
              1
            </button>
          </td>
          <td>
            <button value="2" onClick={handleButtonClick}>
              2
            </button>
          </td>
          <td>
            <button value="3" onClick={handleButtonClick}>
              3
            </button>
          </td>
          <td>
            <button value="-" onClick={handleButtonClick}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button value="C" onClick={handleButtonClick}>
              C
            </button>
          </td>
          <td>
            <button value="0" onClick={handleButtonClick}>
              0
            </button>
          </td>
          <td>
            <button value="." onClick={handleButtonClick}>
              .
            </button>
          </td>
          <td>
            <button value="+" onClick={handleButtonClick}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan="4">
            <button value="=" onClick={handleButtonClick}>
              =
            </button>
          </td>
        </tr>
      </tbody>
      </table>
      </div>)}

      export default Calculadora;