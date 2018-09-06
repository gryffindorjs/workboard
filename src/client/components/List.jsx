import React from 'react';
import Card from './Card.jsx'

export default class Column extends React.Component {
    // constructor() {    
    //     // this.props = this.state.props;
    //     // this.createCards = this.createCards.bind(this);
    //   }
    // // createCards() {
    //     let cards = [];
	// 		const card = <Card id={1} key ={1} value={this.state.task} date={this.state.date} addCard={this.state.addCard}/>
	// 		cards.push(card);
  
    //     console.log('*** CARDS', cards)
    //     return cards;
    // }

      render(){
        
		return(
          <div>
            <Card />
			{/* <button id="add card">add card</button> */}
          </div>
	)}
}