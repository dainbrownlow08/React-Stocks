import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar handleSortAlpha={this.props.handleSortAlpha} alphaBool={this.props.alphaBool}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} handleEvent={this.props.handleBuy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.portfolio} handleEvent={this.props.handleSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
