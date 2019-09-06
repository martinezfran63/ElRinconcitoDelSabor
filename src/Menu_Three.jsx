import React, { Component } from 'react';
import ProductTable from "./ProductTable.jsx";
import Papas from "./data/Papas.js";


export default class Menu_Three extends Component {
    render(){
        return(
            <div>
                <ProductTable products={Papas}/>
            </div>
                        
        )
    }


}