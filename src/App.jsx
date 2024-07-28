import { useEffect, useState } from 'react'
import './App.css'
import { FormContext } from './context/FormContext';
import Input from './components/Input';
import { initialErrors, initialValues } from './adapters/Labels';
import { to_IN, to_KG, to_LB } from './utilities/Conversions';
import { getResult } from './utilities/Result';

function App() {

	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [method, setMethod] = useState(1);
	const [result, setResult] = useState(0);

	useEffect(
		() => {
			if(!validForm()) return;
			let a = values.age, w = values.weight, h = values.height;
			if(method == 1){
				w = to_LB(w);
				h = to_IN(h);
			}

			setResult(getResult(a, w, h));
		}, [values, method]
	)

	const handleMethod = (x) => {
		setMethod(x);
		setErrors(initialErrors);
		setValues(initialValues);
	}

	const validForm = () => {
		return !(errors['age'] || errors['height'] || errors['weight']);
	};

	return (
		
			<FormContext.Provider value={{values, setValues, errors, setErrors, method}}>
			<h1>Calculadora de Calorías</h1>
			<div className='container'>
				<div className='form'>
					<div className='options'>
						<button onClick={() => handleMethod(1)} className={method == 1 ? 'selected' : ''}>Sistema Decimal</button>
						<button onClick={() => handleMethod(2)} className={method == 2 ? 'selected' : ''}>Sistema Imperial</button>
					</div>
					<div className='container_input'>
						<Input type={'age'} label={'Edad (años)'}></Input>
						<Input type={'weight'} label={'Peso ' + (method == 1? '(kg)': '(lb)')}></Input>
						<Input type={'height'} label={'Altura ' + (method == 1? '(cm)': '(in)')}></Input>
					</div>
					{validForm() && <div className='answer'>Sus calorías a consumir son: {result} Kcal/día</div>}
				</div>
			</div>
			<div className='container_img'>
				<img src='/src/assets/images/pizza.png' height={270}></img>
			</div>
			<div>
				Página creada por: Rodrigo Andrés Malaver Suárez
			</div>
		</FormContext.Provider>
	)
}

export default App
