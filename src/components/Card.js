import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-yellow dib tc br3 ma2 shadow-5 grow">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt="robots"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
