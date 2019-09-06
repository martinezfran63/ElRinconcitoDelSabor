import React, { Component } from 'react';
import ProductTable from "./ProductTable.jsx";
import Papas from "./data/Papas.js";
import GlobalStyles from "./GlobalStyles.js";
import BlackDiv from "./BlackDiv";

export default class Menu_Three extends Component {
    render(){
        return(
            <BlackDiv>
                 <GlobalStyles/>
                <ProductTable products={Papas}/>
            </BlackDiv>
                        
        )
    }


}