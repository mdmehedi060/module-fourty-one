import React from 'react';

const Watch = ({watch}) => {
  const {name, price} = watch;
  return (
    <div>
      <h2>Watchs:{name}</h2>
      <p>Price:{ price}</p>
    </div>
  );
};

export default Watch;