import React, { useState, useEffect, useRef } from 'react';
import Button from "components/button/Button";
import StyledButton from "components/button/StyledButton";
import './container.scss';

function Container() {
	return (
		<div id="container">
			<div className="contents">
				<StyledButton />

				<h2 style={{ color: 'red', fontSize: '30px', }}>Button</h2>
				<Button className="btn-primary" value="BUTTOddN" />
				<Button className="btn-secondary" value="BUTTON" hasMargin />
				<Button className="btn-dark" value="BUTTON" />
				<Button className="btn-default" value="BUTTON" />
				<Button className="btn-light" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-primary-outline" value="BUTTON" />
				<Button className="btn-secondary-outline" value="BUTTON" />
				<Button className="btn-dark-outline" value="BUTTON" />
				<Button className="btn-default-outline" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-primary btn-m" value="BUTTON" />
				<Button className="btn-primary" value="BUTTON" />
				<Button className="btn-primary btn-l" value="BUTTON" />
				<Button className="btn-primary btn-xl" value="BUTTON" />
				<Button className="btn-primary btn-xl" value="BUTTON" disabled />
				<br />
				<br />
				<div className="btn-area-wrap">
					<div className="btn-area-l">
						<Button className="btn-default-outline btn-w-140" value="BUTTON" />
						<Button className="btn-primary btn-w-140" value="BUTTON" />
					</div>
					<div className="btn-area-c">
						<Button className="btn-default-outline btn-w-140" value="BUTTON" />
						<Button className="btn-primary btn-w-140" value="BUTTON" />
					</div>
					<div className="btn-area-r">
						<Button className="btn-default-outline btn-w-140" value="BUTTON" />
						<Button className="btn-primary btn-w-140" value="BUTTON" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Container;