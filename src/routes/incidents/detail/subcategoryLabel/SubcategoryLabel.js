import React from 'react';
import './Styles.css';

export const SubcategoryLabel = (props) => {
  return (
    <div className="subcategory-label">
      <p>Subcategoria</p>
      <div className="subcategory-content">
        <label className="label-text">{props.content}</label>
      </div>
    </div>
  );
};
