import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {

}
const defaultState = {
  people: data,
  isModalOpen: true,
  modalContent: 'hello world'
}

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultState)
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(name) {
     
    } else {
     
    }
  }
 
  return (
    <React.Fragment>
      {state.isModalOpen && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name} </h4>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
