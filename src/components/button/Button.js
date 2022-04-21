import React from 'react'
import './button.scss';

function ButtonComponent(props) {
	return (
		<button className={props.className} disabled={props.disabled}>{props.value}</button>
	);
};
export default ButtonComponent;