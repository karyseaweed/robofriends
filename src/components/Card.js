import React from 'react';

const Card = ({ id, name, email }) => {
  // instead of using props as the param, destructure it so we don't need to put "prop." in front of everything
  return (
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='kary icon'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;