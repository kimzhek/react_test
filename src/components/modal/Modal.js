import React from 'react'
import './modal.scss';

function Modal(props) {
	// 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
	const { className, close, title, children } = props;
	return (
		<div className={className} onClick={close}>
			<div className="layer-container">
				<div className="layer-header">{title}</div>
				<div className="layer-contents">
					{children}
					{/* <button type="button" className="btn-primary">Bottom Layer Popup</button> */}
				</div>
				<button type="button" className="layer-close" onClick={close}>닫기</button>
			</div>
		</div>
	);
};
export default Modal;