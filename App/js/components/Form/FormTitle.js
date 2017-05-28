import React from 'react';

const defaultProps = {
	title: 'Comparar Planos'
};

function FormTitle(props) {
	return <p className="form__title">{props.title}</p>
}

FormTitle.defaultProps = defaultProps;

export default FormTitle;