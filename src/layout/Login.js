import React, {useEffect, useContext} from 'react';


import {GState} from 'Router/GState';
import Buttons from 'ui_component/buttons';



const Login = () => {
	const rootEl = document.querySelector('#root');
	let {loginYn, setLoginYn} = useContext(GState);
	
	const loginClickFn = (e)=>{
		console.log('loginClickFn =========== ');
		setLoginYn(true);
	}

	useEffect(()=>{
		rootEl.classList.add('loginPage');

		return()=>{
			rootEl.classList.remove('loginPage');
		}
	});

	return (
		<div className="loginWrap">

			<div className="loginBox">
				<div className="rowCase">
					<strong>ID</strong>
					<div>
						<input type="text" className="inpLogin" title="" />
					</div>
				</div>
				
				<div className="rowCase">
					<strong>PW</strong>
					<div>
						<input type="text" className="inpLogin" title="" />
					</div>
				</div>
			</div>

			<div className="loginBtnBox">
				<div>
					<Buttons name="btnItem" txt="LOGIN" clickCall={loginClickFn} />
				</div>
			</div>

		</div>
	);
}

export default Login;