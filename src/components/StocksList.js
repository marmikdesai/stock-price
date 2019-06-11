import React, { Component } from 'react';

class StocksList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
// work on stockslist data. 
  render() {
    return (
      <div>
      {
        this.props.stocks.map((elm) => {
          return (
            <>
              <div>{elm[0]}</div>
              <div>{elm[1]}</div>
            </>
          )
        })
      }
      </div>
    )
  }
}

export default StocksList;
