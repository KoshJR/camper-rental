import React from "react";

const AdvertsList = ({ array }) => {
  return (
    <ul>
      {array.map(({ _id, name, price }) => (
        <li key={_id}>
          <h2>{name}</h2>
          <p>{price}</p>
        </li>
      ))}
    </ul>
  );
};

export default AdvertsList;
