import { useContext, useEffect } from "react"
import { initialErrors, initialValues, labels } from "../adapters/Labels"
import { messageWarning } from "../utilities/LabelWarnings"
import { validation } from "../utilities/Validations"
import { FormContext } from "../context/FormContext"

/**
 * type = age, weight, height, 
 */
export default function Input({type, label}) {

	return (
		<>
				<InputLowLevel label={label} validation={validation[type]} message={messageWarning[type]} type={type}></InputLowLevel>
		</>
	)
}

/**
 * value, setValue, error, setError
 */

function InputLowLevel({type, message, validation, label}) {

	const {values, setValues, errors, setErrors, method} = useContext(FormContext);

	useEffect(
		() => {
			verifyInput(values[type]);
		}, [method]
	);

	const handleInput = (e) => {
		const currentValue = e.target.value;
		verifyInput(currentValue);
		setValues({...values, [type] : currentValue});
	}

	const verifyInput = (v) =>{
		setErrors({...errors, [type] : (isNaN(v)) || (!isNaN(v) && !validation(v, method))});
	};

	const validToShowError = () =>{
		return errors[type] == true && values[type] != '';
	};

	return (
		<>
				<div className='field'>
						<div><label>{label}</label></div>
						<input onChange={handleInput} value={values[type]} 	className={'fail_input'} type="number"></input>
						{validToShowError() && <h4>{message}</h4>}
				</div>
		</>
	)
}





