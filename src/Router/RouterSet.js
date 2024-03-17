import React, {useEffect, useContext} from "react";

import {
	BrowserRouter as BRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import {GState} from './GState';

import Main from 'page/Main';
import Header from 'layout/Header';
import Gnb from 'layout/Gnb';
import Footer from 'layout/Footer';
import Login from 'layout/Login';

import FormItem from 'guide/FormItem';
import TableItem from 'guide/TableItem';
import TabItem from 'guide/TabItem';
import RegTemplate from 'guide/register_box_template';
import PrdReg from 'page/prdReg';
import PopupSample01 from 'guide/popup/popupSample01';

const RouterSet = () => {
	const {loginYn} = useContext(GState);

	useEffect(()=>{
		console.log('useEffect ========= RouterSet');
	}, [loginYn]);

	return (
		<BRouter>

			{loginYn &&
				<>
					<Header />
					<Gnb />
					<div id="container">

						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/register_template" element={<RegTemplate />} />
							<Route path="/form_item" element={<FormItem />} />
							<Route path="/table_item" element={<TableItem />} />
							<Route path="/tab_item" element={<TabItem />} />
							<Route path="/regPrd" element={<PrdReg />} />
							<Route path="/PopupSample01" element={<PopupSample01 />} />
							<Route path="*" element={<Navigate to="/" replace />}  />
						</Routes>

					</div>
					<Footer />
				</>
			}

			{!loginYn &&
				<>
					<Header />
					<div id="container">
						<Routes>
							<Route path="/" element={<Login />} />
						</Routes>
					</div>
					<Footer />
				</>
			}
		</BRouter>
	);
}

export default RouterSet;