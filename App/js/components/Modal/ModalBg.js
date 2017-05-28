import React from 'react';

function ModalBg(props) {
	return <div className="modal__bg modal__bg--dark" onClick={() => props.clickBg('hide')}></div>
}

export default ModalBg;