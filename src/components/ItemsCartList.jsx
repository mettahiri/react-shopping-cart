import React, { Component } from 'react';

class ItemsCartList extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="itemsCartList">
                
                <i onClick={this.props.onToggleCartList} className="fa fa-times fa-3x"></i>

                <table>
                    
                    <tbody>
                    <tr>
                        
                        <td>Titre</td>
                        <td>Description</td>
                        <td>Prix</td>
                        <td>Quantité</td>
                    </tr>
                    
                    {
                        this.props.list.map((itm,indx) => 
                            <tr key={indx} >
                                <td>{itm.titre}</td>
                                <td>{itm.description}</td>
                                <td>{itm.prix}</td>
                                <td>{itm.qtt}</td>
                            </tr>
                        )
                    }   
                     </tbody>
                </table>
               
            </section>
        );
    }
}
 
export default ItemsCartList;