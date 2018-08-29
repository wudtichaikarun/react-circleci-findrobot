import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid #9EEBCF',
        height: '800px',
        padding: '20px 0'
      }}>
      {children}
    </div>
  );
};

export default Scroll;
