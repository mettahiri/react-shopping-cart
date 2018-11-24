import React, { Component } from 'react';
class ShoppingCartButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div align="right">
                <button onClick={this.props.onToggleCartList} className="btn badge badge-pill badge-dark text-light p-2 m-3">
                    <i className="fa fa-shopping-cart fa-1x"></i> 
                    <span> {this.props.inc}</span>
                </button>
            </div>
         );
    }
}
export default ShoppingCartButton;