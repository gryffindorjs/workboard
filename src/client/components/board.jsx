import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import { render } from 'react-dom'
import List from './List.jsx'

export default class Board extends React.Component {
  
    constructor(props) {
      super(props);
      this.colNames = ['Planned', 'In Progress', 'Completed'];
      this.lists = [];
      this.cards = [];
      this.createColumns = this.createColumns.bind(this);
    }
  
    componentWillMount() {
      console.log('rendering board');
    }

    createColumns() {
      this.colNames.forEach(name => {
        const column = <List id={name} key={name} />
        this.lists.push(column);
      });
      return this.lists;

      // let cards = [];
      // const card = <Card id={1} key ={1} />
      //   // let cards = [card];
        
      //   this.cards.push(card);

      //   console.log('*** CARDS', this.cards)
      //   console.log("rendering cards");
      //   return this.cards;
    }
    
    render(){
      
      let lists = [];
      for(let i = 0; i < this.colNames.length; i++) {
        const list = <List id={i} key={i} name={this.colNames[i]}/>
        this.lists.push(list);
      }
      
      return (
        <div className="lists">
          {this.lists}
        </div>

     )};

}

