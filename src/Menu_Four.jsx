import React from 'react';
import ProductTable from "./ProductTable.jsx";
import Frutas_Preparadas from "./data/Frutas_Preparadas.js";
import GlobalStyles from "./GlobalStyles.js";
import BlackDiv from "./BlackDiv";


export default function Menu_Four() {
  return (
    <BlackDiv>
    <GlobalStyles/>  
     <ProductTable products={Frutas_Preparadas}></ProductTable>
    </BlackDiv>
  );
}