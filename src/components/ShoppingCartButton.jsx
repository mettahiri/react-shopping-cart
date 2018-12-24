import React, { Component } from 'react';
import Button from "./Button"
class ShoppingCartButton extends Component {

    state = { 
        iClass : {
            className:"fa fa-shopping-cart fa-1x"
        },
        btnClass : {
            className:"btn badge badge-pill badge-danger text-light p-2 m-3"
        }
     }
    
    render() { 
        const BUTTON_VALUE = (
            <React.Fragment>
                <i {...this.state.iClass}></i> 
                <span> {this.props.inc}</span>
            </React.Fragment>
        );
        return ( 
            <div align="right">
                <Button 
                 onClick={this.props.onToggleCartList} 
                 {...this.state.btnClass}
                 val ={BUTTON_VALUE}
                />
            </div>
         );
    }
}
export default ShoppingCartButton;