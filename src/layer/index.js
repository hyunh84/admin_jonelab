import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import LayerPortal from './LayerPortal';
import Buttons from 'ui_component/buttons'

const Layer = ({children, blindHeader, layerTitle, name, idName, setClose}) => {

	const closeLayerFn = (e)=>{
		e.stopPropagation();
		setClose(false);
	}

	useEffect(()=>{
		const layerWrap = document.querySelector('#'+idName);
		let openSetTime = undefined;

		openSetTime = setTimeout(()=>{
			console.log('setTimeout ========== ');
			console.log(layerWrap.classList);
			layerWrap.classList.add('open');
		}, 200);

		return ()=>{
			if(openSetTime) clearTimeout(openSetTime);
		}
	}, [idName]);
	
	return (
		<LayerPortal
			idName = {idName}
			name = {name ? name : 'layerWrap'}
		>
			<div className="layerMask" aria-hidden="true" onClick={closeLayerFn}></div>
			<div className="layerBox">
				<div className={blindHeader ? "layerHeader blind" : "layerHeader" }>
					<h1 className="layerTit">{layerTitle}</h1>
				</div>

				<div className="layerContainer">
					<div className="layerContents">
						{children}
					</div>
				</div>

				<Buttons
					name='btnLayerClose'
					txt='팝업 닫기'
					blind={true}
					clickCall={closeLayerFn}
				/>
			</div>
		</LayerPortal>
	)
}

Layer.propTypes = {
	name : PropTypes.string,
	idName : PropTypes.string.isRequired,
	layerTitle : PropTypes.string.isRequired,
	setClose : PropTypes.func,
	blindHeader : PropTypes.bool,
	children : PropTypes.node
}


export default Layer;