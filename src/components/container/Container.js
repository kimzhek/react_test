import React, { useState } from 'react';
import Button from "components/button/Button";
import Modal from 'components/modal/Modal';
// import StyledButton from "components/button/StyledButton";
import './container.scss';

function Container() {

	const [modalOpen, setModalOpen] = useState(false);

	// open
	const openModal = () => {
		setModalOpen(true);
		overflowCl(true);
	};

	// close
	const closeModal = (event) => {
		if (event.target !== event.currentTarget) return;
		setModalOpen(false);
		overflowCl(false);
	};

	// body 스크롤 막기
	const overflowCl = ($isHidden) => {
		const tLength = document.querySelectorAll('.layer-popup-wrap.selected').length;
		$isHidden ? document.documentElement.classList.add('is-open') : tLength >= 0 && document.documentElement.classList.remove('is-open');
	};
	return (
		<div id="container">
			<div className="contents">
				
				{/* <StyledButton /> */}

				<h2 style={{ color: 'red', fontSize: '30px', }}>Button</h2>
				<Button className="btn-primary" value="BUTTON" onClick={openModal}/>
				<Button className="btn-primary-dark" value="BUTTON" />
				<Button className="btn-primary-light" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-secondary" value="BUTTON" />
				<Button className="btn-secondary-dark" value="BUTTON" />
				<Button className="btn-secondary-light" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-accent" value="BUTTON" />
				<Button className="btn-accent-dark" value="BUTTON" />
				<Button className="btn-accent-light" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-success" value="BUTTON" />
				<Button className="btn-info" value="BUTTON" />
				<Button className="btn-warning" value="BUTTON" />
				<Button className="btn-danger" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-primary btn-m" value="BUTTON" />
				<Button className="btn-primary" value="BUTTON" />
				<Button className="btn-primary btn-l" value="BUTTON" />
				<Button className="btn-primary btn-xl" value="BUTTON" />
				<br />
				<br />
				<Button className="btn-primary btn-xl btn-block" value="BUTTON" disabled />
			</div>
			<Modal
				className={"layer-popup-wrap type-bottom" + (modalOpen ? " selected" : "")}
				close={closeModal}
				title="Modal Title"
			>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal<br/>
				ModalModalModalModalModalModalModal
			</Modal>
		</div>
	);
};
export default Container;