import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
	color: #f5f5f5;
	font-weight: bold;
	background-color: rgba(0, 200, 255, 0.25);
`;

const MensajeTotal = styled.p`
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
	color: #f5f5f5;
	background-color: rgba(0, 255, 0, 0.25);
`;



const Resultado = ({cotizacion}) =>{
	return(
		(cotizacion === 0) ? 
			<Mensaje>Elige los datos correspondientes</Mensaje>
		:	<MensajeTotal><strong>El total es: </strong>  
			{cotizacion}$
		</MensajeTotal>
	)
}


export default Resultado;