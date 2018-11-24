import React, { Component } from 'react';
import Item from "./Item";
class Items extends Component {
    state = { 
        items : [
            {   
                id:1,
                titre : "Item1",
                description : "Lorem epsum dolor",
                prix : 35.5,
                qtt:0
            },
            {   
                id:2,
                titre : "Item2",
                description : "Construct sit boom",
                prix : 20.5,
                qtt:0

            },
            {
                id:3,
                titre : "Item3",
                description : "Cosmoc paraxi del akui",
                prix : 15.00,
                qtt:0

            }
        ]
     }
    
     addItem = (itm) => this.props.addItem(itm)

     
    render() { 
        const ITEMS = this.state.items.map(item => <Item key={item.id} items={item} addItem={this.addItem} /> )
        return ( 
            <section className="col-10 offset-1">
               {ITEMS}
            </section>
         );
    }
}

export default Items;