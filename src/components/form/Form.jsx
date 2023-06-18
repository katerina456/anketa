import React from "react";
import SingleInputText from "../single-text-input/SingleInputText";
import MultyInputText from "../multy-input-text/MultyInputText";
import Select from "../select/Select";
import Checkbox from "../checkbox/Checkbox";
import Radio from "../radio/Radio";

function Form( {formPart, changeReadyForm} ) {
    const [formData, setFormData] = React.useState(
        {'field-nickname': "", 
        'field-name': "", 
        'field-sername': "",
        'field-sex': "man",
        'field-checkbox-group-option-1': false,
        'field-checkbox-group-option-2': false,
        'field-checkbox-group-option-3': false,
        'radio': "",
        'field-about': ""
        }
    )

    const [isAdvantages, setIsAdvantages] = React.useState(false)
    console.log(isAdvantages)

    console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const firstPart = React.useMemo(() => {
        return formData['field-nickname'] !== '' && 
                formData['field-name'] !== '' && formData['field-sername'] !== '';
    }, [formData])

    const secondPart = React.useMemo(() => {
        return formData['radio'] !== '' && isAdvantages ;
    }, [formData, isAdvantages])
    
    React.useEffect(() => {
        let part = formPart === 1 ? firstPart : secondPart;
        changeReadyForm(formPart-1, part);
    }, [firstPart, secondPart])

  return (
    <form>
        {formPart === 1 && 
            <>
                <SingleInputText text='Nickname' value={formData['field-nickname']} 
                        handleChange={handleChange} placeholder='Placeholder' 
                        id='field-nickname' max={30} pattern="^[A-ZА-ЯЁ0-9]+$" />
                <SingleInputText text='Name' value={formData['field-name']} 
                        handleChange={handleChange} placeholder='Placeholder' 
                        id='field-name' max={50} pattern="^[A-ZА-ЯЁ]+$" />
                <SingleInputText text='Sername' value={formData['field-sername']} 
                        handleChange={handleChange} placeholder='Placeholder' 
                        id='field-sername' max={50} pattern="^[A-ZА-ЯЁ]+$" />
                <Select id='field-sex' value={formData['field-sex']} handleChange={handleChange} />
            </>
        }
        {formPart === 2 && 
            <>
                <MultyInputText text='Advantages' placeholder='Placeholder' 
                        id='field-advatages' check={setIsAdvantages}
                />

                <p>Checkbox group</p>
                <Checkbox text='1' id="field-checkbox-group-option-1" 
                          handleChange={handleChange} 
                          checked={formData['field-checkbox-group-option-1']}
                />
                <Checkbox text='2' id="field-checkbox-group-option-2" 
                          handleChange={handleChange} 
                          checked={formData['field-checkbox-group-option-2']}
                />
                <Checkbox text='3' id="field-checkbox-group-option-3" 
                          handleChange={handleChange} 
                          checked={formData['field-checkbox-group-option-3']}
                />

                <p>Radio group</p>
                <Radio text='1' name="radio" id="field-radio-group-option-1" 
                       handleChange={handleChange} checked={formData['radio'] === "1"}
                />
                <Radio text='2' name="radio" id="field-radio-group-option-2" 
                       handleChange={handleChange} checked={formData['radio'] === "2"}
                />
                <Radio text='3' name="radio" id="field-radio-group-option-3" 
                       handleChange={handleChange} checked={formData['radio'] === "3"}
                />
            </>
        }
        {formPart === 3 && 
            <>
                <p>About</p>
                <textarea name="field-about" id="field-about" value={formData['field-about']}
                    placeholder="Placeholder" maxLength={200} onChange={handleChange}
                >
                </textarea>
                <div className="counter"><span>{formData['field-about'].length}/200</span></div>
            </>
        }
        
    </form>
  )
}

export default Form;