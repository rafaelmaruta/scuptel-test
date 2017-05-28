import React from 'react';

function ModalRow(props) {
	return (
		<tr onClick={() => props.fillInput(props.ddd)}>
			<td>{props.ddd} - {props.city}</td>
		</tr>
	)
}

export default ModalRow;