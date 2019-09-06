import React from 'react';
import styled from 'styled-components'

  const TRE = styled.tr`
  color: yellow;
  font-size: 35px;
  `


class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <TRE>
          <th colSpan="2">
            {category}
          </th>
        </TRE>
      );
    }
  }

export default ProductCategoryRow;
