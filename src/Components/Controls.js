import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../Redux/store';
import PropTypes from 'prop-types';
import { decrementNum, incrementNum, resetCounter } from '../Redux/actionCreators/counterActions';

export class _Controls extends React.Component {
	static propTypes = {
		increment: PropTypes.func,
		decrement: PropTypes.func,
		resetCount: PropTypes.func,
		resetLabel: PropTypes.string,
		incrementLabel: PropTypes.string,
		decrementLabel: PropTypes.string,
	};

	render() {
		return (
			<div className="controls">
				<div className="increment" onClick={this.props.increment}>
					<span>+</span>
				</div>

				<div className="reset" onClick={this.props.resetCount}>
					<span>Reset</span>
				</div>

				<div className="decrement" onClick={this.props.decrement}>
					<span>-</span>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(incrementNum()),
	decrement: () => dispatch(decrementNum()),
	resetCount: () => dispatch(resetCounter()),
});

const Controls = connect(
	null,
	mapDispatchToProps
)(_Controls);

export default class extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Controls {...this.props} />
			</Provider>
		);
	}
}
