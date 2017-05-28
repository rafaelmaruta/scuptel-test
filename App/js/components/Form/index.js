import React from 'react';
import FormTitle from './FormTitle';
import FormPlansTitle from './FormPlansTitle';
import FormInput from './FormInput';
import FormAdd from './FormAdd';

function Form(props) {
	return (
		<section className="form">
			<div className="form__center center">
				<FormTitle />
				<form className="form__plans">
					<div className="form__plans-group">
						<FormPlansTitle title="Origem" />
						<FormInput
							disabled="disabled"
							placeholder="DDD"
							val={props.origin}
						/>
						<FormAdd clickAdd={() => props.toggleModal('show', 'origin')} />
					</div>
					<div className="form__plans-group">
						<FormPlansTitle title="Destino" />
						<FormInput
							disabled="disabled"
							placeholder="DDD"
							val={props.destiny}
						/>
						<FormAdd clickAdd={() => props.toggleModal('show', 'destiny')} />
					</div>
					<div className="form__plans-group form__plans-group--last">
						<FormPlansTitle title="Tempo (min)" />
						<FormInput
							placeholder="MM"
							type="number"
							onChange={props.setTime}
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Form;