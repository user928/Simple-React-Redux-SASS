import Controls from '../Components/Controls.js';


describe('Controls component', () => {

	it('renders correctly', () => {
		const wrapper = render(
			<Controls/>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('find reset txt', () => {
		const wrapper = mount(
			<Controls />
		);
		const resetTxt = wrapper.find('.reset').childAt(0).text();
		expect(resetTxt).toBe('Reset');
	});

	it('click on increment once', () => {
		const spy = sinon.spy();
		const wrapper = mount(
			<Controls increment={spy} />
		);

		wrapper.find('.increment').simulate('click');
		expect(spy.calledOnce).toBe(true);
	});

});