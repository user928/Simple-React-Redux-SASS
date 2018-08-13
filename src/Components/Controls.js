import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../Redux/store';
import PropTypes from 'prop-types';
import { decrementNum, incrementNum, resetCounter } from '../Redux/actionCreators/counterActions';

export class _Controlls extends React.Component {
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
					<span>Reset this</span>
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

const Controlls = connect(
	null,
	mapDispatchToProps
)(_Controlls);

export default class extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Controlls {...this.props} />
			</Provider>
		);
	}
}
