import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Buttons = ({name, typeName = 'button', txt, clickCall, blind, children}) => {
	const el = useRef(null);

	const clickFn = (e)=>{
		e.thisEl = el.current;

		if(clickCall) clickCall(e);
	}

	useEffect(()=>{
		el.current.addEventListener('click', clickFn);

		return ()=>{
			if(el.current !== null) el.current.removeEventListener('click', clickFn);
		}
	}, [txt]);


	if(children !== undefined) {
		return <button type={typeName} className={name} ref={el}>{children}</button>
	}

	return <button type={typeName} className={name} ref={el}><span className={blind && 'blind'}>{txt}</span></button>
}

Buttons.propTypes = {
	name : PropTypes.string.isRequired,
	typeName : PropTypes.string,
	txt : PropTypes.string,
	clickCall : PropTypes.func,
	blind : PropTypes.bool,
	children : PropTypes.node
}

export default Buttons;