import React, { useState } from 'react';
import './header.scss';

function Header() {
	const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
	const toggleMenu = () => {
		setMenu(isOpen => !isOpen); // on,off
	}
	return (
		<header id="header" className={isOpen ? `selected` : ''}>
			<h1 className="logo"><a href="#!">LOGO</a></h1>
			<ul className="gnb">
				<li>
					<a href="#!">GNB01</a>
					<div className="step">
						<ul>
							<li><a href="#!">GNB01</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a href="#!">GNB02</a>
					<div className="step">
						<ul>
							<li><a href="#!">GNB02</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a href="#!">GNB03</a>
					<div className="step">
						<ul>
							<li><a href="#!">GNB03</a></li>
						</ul>
					</div>
				</li>
				<li className="selected">
					<a href="#!">GNB04</a>
					<div className="step">
						<ul>
							<li className="selected"><a href="#!">GNB04_01</a></li>
							<li><a href="#!">GNB04_02</a></li>
							<li><a href="#!">GNB04_03</a></li>
							<li><a href="#!">GNB04_04</a></li>
						</ul>
					</div>
					<div className="balloon-box">
						<div>
							발권마감 <a href="#!">2건</a> 입니다.
						</div>
						<button type="button" className="close">닫기</button>
					</div>
				</li>
				<li>
					<a href="#!">GNB05</a>
					<div className="step">
						<ul>
							<li><a href="#!">GNB05_01</a></li>
							<li><a href="#!">GNB05_02</a></li>
						</ul>
					</div>
				</li>
			</ul>
			<button type="button" className="btn-gnb" onClick={() => toggleMenu()}><span>전체보기 메뉴</span></button>
			<div className="user-box">
				<span>안녕하세요 <strong>홍길동</strong>님</span>
				<a href="#!" className="log-in-out">로그아웃</a>
			</div>
		</header>
	);
};

export default Header;