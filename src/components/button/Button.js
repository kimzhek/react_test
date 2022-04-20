import React from 'react'
import './button.scss';

class ButtonComponent extends React.Component {
	render() {
		const { className, value, disabled } = this.props
		return (
			<button className={className} disabled={disabled}>{value}</button>
		);
	};
};
export default ButtonComponent;