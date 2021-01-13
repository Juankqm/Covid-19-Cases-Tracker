import React from 'react';
import './style.css';

export default function Select({ data, handleChange, optionName }) {
	return (
		<div className="select-box">
			<select onChange={handleChange} className="form-control">
				<option>{optionName}</option>
				{
				data.map((item) => {
					return (
						<option key={item.Country} value={item.Country}>
							{item.Country}
						</option>
					);
				})}
			</select>
		</div>
	);
}
