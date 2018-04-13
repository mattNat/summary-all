import React, { Component } from 'react';

import Pet from './components/Pet';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        count: 0,
        catToAdopt: {
          class: 'one',
          name: 'Fluffy',
          url: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
          sex: 'Female',
          age: '2',
          breed: 'Bengal',
          story: 'Thrown on the street.'
        },
        dogToAdopt: {
          class: 'two',
          name: 'June',
          url: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
          sex: 'Female',
          age: 1,
          breed: 'Bengal',
          story: 'Thrown on the street.'
        }
      } 
      
    }

    // handleClick() {
    //   console.log('Pet adopted!');
    // }

  
  render() {
    // function Display(props) {
    //   return (
    //     <div className={props.class}>
    //         <header>
    //           <h3>{props.name}</h3>
    //           <img src={props.url} alt={props.name} className='animal-image' />
    //         </header>
    //         <main role='main'>
    //           <dl>
    //             <dt>Sex</dt>
    //             <dd>{props.sex}</dd>
    //             <dt>Age</dt>
    //             <dd>{props.age} years</dd>
    //             <dt>Breed</dt>
    //             <dd>{props.breed}</dd>
    //             <dt>Story</dt>
    //             <dd>{props.story}</dd>
    //             <button>Adopt</button>
    //           </dl>
    //         </main>
    //     </div>
    //   )
    // }

    // const catToAdopt = {
    //   class: 'one',
    //   name: 'Fluffy',
    //   url: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    //   sex: 'Female',
    //   age: '2',
    //   breed: 'Bengal',
    //   story: 'Thrown on the street.'
    // }

    // const dogToAdopt = {
    //   class: 'two',
    //   name: 'June',
    //   url: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
    //   sex: 'Female',
    //   age: 1,
    //   breed: 'Bengal',
    //   story: 'Thrown on the street.'
    // }

    return (
      <div className='dashboard'>
        <Pet 
          class={this.state.catToAdopt.class}
          name={this.state.catToAdopt.name}
          url={this.state.catToAdopt.url}
          sex={this.state.catToAdopt.sex}
          age={this.state.catToAdopt.age}
          breed={this.state.catToAdopt.breed}
          story={this.state.catToAdopt.story}
          // onAdoptPet={() => this.handleClick}
        />
        <Pet 
          class={this.state.dogToAdopt.class}
          name={this.state.dogToAdopt.name}
          url={this.state.dogToAdopt.url}
          sex={this.state.dogToAdopt.sex}
          age={this.state.dogToAdopt.age}
          breed={this.state.dogToAdopt.breed}
          story={this.state.dogToAdopt.story}
        />
      </div>
    );
  }
}
