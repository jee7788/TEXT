import React from "react";
import Login from './Login';


const App = () => {
  const id = 'exampleUser';

  return (
    <div>
      <h1 className='myapp'>My App</h1>
      <Login id={id} />
    </div>
  );
};

export default App;