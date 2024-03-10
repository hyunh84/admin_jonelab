import React, {useEffect, useState} from 'react';
import Layer from 'layer';
import Buttons from 'ui_component/buttons'


const PopupSample01 = () => {
	const [isPrevPopOpen, setIsPrevPopOpen] = useState(false);

	const openPrevPop = ()=>{
		setIsPrevPopOpen(true);
	}

	useEffect(()=>{

	}, []);
 
  return (
	<>
		<div className="contents">

			<Buttons
				name='btnItemL03'
				txt='미리보기'
				clickCall={openPrevPop}
			/>
		</div>

		{/* 팝업 sample */}
		{
			isPrevPopOpen && 
			<Layer 
				idName = {'previewModal'}
				layerTitle="미리보기"
				// name="layerWrap02"
				setClose = {setIsPrevPopOpen}
			>
				modal popup sample
			</Layer>
		}
	</>
  );
}


export default PopupSample01;