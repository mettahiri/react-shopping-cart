import React, { Component } from 'react';
import Button from "./Button"
class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <article className="alert alert-light items ">
               <center>
                    <i className={"faImg fas "+this.props.items.faImg }></i>
                    <h2 >{this.props.items.titre}</h2>
                    <p>{this.props.items.description}</p>
                    <h3>prix: <strong  style={{color : "orange"}}>{this.props.items.prix} €</strong></h3>
                </center>
                <Button 
                 onClick={()=>this.props.addItem(this.props.items) } 
                 className="btn btn-primary "
                 val ="Add"
                />
            </article>
         );
    }
}
export default Item;