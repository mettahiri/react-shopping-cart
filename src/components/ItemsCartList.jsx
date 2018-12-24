import React,  { Component } from 'react';
import Button from "./Button"
class ItemsCartList extends Component {
    state = {
        iClass : {className:"fa fa-times fa-3x" },
        btn1Class : {className:"btn btn-success m-1"},
        btn2Class :{ className: "btn btn-dark m-1" }
    }
    
    render() { 
        if( this.props.list.length !==0){
            return ( 
                <section  id="itemsCartList">
                    <i onClick={this.props.onToggleCartList} {...this.state.iClass} ></i>
                    <center>
                        <table>
                            <caption>Panier</caption>
                            <tbody>
                                <tr>
                                    <td>image</td>
                                    <td>Titre</td>
                                    <td>Description</td>
                                    <td>Prix</td>
                                    <td>Quantité</td>
                                    <td>Total</td>
                                </tr>
                                {this.props.list.map((itm,indx) => 
                                
                                <tr key={indx} className={itm.qtt===0 ? "if_zero": ""} >
                                         <td><i className={"fas "+ itm.faImg} ></i> </td>
                                        <td>{itm.titre}</td>
                                        <td>{itm.description}</td>
                                        <td>{itm.prix} €</td>
                                        <td>
                                            <Button 
                                            onClick={()=>this.props.moins(itm)}
                                            val={<i className="fas fa-minus"></i>} 
                                            />
                                            <span> { itm.qtt} </span>
                                            <Button
                                            onClick={()=>this.props.plus(itm)} 
                                            val={<i className="fas fa-plus"></i>}
                                            />
                                        </td>
                                        <td><span>{itm.total}</span>€</td>
                                    
                                </tr>)}   
                                 <tr>
                                    <td colSpan="6">
                                        total : <span> {this.props.total} </span>€
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <Button  
                             val="Commander" 
                             {...this.state.btn1Class}
                             />
                            <Button 
                             onClick={this.props.reset}
                             val="Effacer"
                             {...this.state.btn2Class}
                            /> 
                         </div>
                    </center>
                </section>
            ); 
        }
         else 
        {
        return (
            <section  id="itemsCartList">
                <i onClick={this.props.onToggleCartList} {...this.state.iClass}></i>
                <div align="center">
                    <h2 className="animated tada">Votre panier est vide!!</h2>
                </div>
            </section>
        );
        }
      
    }
}
 
export default ItemsCartList;