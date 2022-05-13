import React from 'react'
import './button.scss';

function ButtonComponent(props) {
	const { className, disabled, onClick, value } = props;
	return (
		<button
			type="button"
			className={className}
			disabled={disabled}
			onClick={onClick}
		>
			{value}
		</button>
	);
};
export default ButtonComponent;



// import './button.css';
// import PropTypes from 'prop-types';
// export const Button = ({ type, size, label, ...props }) => {
// 	const btnType = type ? `btn-${type}` : 'btn-primary';
// 	const btnSize = size !== 'r' && size ? `btn-${size}` : null;
// 	// const btnSize = size ? `btn-${size}` : null;
// 	return (
// 		<button
// 			type="button"
// 			className={[btnType, btnSize].join(' ')}
// 			{...props}
// 		>
// 			{label}
// 		</button>
// 	);
// };

// Button.propTypes = {
// 	/**
// 	 * Is this the principal call to action on the page?
// 	 */
// 	type: PropTypes.oneOf([
// 		'primary',
// 		'secondary',
// 		'success',
// 		'info',
// 		'warning',
// 		'danger',
// 		'light',
// 		'dark',
// 		'primary-outline',
// 		'secondary-outline',
// 		'success-outline',
// 		'info-outline',
// 		'warning-outline',
// 		'danger-outline',
// 		'light-outline',
// 		'dark-outline'
// 	]),
// 	/**
// 	 * How large should the button be?
// 	 */
// 	size: PropTypes.oneOf(['m', 'r', 'l', 'xl']),
// 	/**
// 	 * Button contents
// 	 */
// 	label: PropTypes.string.isRequired,
// 	/**
// 	 * Optional click handler
// 	 */
// 	onClick: PropTypes.func,
// };