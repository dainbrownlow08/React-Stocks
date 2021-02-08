import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      sortAlpha: false,
      sortPrice: false,
      filter: ''
    }
  }

  getStocks = () => {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => this.setState({stocks}))
  }

  componentDidMount() {
    this.getStocks()
  }

  handleBuy = (stockObj) => {
    const newPort = [...this.state.portfolio, stockObj]
    this.setState({
      portfolio: newPort
    })
  }

  handleSell = (stockObj) => {
    let stockIndex = this.state.portfolio.indexOf(stockObj)
    let prevStocks = this.state.portfolio
    prevStocks.splice(stockIndex,1)
    let newPort = prevStocks
    this.setState({
      portfolio: newPort
    })
  }

  handleSortAlpha = () => {
    let newSortAlpha = !this.state.sortAlpha
    if(this.state.sortAlpha === false){
      const alphaStocks = this.state.stocks.sort((a, b) => (a.name < b.name) ? -1 : 1)
      this.setState({
        stocks: alphaStocks,
        sortAlpha: newSortAlpha
      })
    }else{
      this.getStocks()
      this.setState({
        sortAlpha: newSortAlpha
      })
    }
  }

  // handleSortAlpha = () => {
  //   if(this.state.sortAlpha === false){
  //     const alphaStocks = this.state.stocks.sort((a, b) => (a.name < b.name) ? -1 : 1)
  //     this.setState({
  //       stocks: alphaStocks
  //     })
  //   }else{
  //     this.getStocks()
  //   }
  // }





  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stocks={this.state.stocks} 
          portfolio={this.state.portfolio}
          handleBuy={this.handleBuy}
          handleSell={this.handleSell}
          handleSortAlpha={this.handleSortAlpha}
          alphaBool={this.state.sortAlpha}/>
      </div>
    );
  }
}

export default App;
