import { h, Component } from 'preact';
import { bridgeProps } from 'preact-pwa-native-bridge';

@bridgeProps('BridgePropsExample')
export default class Demo extends Component {
	render({ message }) {
		return (
			<div >
				<h2>bridgeProps() Example:</h2>
				<h3>{message && message || `!!!Change me!!!`}</h3>
				<div>
					<p>If you use the wrapper provided controls, enter text, it will change the text above.</p>
				</div>
			</div>
		);
	}
}