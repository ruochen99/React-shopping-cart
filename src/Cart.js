import React from "react";
import "./styles/cart.css";
import ReactDOM from "react-dom";
import Product from "./Product.js";
import ProductData from "./Data"
import Receipt from "./Receipt.jsx";
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
	constructor(props) {
    super(props);
    this.state = {
			cartItems:[
				// {
				// 	productName: "Apple",
				// 	price: 1,
				// 	count: 2
				// },
				// {
				// 	productName: "Orange",
				// 	price: 1,
				// 	count: 1
				// }
			]
  };
}
	handleAddToCart(productName, price) {
		var items = [...this.state.cartItems];
		var i;
		for (i = 0; i < items.length; i++) {
			if (items[i].productName === productName) {
				items[i].count++;
				this.setState({cartItems: items});
				return;
			}
		}
		this.setState({cartItems: this.state.cartItems.concat({productName: productName, price: price, count: 1})});
	}

	handleRemove(productName) {
		var items = [...this.state.cartItems];
		for (var i = 0; i < items.length; i++) {
			if (items[i].productName === productName) {
				items.splice(i, 1);
				this.setState({cartItems: items});
			}
		}
	}

  render() {
    return (
        <div className="page-content">
	        {ProductData.products.map(product => (
	        		<Product name={product.name} price={product.cost} limit={product.stock}
							onAddToCart={this.handleAddToCart.bind(this)} onRemoveItem={this.handleRemove.bind(this)}/>))
	        }
					<Receipt items = {this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
