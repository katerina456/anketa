import React from "react";
import InputText from "../input-text/InputText";
import classes from "./style.module.css"
import plus from '../../icons/Plus.svg';
import del from '../../icons/Delete.svg'

function MultyInputText( {text, placeholder, id, check} ) {
    const [idCount, setIdCount] = React.useState(4);
    const [textMistake, setTextMistake] = React.useState(false);

    const [inputs, setInputs] = React.useState([
        {placeholder: placeholder, id: id + '-1', value: ''},
        {placeholder: placeholder, id: id + '-2', value: ''},
        {placeholder: placeholder, id: id + '-3', value: ''},
    ])


    function addNewInput() {
        let newInput = {placeholder: placeholder, id: id + '-' + idCount, value: ''};
        setInputs([...inputs, newInput]);
        setIdCount(prev => prev + 1);

        checkMistake();
    }

    function removeInput(input) {
        setInputs(prev => {
            return prev.filter(p => p.id !== input.id);
        });

        checkMistake();
    }

    function checkVlue(event) {
        let index = inputs.findIndex(elem => elem.id === event.target.id);

        setInputs(prev => {
            prev[index].value= event.target.value;
            return prev;
        }) 

        checkMistake();
    }

    function checkMistake() {
        let flag = true;
        inputs.forEach(item => {
            flag = flag && item.value !== '';
        })

        setTextMistake(flag);
        check(flag)
    }
    
  return (
    <>
        <p className={classes.text}>{text}</p>

        <div className={classes.flexColumn}>
            {inputs.map(input => 
                <div className={classes.flex} key={input.id}>
                    <InputText placeholder={input.placeholder} max={50} id={input.id} 
                        handleChange={checkVlue}
                    />
                    <div className={classes.buttonRemove} 
                         id="button-remove-1" onClick={() => removeInput(input)}>
                        <img src={del} alt="" />
                    </div>
                </div>
            )}
        </div>

        <div className={classes.button} id="button-add" onClick={addNewInput} >
            <img src={plus} alt="" />
        </div>

        {!textMistake && <span className={classes.mistake}>You have to put something in fields or remove them</span>}
    </>
  )
}

export default MultyInputText;