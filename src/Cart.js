import React from "react";
import "./styles/cart.css";
import ReactDOM from "react-dom";
import Product from "./Product.js";
import ProductData from "./Data"

// const products = [
// 	{
// 		productName: "Apple",
// 		price: 2,
// 		limit: 10
// 	},
// 	{
// 		productName: "Banana",
// 		price: 1,
// 		limit: 20
// 	}
// ]

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
	        {ProductData.products.map(product => (
	        		<Product name={product.name} price={product.cost} limit={product.stock}/>))
	        }
        </div>
    );
  }

}

export default Cart;
