import React, { PropTypes } from 'react';
import ResultsTitle from './ResultsTitle';
import ResultsValue from './ResultsValue';

const propTypes = {
	plans: PropTypes.array.isRequired
};

const defaultProps = {
	plans: []
};

function Results(props) {
	return (
		<section className="results">
			<div className="results__center">
				{props.plans.map((data, index) => (
					<div className="results__group" key={index}>
						<ResultsTitle title={data.plan} />
						<ResultsValue
							price={props.price}
							time={props.time}
							plan={data.time}
						/>
					</div>
				))}
				<div className="results__group results__group--last">
					<ResultsTitle title="Normal" />
					<ResultsValue
						price={props.price}
						time={props.time}
					/>
				</div>
			</div>
		</section>
	)
}

Results.propTypes    = propTypes;
Results.defaultProps = defaultProps;

export default Results;