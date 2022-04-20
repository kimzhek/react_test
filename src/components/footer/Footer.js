import React, { useState } from 'react';
import styles from "./footer.module.scss";// CRA(create-react-app)

function Footer() {
	const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
	const toggleMenu = () => {
		setMenu(isOpen => !isOpen); // on,off
	}
	return (
		<footer id={styles.footer}>
			<div className={styles.footerInner}>
				<ul className={styles.fMenu}>
					<li><a href="#">이용약관</a></li>
					<li><a href="#">개인정보처리방침</a></li>
				</ul>

				<div className={styles.fFamilySite}>
					<button type="button">FAMILY SITE</button>
					<div className={styles.dropdownBox} style={{ display: 'none' }}>
						<ul className={styles.dropdownList}>
							<li><a href="http://home.hyundaidreamtour.com/">TEST</a></li>
							<li><a href="https://www.thehyundaitravel.com/">더현대트래블</a></li>
						</ul>
					</div>
				</div>

				<div className={isOpen ? `${styles.fInfo} ${styles.selected}` : styles.fInfo}>
					<button type="button" title="상세내용 정보 보기" onClick={() => toggleMenu()}>FOOTER LOGO</button>
					<div className={styles.infoContent}>
						<div className={styles.contentInner}>
							<ul className={styles.info}>
								<li><strong>기업명</strong> <span>TEST</span></li>
								<li><strong>대표자</strong> <span>홍길동</span></li>
								<li><strong>주소</strong> <span>서울시 서초구 남부순환로 2583 TEST 7F (서희타워)</span></li>
								<li><strong>사업자등록번호</strong> <span>101-00-12345</span></li>
								<li><strong>통신판매업신고번호</strong> <span>종로 제2003-01234호</span></li>
								<li><strong>개인정보 관리책임자</strong> <span>IT지원 팀장</span></li>
							</ul>
							<div className={styles.copyright}>
								관광협회 보증보험 15억원 | 배상책임보험 5억원 가입<br/>
								© TEST DREAM TOUR All Right Reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  );
};

export default Footer;