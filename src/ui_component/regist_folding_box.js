import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'ui_component/Tooltip';
import Buttons from 'ui_component/buttons';
import Layer from 'layer';

const RegFoldItemBox = ({children, title, helpTip, tooltip, essential, closed}) => {
	const classEssent = essential ? 'essential' : '';
	const [openConts, setOpenConts] = useState(closed ? false : true);//false 닫힘, true:열림
	const [openHelpTip, setOpenHelpTip] = useState(false);

	const openHelpTipFn = (e)=>{
		setOpenHelpTip(true)
	}

	const openFoldFn = (e)=>{
		setOpenConts(openConts ? false : true)
	}

	return (
		<section className="regItemWrap">
			<div className="titBox" onClick={openFoldFn}>
				<div className="titInner">
					<strong className={`tit ${classEssent}`}>{title}</strong>
					{tooltip && 
						<Tooltip>
							{tooltip}
						</Tooltip>
					}
					{helpTip && 
						<span className="helpItemBox">
							<Buttons
								name='btnHelpTip'
								txt='도음말'
								clickCall={openHelpTipFn}
							/>
						</span>
					}
					{openHelpTip && 
						<Layer 
							idName = {'helpTipPop'}
							layerTitle="도음말"
							// name="layerWrap02"
							setClose = {setOpenHelpTip}
						>
							{helpTip}
						</Layer>
					}
				</div>

				<Buttons btnType={'button'} name={`btnFold ${openConts ? 'active' : ''}`} txt={openConts ? '닫기' : '열기'} blind={true} clickCall={openFoldFn} />
			</div>
			<div className="regInptBox" style={{'display' : openConts ? 'block' : 'none'}} aria-hidden={openConts ? 'false' : 'true'} >
				{children}
			</div>
		</section>
	);
}

RegFoldItemBox.propTypes = {
	closed : PropTypes.bool,
	essential : PropTypes.any,
	helpTip : PropTypes.any,
	tooltip : PropTypes.any,
	children : PropTypes.any.isRequired,
	title : PropTypes.string.isRequired,
}

export default RegFoldItemBox;