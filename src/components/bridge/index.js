import { h, Component } from 'preact';
import bridge from 'preact-pwa-native-bridge';

const native = bridge('Examples');

export default class Demo extends Component {
	state = {
		alertText: 'Hello World!',
		specialMessage: '',
		delayedMessage: ''
	}

	handleAlertText = () => {
		native.call(
			{ alertText: [this.state.alertText] },
			{
				noBridge: () => {
					alert(`There was no bridge, so here's a standard alert:${this.state.alertText}`); //eslint-disable-line no-alert
				}
			}
		);
	}

	handleSpecialMessage = () => {
		this.setState({ specialMessage:
			native.call('getMessage',  {
				noBridge: () => 'No bridge, so no secret message for you.'
			})
		});
	}

	handleDelayedMessage = () => {
		native.promise(
			'getDelayedMessage',
			{
				noBridge: () => 'No bridge, so no secret message for you.'
			}
		).then(response => {
			this.setState({ delayedMessage: response });
		});
	}

	handleAlertTextChange = (e) => {
		this.setState({ alertText: e.target.value });
	}

	render({}, { alertText, specialMessage, delayedMessage }) {
		return (
			<div >
				<h2>bridge() Examples:</h2>
				<div>
					<p>Pushing the button below should cause the text in the input box to be alerted by the wrapper:</p>
					<input value={alertText} onInput={this.handleAlertTextChange}  />
					<input type="button" value="Fire Alert" onclick={this.handleAlertText} />
				</div>

				<div>
					<p>Pushing the button below should retrieve a special message from the wrapper:</p>
					<p>{specialMessage}</p>
					<input type="button" value="Get Message" onclick={this.handleSpecialMessage} />
				</div>


				<div>
					<p>Pushing the button below should retrieve a special message from the wrapper using a promise:</p>
					<p>{delayedMessage}</p>
					<input type="button" value="Get Delayed Message" onclick={this.handleDelayedMessage} />
				</div>
			</div>
		);
	}
}