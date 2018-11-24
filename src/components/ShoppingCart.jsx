import React, { Component } from 'react';
import ShoppingCartButton from "./ShoppingCartButton";
import Items from "./Items"
import ItemsCartList from "./ItemsCartList"
import Item from './Item';

class ShoppingCart extends Component {
    state = { 
        toggle : true,
        inc :0,
        cartItems: []
     }


    toggle = ()=>{
        this.state.toggle ?
        this.setState({ toggle : false  }) :
        this.setState({ toggle : true  }) 
    }

    addItem = itm => {
        const  cartItems = [...this.state.cartItems]
        if(cartItems.includes(itm)){
            itm.qtt++;
            this.setState({ itm,inc : this.state.inc+1  });

        }else {
            itm.qtt++;
            this.setState({ cartItems: [...cartItems,itm] ,inc : this.state.inc+1 });
        }
    }

    render() { 
        console.log(this.state.cartItems);

        if(this.state.toggle) {
            return ( 
                <main className="col-md-8 col-12 offset-md-2 ">
                     <ShoppingCartButton
                      onToggleCartList={this.toggle}       
                      inc={this.state.inc}
                     />
                     <Items  addItem={this.addItem} />
                </main>
             );
        } else {
            return ( 
                <main className="col-md-8 col-12 offset-md-2 ">
                    <ItemsCartList 
                    onToggleCartList={this.toggle}
                    list={this.state.cartItems}
                    />
                </main>
             );
        }
    }
}
 
export default ShoppingCart;