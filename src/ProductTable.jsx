import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

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
        <table>
          <thead>
            <tr>
            <h1>Menu #</h1>
            </tr>
          </thead>
          <tbody>{rows}</tbody>  
        </table>
      );
    }
  }

export default ProductTable;
