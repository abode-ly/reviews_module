import React from 'react';

function Rating(props) {
  return (
    <div>
      {props.type} = {props.value}
    </div>
  );
};

export default Rating;
