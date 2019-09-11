import React, { Component } from 'react';
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import ProductTable from "./ProductTable.jsx";
import Frutas_Preparadas from "./data/Frutas_Preparadas.js";
import Bebidas from "./data/Bebidas.js";
import Nieves from "./data/Nieves.js";
import GlobalStyles from "./GlobalStyles.js";

import styled from 'styled-components'
import backgroundimage from './images/rinconcito_background_mixed.png'

const BackgroundDiv = styled.div`
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background: rgba(51,51,51,0.7);
z-index: 10;
background:url(${backgroundimage});
background-color: pink;
`

export default class Menu_One extends Component {
    render(){
        return( <BackgroundDiv>
                    <body class="Everything">
                        <div class= "right_logo">

                        </div>

                        <div>
                        <GlobalStyles/>
                        <ProductTable products={Frutas_Preparadas}/>
                        <ProductTable products={Bebidas}/>
                        <ProductTable products={Nieves}/>
                        </div>
                        
                        </body>
                    </BackgroundDiv>
        )
    }


}