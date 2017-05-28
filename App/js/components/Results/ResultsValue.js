import React from 'react';
import FormatPrice from '../Utils/Helper';

function ResultsValue(props) {
	var	calc  = 0,
		price = props.price,
		plan  = props.plan ? props.plan : 0,
		time  = props.time;

	if (time - plan > 0) {
		var mult = props.plan ? 1.1 : 1;
		calc = (time - plan) * price * mult;
	} else {
		calc = 0;
	}

	calc = FormatPrice.getSplit(calc);

	if (price === undefined) {
		return <p className="results__group-value"><span>-</span></p>
	} else {
		return <p className="results__group-value">R$<span>{calc.int}</span>,{calc.float}</p>
	}
}

export default ResultsValue;