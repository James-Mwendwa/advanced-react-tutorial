import React, { useState } from 'react';

const UseStateObject = () => {
 const [person, setPerson] = useState({
   name: 'Peter',
   age: 21,
   message: 'random message'

 });

 const changeMessage = () =>{
   setPerson({...person, message: 'hello World'});
 }

  return <React.Fragment>
    <h3> {person.name} </h3>
    <h3> {person.age} </h3>
    <h3> {person.message} </h3>

    <button className="btn" onClick={changeMessage}>Change Message</button>

  </React.Fragment>;
};

export default UseStateObject;
