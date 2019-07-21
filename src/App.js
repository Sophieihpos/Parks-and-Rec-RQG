import React from 'react';
import './App.css';
import quoteList from './Data'
import Header from './components/Header'
import QuoteBox from './components/QuoteBox'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Bye Bye Li\'l Sebastian',
      author: 'Andy Dwyer',
      colour: '#2ECC71'
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    const colours = ['#2ECC71', '#3498DB', '#F4D03F', '#A569BD', '#EC7063', '#16A085', '#F39C12', '#C0392B', '#AF7AC5', '#E74C3C'];
    const randNum = Math.floor(Math.random() * quoteList.length);
    const randCol = Math.floor(Math.random() * colours.length);
      this.setState({
        quote: quoteList[randNum][0],
        author: quoteList[randNum][1],
        colour: colours[randCol]
      })
  }

  render() {
    return (
      <div id="container" style={{backgroundColor: this.state.colour}}>
        <Header />
        <QuoteBox handleClick={this.handleClick} data={this.state}/>
        <Footer />
      </div>
    );
  };
}

export default App;
