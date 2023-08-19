import React from 'react';
import PropTypes from 'prop-types';
import '/src/Item.css';

function Item({ item, children }) {
  return (
    <div className="Item">
      <div className="Item-left">
        <div className="Item-image"><img src={item.image}/></div>
        <div className="Item-title">{item.title}</div>
        <div className="Item-description">{item.description}</div>
      </div>
      <div className="Item-right">
        <div className="Item-price">${item.price}</div>
        {children}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;