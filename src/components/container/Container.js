import React, { useState } from 'react';
import Button from "components/button/Button";
import Modal from 'components/modal/Modal';
import Chart from 'components/chart/Chart';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BottomSheet } from 'react-spring-bottom-sheet'
// import StyledButton from "components/button/StyledButton";
import './container.scss';
// import 'swiper/css';
import 'react-spring-bottom-sheet/dist/style.css'

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

	const pagination = {
		type: 'fraction',
		formatFractionCurrent: function (number) {
			return ('0' + number).slice(-2);
		},
		formatFractionTotal: function (number) {
			return ('0' + number).slice(-2);
		},
		renderFraction: function (currentClass, totalClass) {
			return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
		}
	};

	const [open, setOpen] = useState(false)

	function onDismiss() {
		setOpen(false)
	}

	return (
		<div id="container">
			<div className="contents">
				
				{/* <StyledButton /> */}

				<h2 style={{ color: 'red', fontSize: '30px', }}>Button</h2>
				<Button className="btn-primary" value="BUTTON" />
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

				<Swiper
					className="main-banner-section"
					modules={[Pagination]}
					pagination={pagination}
					loop
					wrapperTag="ul"
					>
					<SwiperSlide tag="li">Slide 1</SwiperSlide>
					<SwiperSlide tag="li">Slide 2</SwiperSlide>
					<SwiperSlide tag="li">Slide 3</SwiperSlide>
					<SwiperSlide tag="li">Slide 4</SwiperSlide>
				</Swiper>

				<Chart></Chart>


				<label className="gc-switch">
					<span>Switch</span>
				</label>

				<br/>

				<Button className="btn-primary" value="Bottom Sheet" onClick={openModal} />
				<Button className="btn-secondary" value="Bottom Sheet drag" onClick={setOpen} />
				<BottomSheet
					className="aaaaaaaaa"
					// open
					open={open}
					onDismiss={onDismiss}
					// defaultSnap={({ maxHeight }) => maxHeight -100}
					// snapPoints={({ minHeight, maxHeight }) => [
					// 	minHeight,
					// 	maxHeight - 66,
					// 	// maxHeight / 4,
					// 	// maxHeight * 0.6,
					// ]}

					snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight - 80]}
					// snapPoints={({  maxHeight }) => [ maxHeight-100]}
					expandOnContentDrag
				>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
					My awesome content here<br/>
				</BottomSheet>
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