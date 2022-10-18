import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);

  return (
    <div>
      <h1>Refresh to generate a new message</h1>
      <hr></hr>
      <div>
        <h2>
          Message:
          {' '}
          { message }
        </h2>
      </div>
    </div>
  );
};

export default Greeting;
