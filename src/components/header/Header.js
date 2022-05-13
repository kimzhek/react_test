import React from 'react';

function Header() {
	const openGlobalNav = () => {
		document.documentElement.classList.toggle('global-nav-open')
	};
	return (
		<header id="header">
			<h1 className="logo"><a href="#!">LOGO</a></h1>

			<a href="#!" className="my-bag">장바구니</a>

			<div className="h-search-box">
				<input type="text" placeholder="apple.com 검색"/>
				<button type="button" className="cancel">취소</button>
			</div>

			<nav id="globalNav">
				<button type="button" className="btn-global-nav" onClick={openGlobalNav}>Global Nav 메뉴 열기</button>
				<ul className="global-nav-list">
					<li><a href="#!">스토어</a></li>
					<li><a href="#!">Mac</a></li>
					<li><a href="#!">iPad</a></li>
					<li><a href="#!">iPhone</a></li>
					<li><a href="#!">Watch</a></li>
					<li><a href="#!">AirPods</a></li>
					<li><a href="#!">TV 및 홈</a></li>
					<li><a href="#!">Apple 독점 제공</a></li>
					<li><a href="#!">액세서리</a></li>
					<li><a href="#!">고객지원</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;