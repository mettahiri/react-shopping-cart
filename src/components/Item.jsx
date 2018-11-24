import React, { Component } from 'react';
class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <article className="alert alert-light">
               <div align="center">
                    <h1>{this.props.items.titre}</h1>
                    <h3>description:</h3>
                    <p>{this.props.items.description}</p>
                    <h3>price:</h3>
                    <h2>{this.props.items.prix}</h2>
                </div>
                <button onClick={()=>this.props.addItem(this.props.items) } className="btn btn-dark "> Add</button>
            </article>
         );
    }
}
export default Item;