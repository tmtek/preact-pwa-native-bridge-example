import { h } from 'preact';
import BridgeDemo from './bridge/';
import BridgePropsDemo from './bridgeProps';

export default function App () {
	return (
		<div >
			<h1>preact-native-bridge</h1>
			<BridgeDemo />
			<BridgePropsDemo />
		</div>
	);
}
