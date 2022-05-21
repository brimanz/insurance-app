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


const Form = () =>{

	const [datos, guardarDatos] = useState({
		marca: "",
		year: "",
		plan: ""
	});

	//data extract
	const {marca, year, plan} = datos;


	//reading form data
	const obtenerInformacion = e =>{
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value
		});
	}


	return(
		<form>
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

			<Button type="button">Cotizar</Button>
		</form>

	)
}


export default Form;