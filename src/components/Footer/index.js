import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
	display:flex;
	align-items:flex-end;
	justify-content:center;
	background: #2c2c44;
	width: 100%;
	height: 6vh;
	color: white;
	text-align: center;
	font-weight: 300;
		strong{
			color:#11bcca;
			font-weight: bold;
		}	
	}
`;
export default function Footer() {
	return (
		<StyledFooter><p>&copy;2021 All Rights Reserved: <strong>Juan Quirós Mora</strong></p></StyledFooter>
	);
}
