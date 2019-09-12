import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";
import styled from 'styled-components'

const Table = styled.table`
border: 3px solid black;`


class ProductTable extends React.Component {
    render() {

      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              ingredients={product.ingredients}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            ingredients={product.ingredients}
            key={product.name} />
        );
        lastCategory = product.category;
      });
  
      return (
        <div>
        <Table>
          <thead>
          </thead>
          <tbody>{rows}</tbody>  
        </Table>
        </div>
      );
    }
  }

export default ProductTable;
