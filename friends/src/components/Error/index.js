import React from 'react';

const Error = ({error}) => {
  return (
    <div classNanme="error">{error.response.data.error}</div>
  );
};

export default Error;
