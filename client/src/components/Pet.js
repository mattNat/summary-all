import React from 'react';

export default function Pet(props) {
  function onAdoptPet() {
    console.log(`${props.name} adopted!`);
  }

  return (
    <div className={props.class}>
      <header>
        <h3>{props.name}</h3>
        <img src={props.url} alt={props.name} className='animal-image' />
      </header>
      <main role='main'>
        <dl>
          <dt>Sex</dt>
          <dd>{props.sex}</dd>
          <dt>Age</dt>
          <dd>{props.age} years</dd>
          <dt>Breed</dt>
          <dd>{props.breed}</dd>
          <dt>Story</dt>
          <dd>{props.story}</dd>
          <button
            onClick={() => onAdoptPet()}
          >
            Adopt
          </button>
        </dl>
      </main>
    </div>
  )
}