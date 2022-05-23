import React from 'react';
import styled from '@emotion/styled';
import {letraMayuscula} from '../helper';


const ResumenContainer = styled.div`
	padding: 1rem;
	text-align: center;
	color: #f5f5f5;
	margin-top: 1rem;
`




const Resumen = ({datos}) =>{

	//data extract
	const {marca, year, plan} = datos;
	if(marca === "" || year === "" || plan === "") return null;

	return(
		<ResumenContainer>
			<h2>Resumen de Cotización</h2>
			<ul>
				<li>
					Marca seleccionada: {letraMayuscula(marca)}
				</li>
				<li>
					Año del Automovil: {year}
				</li>
				<li>
					Plan seleccionado: {letraMayuscula(plan)}
				</li>
			</ul>
		</ResumenContainer>
	);
}


export default Resumen;
