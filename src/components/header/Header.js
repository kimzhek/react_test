import React, { useState } from 'react';
import './header.scss';

function Footer() {
	const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
	const toggleMenu = () => {
		setMenu(isOpen => !isOpen); // on,off
	}
	return (
		<header id="header" className={isOpen ? `selected` : ''}>
			<h1 className="logo"><a href="#">LOGO</a></h1>
			<ul className="gnb">
				<li>
					<a href="#">레일예약</a>
					<div className="step">
						<ul>
							<li><a href="#">레일예약</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a href="#">H 레일 텔</a>
					<div className="step">
						<ul>
							<li><a href="#">H레일텔</a></li>
						</ul>
					</div>
				</li>
				<li>
					<a href="#">프로모션</a>
					<div className="step">
						<ul>
							<li><a href="#">프로모션</a></li>
						</ul>
					</div>
				</li>
				<li className="selected">
					<a href="#">마이페이지</a>
					<div className="step">
						<ul>
							<li className="selected"><a href="#">예약조회</a></li>
							<li><a href="#">혜택정보</a></li>
							<li><a href="#">리포트</a></li>
							<li><a href="#">정보관리</a></li>
						</ul>
					</div>
					<div className="balloon-box">
						<div>
							발권마감 <a href="#">2건</a> 입니다.
						</div>
						<button type="button" className="close">닫기</button>
					</div>
				</li>
				<li>
					<a href="#">고객지원</a>
					<div className="step">
						<ul>
							<li><a href="#">공지사항</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>
				</li>
			</ul>
			<button type="button" className="btn-gnb" onClick={() => toggleMenu()}><span>전체보기 메뉴</span></button>
			<div className="user-box">
				<span>안녕하세요 <strong>홍길동</strong>님</span>
				<a href="#" className="log-in-out">로그아웃</a>
			</div>
		</header>
	);
};

export default Footer;