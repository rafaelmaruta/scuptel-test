import React, { PropTypes } from 'react';
import ModalBg from './ModalBg';
import ModalClose from './ModalClose';
import ModalRow from './ModalRow';

const propTypes = {
	details    : PropTypes.array.isRequired,
	modalState : PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired
};

const defaultProps = {
	details    : [],
	modalState : 'hide',
	toggleModal: function() {}
};

function Modal(props) {
	return (
		<section className={"modal " + props.modalState}>
			<ModalBg clickBg={props.toggleModal} />
			<div className="modal__popup">
				<ModalClose clickClose={props.toggleModal} />
				<table className="modal__popup-table">
					<tbody>
						{props.details.map((data, index) => (
							<ModalRow
								city={data.city}
								ddd={data.ddd}
								fillInput={props.fillInput}
								key={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;