import React, { Component } from 'react';
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
import ProductTable from "./ProductTable.jsx";
import GlobalStyles from "./GlobalStyles.js";
import styled from 'styled-components'
import Frutas_Preparadas from "./data/Frutas_Preparadas.js";
import Bebidas from "./data/Bebidas.js";
import Etc from "./data/Etc.js";
import Nieves from "./data/Nieves.js";
import Papas from "./data/Papas.js";

const BackgroundDiv = styled.div`
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background: rgba(51,51,51,0.7);
z-index: 10;
background:url(${rinconcito_logo_small});
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
                        <ProductTable products={Etc}/>
                        <ProductTable products={Nieves}/>
                        <ProductTable products={Papas}/>
                        </div>
                        </body>
                    </BackgroundDiv>
        )
    }


}