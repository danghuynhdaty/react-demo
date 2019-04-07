import React from 'react';


// Stateless js => js
// babel ES6 => plain js
function Hello({ name, handleClick }) {
  console.log(onclick);
  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Hello;

// ES6 destructoring
// contructor