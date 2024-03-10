import React, {useRef, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {GState} from 'Router/GState';

const Gnb = () => {
	const gnbEl = useRef(null);
	const itemMenuList = useRef(null);
	const btnFold = useRef(null);
	const {pageRoot} = useContext(GState);
	// let itemDepth01;

	const subDepthCloseAll = ()=>{
		const subDepth = document.querySelectorAll(`.${itemMenuList.current.className} .depth02`);
		subDepth.forEach((el)=>{
			el.style.display = 'none';
		});
	}

	const gnbFoldFnc = (e)=>{
		// console.log(e);
		console.log('e.target.parentNode ======== ', e.target.parentNode);
		var btnFold = e.target.parentNode;
		var classList = btnFold.classList;
		var containerEl = gnbEl.current.nextElementSibling;
		var footerEl = document.querySelector('#footer');
		var fixedBtnbox = document.querySelector('.fixedBtnBox');
		var hasClass = false;

		console.log(classList);
		classList.forEach((val)=>{
			console.log(val);
			if(val === 'close') {
				hasClass = true;
			}
			return false;
		});

		if(hasClass) {
			gnbEl.current.style.left = '0';
			classList.remove('close');
			containerEl.style.paddingLeft = '250px';
			footerEl.style.left = '220';
			console.log('111======', fixedBtnbox);
			if(fixedBtnbox) fixedBtnbox.style.left = '220px';
		}else{
			gnbEl.current.style.left = '-220px';
			classList.add('close');
			containerEl.style.paddingLeft = '30px';
			footerEl.style.left = '0';
			console.log('222======', fixedBtnbox);
			if(fixedBtnbox) fixedBtnbox.style.left = '0';
		}
	}

	
	const subDepthClick = (e)=>{
		e.preventDefault();
		var _this = e.target;
		var _next = _this.nextElementSibling;
		var _nextStyle = _next.style;
		var _liItem = _this.closest('.gnbListBox > ul > li');

		if(_nextStyle.display === '' || _nextStyle.display === 'none') {
			subDepthCloseAll();
			_nextStyle.display = 'block';
			_liItem.classList.add('active');
		}else{
			_nextStyle.display = 'none';
			_liItem.classList.remove('active');
		}
	}

	useEffect(()=>{


	}, [pageRoot]);

	return (
		<nav id="gnb" ref={gnbEl}>
			<div  className="gnbInner">
				<div className="gnbTop">
					<div className="userInfo">
						<span className="photo">
							{/* 사용자 선택 이미지 있을경우 img 태그로 넣어줌 */}
							{/* <img src="/resources/images/temp/temp_user_photo.jpg" alt="" /> */}
						</span>
						<strong className="userId">J-one</strong>
					</div>

				</div>
				<div className="gnbListBox" ref={itemMenuList}>
					<ul>
						<li>
							<button type="button" onClick={subDepthClick}>guide</button>
							<div className="depth02">
								<ul>
									<li><Link to="register_template">register guide</Link></li>
									<li><Link to="form_item">form item guide</Link></li>
									<li><Link to="table_item">table item guide</Link></li>
									<li><Link to="tab_item">tab item guide</Link></li>
									<li><Link to="PopupSample01">popup guide</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>상품관리</button>
							<div className="depth02">
								<ul>
									<li><Link to="regPrd">상품등록</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth01</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth01_01</Link></li>
									<li><Link to="#">depth01_02</Link></li>
									<li><Link to="#">depth01_03</Link></li>
									<li><Link to="#">depth01_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth02</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth02_01</Link></li>
									<li><Link to="#">depth02_02</Link></li>
									<li><Link to="#">depth02_03</Link></li>
									<li><Link to="#">depth02_04</Link></li>
								</ul>
							</div>
						</li>
						<li>
							<button type="button" onClick={subDepthClick}>depth03</button>
							<div className="depth02">
								<ul>
									<li><Link to="#">depth03_01</Link></li>
									<li><Link to="#">depth03_02</Link></li>
									<li><Link to="#">depth03_03</Link></li>
									<li><Link to="#">depth03_04</Link></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="gnbFold" onClick={gnbFoldFnc}><button type="button"><em>접기</em></button></div>
		</nav>
	);
}

export default Gnb;