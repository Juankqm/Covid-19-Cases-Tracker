import React from 'react';
import './style.css'
const InformationCard = ({ title,icon,children }) => {
	return (
		<div className="cardInfo">
			<div className="test">
				{icon}
			</div>
			<div>
				<h3>{title}</h3>
				{children}
			</div>
		</div>
	);
};

export default InformationCard;
