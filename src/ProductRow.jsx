import React from 'react';
import styled from 'styled-components'
import rinconcito_logo_small from './images/rinconcito_logo_small.png'
  const Td = styled.td`
  color: #e80d13;
  font-size: 25px;
  `

  const Td2 = styled.td`
  color: #ff04b5;
  font-size: 14px;
  `

  const td33 = styled.td`
  border-radius: 50%;
  opacity: 0.5;
  `

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'yellow'}}>
        {product.name}
      </span>;

    return (
      <tr>

        <Td>{name}</Td>
        <Td2>{product.ingredients}</Td2>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
