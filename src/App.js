import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { Component } from 'react';

class App extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			manager: '',
			players: [],
			balance: '',/** eso realmene en un big number,no estring */
			value: '',
			message: '',
		};
	}
	async componentDidMount() {
		const manager = await lottery.methods.manager().call();
		const players = await lottery.methods.getPlayers().call();
		const balance = await web3.eth.getBalance(lottery.options.address);

		this.setState({manager, players, balance});
	}

	async onSubmit(event) {
		event.preventDefault();
		
		const accounts = await web3.eth.getAccounts();

		this.setState({message: 'Waiting on transaction success...'});
		
		await lottery.methods.enter().send({
			from: accounts[0],
			value: web3.utils.toWei(this.state.value, 'ether')
		});

		this.setState({message: 'You are in!'});
	}

	async onClick(event) {
		event.preventDefault();
		
		const accounts = await web3.eth.getAccounts();

		this.setState({message: 'Looking for the winner ...'});
		
		await lottery.methods.pickWinner().send({
			from: accounts[0]
		});

		this.setState({message: 'the award was given to the winner'});
	}

	// web3.eth.getAccounts().then(console.log);
	render() {
		return (
			<div>
				<h2>Lotter Contract</h2>
				<p>This conract is managed by {this.state.manager}</p>
				<p>participate with at least <b>0.011 ether</b></p>
				<p>Currently players:  {this.state.players.length}</p>
				<p>Prize:  {web3.utils.fromWei(this.state.balance)} ether!!!</p>

				<hr/>

				<form onSubmit={this.onSubmit.bind(this)}>
					<h4>Try luck!</h4>
					<div>
						<label>Amount of ether to enter</label>
						&nbsp;
						<input 
							value={this.state.value}
							onChange={event => this.setState({value: event.target.value})}
						/>
					</div>
					<button>Let do it, Boy!</button>
				</form>

				<hr/>

				<h4>Pick a winner?</h4>
				<button onClick={this.onClick.bind(this)}>Sure</button>

				<hr/>

				<h1>{ this.state.message }</h1>
			</div>
		);
	}
}

export default App;
