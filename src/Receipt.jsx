import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
      	<div className="receipt-text">
      		{item.productName} x {item.count}
      	</div>
        <div className="receipt-text">
      		${item.count}*{item.price}
      	</div>
      </div>
    );
  }

  sum(items) {
    var result = 0;
    for (var i = 0; i < items.length; i++) {
      result += items[i].count * items[i].price;
    }
    return result.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,'); ;
  }

  render() {
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {this.props.items.map(item => this.renderItem(item))}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.sum(this.props.items)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
