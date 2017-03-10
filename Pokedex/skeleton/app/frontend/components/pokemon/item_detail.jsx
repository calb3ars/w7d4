import React from 'react';

class ItemDetail extends React.Component {

  render() {
    let item = this.props.item;
    let index = this.props.item.id;
    return (
      <ul key={index}>
        <li key={item.name}> <img src={`${item.image_url}`} height="30" width="30" /></li>
        <li key={`happiness-${index}`}>Happiness: {item.happiness}</li>
        <li key={`price-${index}`}>Price: {item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
