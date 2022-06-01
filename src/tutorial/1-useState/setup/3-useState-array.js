import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = React.useState(data);

  const removeItems = (id) =>{
    let newPeople = people.filter((person) => person.id !== id );

    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      { people.map((person) => {
        
        const { id, name } = person;

        return(
          <div key={id} className='item'>
            <h4>{name}</h4>

            <button onClick={() => removeItems(id) }>Remove</button>

          </div>

        );
      })}

      <button className="btn" onClick={() => setPeople([])}>Clear All</button>

    </React.Fragment>
  );
  
};

export default UseStateArray;