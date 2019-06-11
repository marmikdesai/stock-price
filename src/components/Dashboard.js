import React, { Component } from 'react';
import StocksList from './StocksList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isConnected: false,
      isError: false,
      stocks: []
    };
  }

  componentDidMount() {
    const ws = new WebSocket("ws://stocks.mnet.website");
    ws.onopen = this.webSocketOpen;
    ws.onmessage = this.webSocketMessage;
    ws.onclose = this.webSocketClose;
  }

  webSocketOpen = () => {
    this.setState({
      isConnected: true,
      isLoading: true
    })
    console.log("Message is sent...");
  }

  webSocketMessage = (event) => {
    this.setState({
      stocks: JSON.parse(event.data),
      isConnected: false,
      isLoading: false
    })
    console.log(JSON.parse(event.data))
  }

  webSocketClose = () => {
    this.setState({
      isError: true
    })
    console.log("Connection is closed...");
  }

  render() {
    return (
      <div>
        {this.state.isConnected && <div>isConnected</div>}
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.stocks.length >= 1 && <StocksList stocks={this.state.stocks}/>}
        {this.state.isError && <div>Something went wrong. Please refresh page.</div>}
      </div>
    )
  }
}

export default Dashboard;
