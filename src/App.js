import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Itish', age: 23, job: 'Unemployed' },
      { id: 'qwer2', name: 'Mridul', age: 30, job: 'Engineering Manager' },
      { id:'zxcv3', name: 'Ishani', age: 29, job: 'Program Manager' },
    ],
    otherState: 'Some other value',
    showPerson: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { 
      ...this.state.persons[personIndex] 
    };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPerson) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          job = {person.job}
          key = {person.id} 
          change = {(event) => this.nameChangedHandler(event, person.id)} />
        })}
        {/* <Person 
           name = { this.state.persons[0].name } 
           click = { this.switchNameHandler.bind(this, 'Itish Dhiman')}
           age = { this.state.persons[0].age } job="unemployed"/>
        <Person 
           name = { this.state.persons[1].name } 
           change = {this.nameChangedHandler}
           age = { this.state.persons[1].age } job="Engineering Manager"/>
        <Person 
           name = { this.state.persons[2].name } 
           age = { this.state.persons[2].age } job="Program Manager"/> */}
      </div>
      )
    }
    return (
      // This looks like HTML, but it is NOT. This is JavaScript behind the scenes. 
      
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <h2>This is very confusing so far 🤔 </h2>
       <p>Okay maybe i'm getting it...</p>
       <button 
       style={btnStyle}
       onClick = { this.togglePersonsHandler }>Toggle Names</button>
       {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now? 😕 '));
  }
}


export default App;






// const App = (props) => {
//   const [ this,state. setthis state.] = useState({
//       persons: [
//         { name: 'Itish', age: 23 },
//         { name: 'Mridul', age: 30 },
//         { name: 'Ishani', age: 29 },
//      ],
//      otherState: 'some other value',
//   });

//   const switchNameHandler = () => {
//         // DO NOT DO THIS - this.state.persons[0].name = 'Itish Dhiman';
//         setthis(state.{persons: [
//           { name: 'Itish Dhiman', age: 23 },
//           { name: 'Mridul', age: 30 },
//           { name: 'Ishani', age: 28 },
//         ]
//       });
//     }
//     const [someOtherState, setOtherState] = useState('some other value');
//     console.log(this,state. someOtherState);
//     return (
//       // This looks like HTML, but it is NOT. This is JavaScript behind the scenes. 
//       <div className="App">
//        <h1>Hi, I'm a React App</h1>
//        <h2>This is very confusing so far 🤔 </h2>
//        <p>Okay maybe i'm getting it...</p>
//        <button onClick = { switchNameHandler }>Switch name</button> 
//        <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age } job="unemployed" />
//        <Person name = { this.state.persons[1].name } age = { this.state.persons[1].age } job="an Engineering Manager" />
//        <Person name = { this.state.persons[2].name } age = { this.state.persons[2].age } job="a Program Manager" />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now? 😕 '));
//   }
