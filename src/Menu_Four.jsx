import React from 'react';
import ProductTable from "./ProductTable.jsx";
import Frutas_Preparadas from "./data/Frutas_Preparadas.js";
import styled from 'styled-components';


export default function Menu_Four({className}) {
  return (
    <div>
     <ProductTable products={Frutas_Preparadas}></ProductTable>
    </div>
  );
}