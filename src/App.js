import React, { useState, useEffect } from 'react';

function App() {
const [count, setCount] = useState("y" || 0);

const [count2, setCount2] = useState(8);
useEffect(() => {
    document.title = `${count} `;
});

return (
    <div className='Dz'>
      <p>Welcome Cool Gu{count} !</p>
      <p>Your lucky number is {count2}</p>
      <p>Name has changed {count}</p>

      <div className='button'>
        <button onClick={() => setCount(count + "y")}>
          change name
        </button>
        <button onClick={() => setCount2(count2 + 10)}>
          Get New Lucky Number
        </button>
      </div>
    </div>
);
};

export default App;