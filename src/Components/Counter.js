import React from 'react';
import { connect, Provider } from 'react-redux';
import store from '../Redux/store';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon/SVGIcon';
import Controlls from './Controls';

export class _Counter extends React.Component {
	static propTypes = {
		count: PropTypes.number,
	};

	static defaultProps = {
		count: 0,
	};

	render() {
		const { count } = this.props;

		return (
			<div className="counter">
				<div className="count">{count}</div>
				<Controlls />
				<hr />

				<span>
					<SVGIcon icon="wrench" wrapperClassName="AppLanding__icon" size={80} />
					<a href="https://github.com/Gigacore/React-Redux-Starter">Fork it on Github</a>
				</span>
			</div>
		);
	}
}

export const mapStateToProps = store => {
	return {
		count: store.count,
	};
};

const Counter = connect(
	mapStateToProps,
	null
)(_Counter);

export default class extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Counter {...this.props} />
			</Provider>
		);
	}
}
