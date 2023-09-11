import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map(({ id, name, email }) => (
        <React.Fragment key={id}>
          <Card id={id} name={name} email={email} />
        </React.Fragment>
      ))}
    </>
  );
};

export default CardList;
