import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (

    <React.Fragment>
      <h1> {text || 'John Doe'} </h1>

      <button className="btn" onClick={() => 
        setIsError(!isError)}>toggle error</button>

      {!isError && <h1>Error...</h1>}

      {!isError ? ( <p>there is a error</p> ) : (
        <div>there is no error</div>
      )}
      
      

    
    </React.Fragment>
  ) 
};

export default ShortCircuit;
