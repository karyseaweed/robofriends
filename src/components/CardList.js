import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (!robots) {
    throw new Error('NOOOOO!');
  }
  const cardsArray = robots.map(robot => {
    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
  });
  return (
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;