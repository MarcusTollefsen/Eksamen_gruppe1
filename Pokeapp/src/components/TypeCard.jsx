import React from 'react';
import { Link } from 'react-router-dom';

function TypeCard({ type, imageUrl }) {
  return (
    <div className="type-card">
      <Link to={`/${type}`}>
        <img src={imageUrl} alt={`${type} type`} />
        <h4>{type.toUpperCase()}</h4>
      </Link>
    </div>
  );
}

export default TypeCard;
