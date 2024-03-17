import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageTitle from 'ui_component/page_title';
import RegFoldItemBox from 'ui_component/regist_folding_box';
import Checkbox from 'ui_component/checkbox';
import Radiobox from 'ui_component/radiobox';
import RadioButtonBox from 'ui_component/radiobuttonbox';
import InputTxt from 'ui_component/input_txt';
import InputNum from 'ui_component/input_num';
import PeriodSett from 'ui_component/period_setting';
import Buttons from 'ui_component/buttons';

const FormItem = () => {
	
	const [checkState, setCheckState] = useState(null);//checkbox 중복 선택 가능으로 state에 배열로 value값 저장
	const [radioState, setRadioState] = useState(null);//radio 단일 선택 선택한 value값 저장
	const [btnRadioState, setBtnRadioState] = useState(null);//button type radio 단일 선택 선택한 value값 저장

	const btnClickFn = (e, el)=>{
		var el = e.thisEl;
		var txt = el.querySelector('span').innerText;
		console.log(`button click callBack ========== ${txt}`);
	}

	useEffect(()=> {
		console.log(`checkState = ${checkState}`);
	},[checkState]);
	useEffect(()=> {
		console.log(`radioState = ${radioState}`);
	},[radioState]);
	useEffect(()=> {
		console.log(`btnRadioState = ${btnRadioState}`);
	},[btnRadioState]);
	
	return (
		<div className="contents">
			<PageTitle
				title={'페이지 타이틀명'}
				essential_title = {'필수 항목'}
				tooltip = {
					<ul>
						<li>'네이버 쇼핑 카탈로그 상품 정보를 제공하여 내 판매 상품의 가격 관리를 용이하게 해주는 화면입니다.',</li>
						<li>'또한 알림 수신 기능을 활용하여 주력 상품의 가격 변동을 실시간 확인해보세요.'</li>
					</ul>
				}
			/>

			<RegFoldItemBox
				title={'Button style'}
				// helpTip={true}
			>
				<div>
					<p>높이 : 32px</p>
					<br />
					<Buttons name="btnItem" txt="btnItem button" clickCall={btnClickFn} />
					<Buttons name="btnItem02" txt="btnItem02 button" clickCall={btnClickFn} />
					<Buttons name="btnItem03" txt="btnItem03 button" clickCall={btnClickFn} />
					
					<br /><br />
					<Link to="#" className="btnItem"><span>btnItem anchor</span></Link>
					<Link to="#" className="btnItem02"><span>btnItem02 anchor</span></Link>
					<Link to="#" className="btnItem03"><span>btnItem03 anchor</span></Link>
					<br />
					<br />
					<p>높이 : 40px</p>
					<br />
					<button type="button" className="btnItemL"><span>btnItemL button</span></button>
					<button type="button" className="btnItemL02"><span>btnItemL02 button</span></button>
					<button type="button" className="btnItemL03"><span>btnItemL03 button</span></button>
					<br /><br />
					<Link to="#" className="btnItemL"><span>btnItemL anchor</span></Link>
					<Link to="#" className="btnItemL02"><span>btnItemL02 anchor</span></Link>
					<Link to="#" className="btnItemL03"><span>btnItemL03 anchor</span></Link>
				</div>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'Check box style'}
				// helpTip={true}
			>
				<Checkbox
					objOpt={
						[
							{
								'optName' : 'check Item Template1',
								'value' : 'check01',
								'checked' : true,

							},
							{
								'optName' : 'check Item Template2',
								'value' : 'check02',
								// 'checked' : null,

							},
							{
								'optName' : 'check Item Template3',
								'value' : 'check03',
								// 'checked' : null,

							},
							{
								'optName' : 'check Item Template4',
								'value' : 'check04',
								'checked' : null,
							},
						]
					}
					checkIdx={1}
					setState={setCheckState}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'radio box style'}
				// helpTip={true}
			>
				<Radiobox
					objOpt={
						[
							{
								'optName' : 'radio Item Template1',
								'value' : 'radio01'

							},
							{
								'optName' : 'radio Item Template2',
								'value' : 'radio02'

							},
							{
								'optName' : 'radio Item Template3',
								'value' : 'radio03'

							},
							{
								'optName' : 'radio Item Template4',
								'value' : 'radio04'
							},
						]
					}
					groupName={'radio01'}
					checkIdx={1}
					setState={setRadioState}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'button radio box style'}
				// helpTip={true}
			>
				<RadioButtonBox
					objOpt={
						[
							{
								'optName' : '설정함',
								'value' : 'val01',
							},
							{
								'optName' : '설정안함',
								'value' : 'val02',
							}
						]
					}
					groupName={'settingRadio'}
					checkIdx={1}
					setState={setBtnRadioState}
				/>
				
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'input text box style'}
				// helpTip={true}
			>
				<InputTxt
					ver={'inptxtItem02'}
					// minLeng={0}
					// maxLeng={5}
					/>

				<br /><br />

				<InputTxt
					minLeng={0}
					maxLeng={5}
				/>

				<br /><br />

				<InputNum
					unit={'원'}
				/>
			</RegFoldItemBox>

			<RegFoldItemBox
				title={'calendar style'}
				// helpTip={true}
			>
				<PeriodSett
					periodOpt={[3, 5, 7, 15, 30, 60, 90, 120]}
					startDate={'2020-8-1'}
					endDate={'2020-8-17'}
				/>
			</RegFoldItemBox>

			{/* <RegFoldItemBox
				title={'select style'}
				// helpTip={true}
			>
				
			</RegFoldItemBox> */}
		</div>
	);
}

export default FormItem;