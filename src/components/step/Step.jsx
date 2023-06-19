import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Form from "../form/Form";

function Step() {
  const [formPart, setFormPart] = React.useState(1);
  const [isPartReady, setIsPartReady] = React.useState([false, false, false]);

  function changeReadyForm(index, value) {
    setIsPartReady(prev => {
      prev[index] = value;
      return prev;
    })
  }

  function incrementFormPage() {
    if (isPartReady[formPart-1]) {
      setFormPart(prev => prev === 3 ? prev : prev + 1)
    }
  }

  function decrementFormPage() {
    setFormPart(prev => prev - 1)
  }

  let background = `linear-gradient(to right, #5558FA 0%, #5558FA ${100/2*(formPart-1)}%, rgba(0, 0, 0, 0.08) ${100/2*(formPart-1)}%)`

  return (
    <div className="Step">
      <div>
        <header>
          <input type="range" min={1} max={3} style={{background: background}} value={formPart} readOnly />
          <div className="Step-header-text">
            { Array.from(new Array(3)).map((item, index) => 
                  <p key={index+1} >{index+1}</p>) }
          </div>
        </header>

        <Form formPart={formPart} changeReadyForm={changeReadyForm} />
      </div>

      <div className="Step-buttons">
        {formPart === 1 ? <Link to='/anketa/'>
                            <Button text='Назад' id='button-back' />
        </Link> : <Button text='Назад' id='button-back' handleclick={decrementFormPage} />}
        
        <Button text='Далее' id='button-next' handleclick={incrementFormPage} />
      </div>
    </div>
  )
}

export default Step;