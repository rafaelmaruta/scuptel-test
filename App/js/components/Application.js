import jQuery from 'jquery';
import React from 'react';
import Header from './Header';
import Form from './Form';
import Results from './Results';
import Modal from './Modal';
import RequestsAsync from './Utils/RequestsAsync';

// Main stateful component
class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pricing   : this.props.pricing,
			details   : this.props.details,
			plans     : this.props.plans,
			origin    : '',
			destiny   : '',
			modalMode : '',
			modalState: 'hide',
			price     : undefined,
			testing   : this.props.testing,
			time      : 0
		}
		this.fillData    = this.fillData.bind(this);
		this.fillInput   = this.fillInput.bind(this);
		this.setPrice    = this.setPrice.bind(this);
		this.setTime     = this.setTime.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}
	componentDidMount() {
		if (this.props.testing !== 'true') {
			RequestsAsync(this.fillData);
		} else {
			this.fillData({
				pricing: this.props.pricing,
				details: this.props.details,
				plans  : this.props.plans
			});
		};
	}
	fillData(results) {
		this.setState({
			pricing: results.pricing[0],
			details: results.details[0],
			plans  : results.plans[0]
		})
	}
	fillInput(ddd) {
		if (this.state.modalMode === 'origin') {
			this.setState({origin: ddd}, () => this.setPrice());
		} else if (this.state.modalMode === 'destiny') {
			this.setState({destiny: ddd}, () => this.setPrice());
		};
		this.toggleModal('hide');
	}
	setPrice() {
		if (this.state.pricing.data) {
			var obj = this.state.pricing.data.filter(price => {
				return price.origin === this.state.origin && price.destiny === this.state.destiny
			});

			if (obj.length) {
				this.setState({price: obj[0].price});
			} else {
				this.setState({price: undefined});
			};
		};
	}
	setTime(event) {
		this.setState({time: event.target.value}, () => this.setPrice());
	}
	toggleModal(state, mode) {
		mode = mode || '';
		this.setState({
			modalState: state,
			modalMode : mode
		});
	}
	render() {
		var plans  = this.state.plans !== undefined ? this.state.plans : {data: []},
			details = this.state.details !== undefined ? this.state.details : {data: []};

		return (
			<div>
				<Header title="Scup Fale+" />
				<Form
					destiny={this.state.destiny}
					origin={this.state.origin}
					setTime={this.setTime}
					toggleModal={this.toggleModal}
				/>
				<Results
					plans={plans.data}
					price={this.state.price}
					time={this.state.time}
				/>
				<Modal
					details={details.data}
					fillInput={this.fillInput}
					modalState={this.state.modalState}
					toggleModal={this.toggleModal}
				/>
			</div>
		)
	}
}

export default Application;