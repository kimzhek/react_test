import React from 'react'
import PropTypes from 'prop-types';
// import './button.scss';

// function ButtonComponent(props) {
// 	return (
// 		<button className={props.className} disabled={props.disabled}>{props.value}</button>
// 	);
// };
// export default ButtonComponent;



import './button.css';
export const Button = ({ type, size, label, ...props }) => {
	const btnType = type ? `btn-${type}` : 'btn-primary';
	const btnSize = size !== 'r' && size ? `btn-${size}` : null;
	// const btnSize = size ? `btn-${size}` : null;
	return (
		<button
			type="button"
			className={[btnType, btnSize].join(' ')}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	type: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
		'primary-outline',
		'secondary-outline',
		'success-outline',
		'info-outline',
		'warning-outline',
		'danger-outline',
		'light-outline',
		'dark-outline'
	]),
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['m', 'r', 'l', 'xl']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};