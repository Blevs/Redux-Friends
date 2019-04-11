import React from 'react';

const Error = ({error}) => {
  return (
    <div className="error">{error.response.data.error}</div>
  );
};

export default Error;
