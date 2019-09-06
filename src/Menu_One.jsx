import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import ProductTable from "./ProductTable.jsx";
import Frutas_Preparadas from "./data/Frutas_Preparadas.js";
import Bebidas from "./data/Bebidas.js";
import Nieves from "./data/Nieves.js";
import GlobalStyles from "./GlobalStyles.js";
import BlackDiv from "./BlackDiv";

export default class Menu_One extends Component {
    render(){
        return( <BlackDiv>
                    <body class="Everything">
                        <div class= "right_logo">
                            <Image src={rinconcito_logo_small}/>
                        </div>

                        <div>
                        <GlobalStyles/>
                        <ProductTable products={Frutas_Preparadas}/>
                        <ProductTable products={Bebidas}/>
                        <ProductTable products={Nieves}/>
                        </div>
                        
                        </body>
                    </BlackDiv>
        )
    }


}