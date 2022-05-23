import React from 'react';
import styled from '@emotion/styled';
import {letraMayuscula} from '../helper';


const ResumenContainer = styled.div`
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
	padding: 1rem;
	text-align: center;
	color: #f5f5f5;
	margin-top: 1rem;
`

const ListElement = styled.li`
	margin: 1rem;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;


const Resumen = ({datos}) =>{

	//data extract
	const {marca, year, plan} = datos;
	if(marca === "" || year === "" || plan === "") return null;

	return(
		<ResumenContainer>
			<h2>Resumen de Cotización</h2>
			<ul>
				<ListElement>
					<strong>Marca seleccionada:</strong> {letraMayuscula(marca)}
				</ListElement>
				<ListElement>
					<strong>Año del Automovil:</strong> {year}
				</ListElement>
				<ListElement>
					<strong>Plan seleccionado:</strong> {letraMayuscula(plan)}
				</ListElement>
			</ul>
		</ResumenContainer>
	);
}


export default Resumen;
