import React, { Component } from 'react';
import ShoppingCartButton from "./ShoppingCartButton";
import Items from "./Items"
import ItemsCartList from "./ItemsCartList"
import logo from "../logo.svg"

class ShoppingCart extends Component {
    state = { 
        on : true,
        inc :0,
        cartItems: [],
        total:0
     }

    onToggle = ()=>{
        this.setState({ on : !this.state.on  }) ;
    }

    onAddItem = itm => {
        itm.qtt++;
        itm.total = itm.qtt * itm.prix ;

         //indexOf: -1 => false; else is index "0,1,2..." 
        if(this.state.cartItems.indexOf(itm) !== -1  ){
            this.setState({
                 inc : this.state.inc+1,
                 total : this.state.total + itm.prix
            });
        } else {
            this.setState({
                 cartItems: [...this.state.cartItems, itm],
                 inc : this.state.inc+1,
                 total : this.state.total + itm.prix
            });
        }
    }

    onPlus= (itm)=>{
        const LIST = [...this.state.cartItems];
        const ITEM_QUANTITY = LIST.filter(item=> (
            item.id === itm.id && item.qtt++
        ));
        itm.total = itm.qtt * itm.prix;

        this.setState({  
            ITEM_QUANTITY,
            inc :   this.state.inc+1,
            total : this.state.total + itm.prix
        });  
    }

    onMoins = (itm) => {
        const LIST = [...this.state.cartItems]
        const ITEM_QUANTITY = LIST.filter(item => (
            item.id === itm.id && item.qtt !==0 && item.qtt-- 
        ));

        itm.total = itm.qtt * itm.prix;

        if( ITEM_QUANTITY !=0){
            this.setState({  
                ITEM_QUANTITY,
                inc :  this.state.inc-1,
                total : this.state.total - itm.prix
            });
        }
    }

    onReset = ()=>{
       const CONFIRM= window.confirm("Vous etes sur de vouloir vider le panier?");
       if(CONFIRM){
        const LIST = [...this.state.cartItems];
        const ITEMS_QUANTITY = LIST.filter(item=> item.qtt = 0);
        this.setState({ cartItems : [], inc :0, total:0,ITEMS_QUANTITY });
       }
    }
      
    render() { 
        const TOGGLE = this.state.on ? {display:"block"} : {display:"none"};

        return ( 
            <main className="col-md-8 col-12 offset-md-2 ">
                {!this.state.on && (
                    <ItemsCartList 
                        onToggleCartList={this.onToggle}
                        list={this.state.cartItems}
                        moins={this.onMoins}
                        plus={this.onPlus}
                        increment = {this.state.inc}
                        total = {this.state.total}
                        reset={this.onReset} 
                    />
                 )}
               
                <section style={TOGGLE}>
                <h4 className="textCart" align="center">
                    Système de panier basique en react 
                    <img src={logo} className="App-logo" alt="logo" />
                </h4>
                    <ShoppingCartButton
                        onToggleCartList={this.onToggle}       
                        inc={this.state.inc}
                    />
                    <Items  addItem={this.onAddItem} />
                </section>
                
            </main>
        );
    }
}
 
export default ShoppingCart;