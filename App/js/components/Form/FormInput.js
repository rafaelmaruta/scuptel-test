import React from 'react';

const defaultProps = {
	disabled: '',
	onChange: '',
	type    : 'text'
}

function FormInput(props) {
	return (
		<input
			className="form__plans-input"
			disabled={props.disabled}
			min="0"
			onKeyUp={props.onChange}
			onClick={props.onChange}
			placeholder={props.placeholder}
			type={props.type}
			value={props.val}
		/>
	)
}

FormInput.defaultProps = defaultProps;

export default FormInput;