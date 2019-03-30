import React from "react";

// let btn = document.querySelector("ui bottom attached button");

// btn.addEventListener("click", function() {
// 	return function(props) {
// 		return addToCart();
// 	}
// })

class Product extends React.Component {
	constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

	addToCart = (props) => {
		this.setState({ number: this.state.number + 1 });
		if (props.limit >= this.state.number) {
			alert("There are " + this.state.number + " " + props.name + " in your cart!");
		} else if (props.limit === 0) {
			alert("This item is out of stock!");
		} else {
			alert("There are too many " + props.name + " in your cart!");
		}
	}

	callAddToCart = () => {
		this.addToCart(this.props);
	}

	render() {
		return (
			<div class="ui card">
				<div class="card">
	   			 <div class="content">
					 <br />
	      		<div class="header">
						<h3>{this.props.name}</h3>
						</div>
	      		<div class="description">
	        	price: {this.props.price}
	      		</div>
						<br />
						<br />
	    		</div>
	    		<div class="ui bottom attached button" onClick = {this.callAddToCart}>
	     	 		<i class="add icon"></i>
	     			 Add to Cart
	    		</div>
	  			</div>
			</div>
		);
}
};



export default Product;
