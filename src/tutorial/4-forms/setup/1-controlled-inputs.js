import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [Email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
   if(firstName && Email) {
     const person = { id: new Date().getTime().toString(),
     firstName, Email};

     setPeople((people) => {
       return [...people, person];
     });
     setFirstName('');
     setEmail('');
   } else {

   }

  };

  return (
    <React.Fragment>
      
      <article>
        <form className="form" onClick={handleSubmit} >
          <div className="form-control">
            <label htmlFor="firstName"> Name : </label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName"
                value =  {firstName}
                onChange= {(e) => setFirstName(e.target.value)} 
                />
               
          </div>

           <div className="form-control">
            <label htmlFor="Email"> Email : </label>
            <input 
                type="text" 
                id="Email" 
                name="Email"
                value = {Email}
                onChange = {(e) => setEmail(e.target.value)}
                />
               
          </div>

          <button type="submit">add person</button>

        </form>

        { people.map((person) => {

          const {id, firstName, Email} = person
          return (
            <div className="item" key={id}>
              <h4>{firstName} </h4>
              <p>{Email}</p>
            </div>
          )
        })}
      </article>

    </React.Fragment>

  )
};

export default ControlledInputs;
