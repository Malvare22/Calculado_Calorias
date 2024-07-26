import { useEffect, useState } from 'react'
import './App.css'
import { FormContext } from './context/FormContext';
import Input from './components/Input';
import { initialErrors, initialValues } from './adapters/Labels';

function App() {

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [method, setMethod] = useState(0);
	const [result, setResult] = useState(0);

	const handleMethod = (x) => {
		setMethod(x);
		setErrors(initialErrors);
		setValues(initialValues);
	}

	const validForm = () => {
		return !(errors['age'] && errors['height'] && errors['weight']);
	};

	return (
		<FormContext.Provider value={{values, setValues, errors, setErrors, method}}>
				<h1>Calculadora de Calorías</h1>
				<div className='options'>
					<button onClick={() => handleMethod(1)}>Sistema Decimal</button>
					<button onClick={() => handleMethod(2)}>Sistema Imperial</button>
				</div>
				<>Tu sistema metrico es: {method}</>
				<Input type={'age'}></Input>
				<Input type={'weight'}></Input>
				<Input type={'height'}></Input>
				{validForm() && <>El Resultado es: X</>}
		</FormContext.Provider>
	)
}

export default App
