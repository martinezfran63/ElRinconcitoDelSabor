import React from 'react';
import styled from 'styled-components'

  const Td = styled.td`
  color: black;
  font-size: 25px;
  `

  const Td2 = styled.td`
  color: black;
  font-size: 14px;
  `

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
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
