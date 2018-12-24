import React, { Component } from 'react';
import Item from "./Item";
class Items extends Component {
    state = { 
        items : [
            {   
                id:1,
                faImg : "fa-mobile-alt",
                titre : "Item-1",
                description : "Lorem epsum dolor",
                prix : 35.5,
                total:0,
                qtt:0
            },
            {   
                id:2,
                faImg : "fa-laptop",
                titre : "Item-2",
                description : "Construct sit boom",
                prix : 20.5,
                total:0,
                qtt:0
            },
            {
                id:3,
                faImg : "fa-tv",
                titre : "Item-3",
                description : "Cosmoc paraxi del akui",
                prix : 15.00,
                total:0,
                qtt:0
            }
        ]
     }
     
    addItem = (itm) => this.props.addItem(itm)

    render() { 
        const ALL_ITEMS = this.state.items.map(item=>(
            <Item key={item.id} 
             items={item} 
             addItem={this.addItem} 
            /> 
        ));

        return ( 
            <section className="container">
               {ALL_ITEMS}
            </section>
        );
    }
}

export default Items;