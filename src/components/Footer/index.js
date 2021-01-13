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
	font-size:0.7em;
		strong{
			color:#11bcca;
			font-weight: bold;
		}
		@media screen and (min-width: 768px)
		{ 
			font-size:1em;
		}
	}
`;
export default function Footer() {
	return (
		<StyledFooter><p>&copy;2021 All Rights Reserved: <strong>Juan Quirós Mora</strong></p></StyledFooter>
	);
}
