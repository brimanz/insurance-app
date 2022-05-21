import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
	backdrop-filter: blur(5px) saturate(132%);
    -webkit-backdrop-filter: blur(5px) saturate(132%);
    background-color: rgba(17, 25, 40, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);

	padding: 10px;
	font-weight: bold;
	color: #f5f5f5; 	
`;

const Text = styled.h1`
	text-align: center;
	text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.15);
	font-family: 'Slabo';
	font-size: 2rem;
	margin: 0;
`;


const Header = ({titulo}) =>{
	return(
		<HeaderContainer>
			<Text>{titulo}</Text>
		</HeaderContainer>
	);
}


export default Header;
