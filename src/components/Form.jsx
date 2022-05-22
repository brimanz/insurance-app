import React, {useState} from 'react';
import styled from '@emotion/styled';


const Area = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: none;
	-webkit-appearance: none;
	border-radius: 5px;	
`;

const InputRadio = styled.input`
	margin: 0 1rem;
`;

const Button = styled.button`
	font-size: 16px;
	padding: 1rem;
	text-transform: uppercase;
	border: none;
	border-radius: 5px;
	width: 100%;
	margin-top: 2rem;
	box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.2);
	transition: background-color .3s ease;

	&:hover{
		cursor: pointer;
		background-color: #E9E4F0;
	}
`;

const Error = styled.div`
	background-color: rgba(255, 0 , 0, 0.15);
	color: #f5f5f5;
	padding: 1rem;
	width: 100%;
	text-align: center;
	margin: 0 0 2rem -1rem;
	border-radius: 4px;
`;


const Form = () =>{

	const [datos, guardarDatos] = useState({
		marca: "",
		year: "",
		plan: ""
	});

	const [error, guardarError] = useState(false);

	//data extract
	const {marca, year, plan} = datos;

	//reading form data
	const obtenerInformacion = e =>{
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value
		});
	}

	//submit form
	const cotizarSeguro = e =>{
		e.preventDefault();

		if(marca.trim() === "" || year.trim() === "" || plan.trim() === ""){
			guardarError(true);
			return;
		}

		guardarError(false);


		//diference of years

		//year -3%

		//america 15%
		//europe 30%
		//asia 5%


		//basic +20%
		//complete +50%


		//total
	}


	return(
		<form
			onSubmit={cotizarSeguro}
		>

			{error ? <Error>Debe llenar todos los campos</Error> : null}
			<Area>
				<Label>Marca</Label>
				<Select
					name="marca"
					value={marca}
					onChange={obtenerInformacion}
				>
					<option value="">-- Select --</option>
					<option value="americano">-- America --</option>
					<option value="europeo">-- Europe --</option>
					<option value="asiatico">-- Asia --</option>
				</Select>
			</Area>

			<Area>
				<Label>Año</Label>
				<Select
					name="year"
					value={year}
					onChange={obtenerInformacion}
				>
					<option value="">-- Select --</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
				</Select>
			</Area>

			<Area>
				<Label>Plan</Label>
				<InputRadio
					type="radio"
					name="plan"
					value="basico"
					checked={plan === "basico"}
					onChange={obtenerInformacion}
				/> Básico

				<InputRadio
					type="radio"
					name="plan"
					value="completo"
					checked={plan === "completo"}
					onChange={obtenerInformacion}
				/> Completo				
			</Area>

			<Button type="submit">Cotizar</Button>
		</form>

	)
}


export default Form;