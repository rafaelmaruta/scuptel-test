import React from 'react';

function ModalClose(props) {
	return <a href="javascript:void(0);" className="modal__popup-close" onClick={() => props.clickClose('hide')}>x</a>
}

export default ModalClose;