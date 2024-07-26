import { useContext, useEffect } from "react"
import { initialErrors, initialValues, labels } from "../adapters/Labels"
import { messageWarning } from "../utilities/LabelWarnings"
import { validation } from "../utilities/Validations"
import { FormContext } from "../context/FormContext"

/**
 * type = age, weight, height, 
 */
export default function Input({type}) {

	return (
		<>
				<InputLowLevel label={labels[type]} validation={validation[type]} message={messageWarning[type]} type={type}></InputLowLevel>
		</>
	)
}

/**
 * value, setValue, error, setError
 */

function InputLowLevel({type, message, validation, label}) {

	const {values, setValues, errors, setErrors, method} = useContext(FormContext);

	const handleInput = (e) => {
		const currentValue = e.target.value;
		setErrors({...errors, [type] : (isNaN(currentValue)) || (!isNaN(currentValue) && !validation(currentValue, method))});
		setValues({...values, [type] : currentValue});
	}

	return (
		<>
				<div className='field'>
						<label>{label}</label>
						<input onChange={handleInput} value={values[type]} type="number"></input>
						{errors[type] == true && <h4>{message}</h4>}
				</div>
		</>
	)
}





