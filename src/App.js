import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      { name: 'Itish', age: 23 },
      { name: 'Mridul', age: 30 },
      { name: 'Ishani', age: 29 },
    ]
  }

  switchNameHandler = (newName) => {
    // DO NOT DO THIS - this.state.persons[0].name = 'Itish Dhiman';
    this.setState({persons: [
      { name: newName, age: 23 },
      { name: 'Mridul', age: 30 },
      { name: 'Ishani', age: 28 },
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Itish', age: 23 },
      { name: event.target.value, age: 30 },
      { name: 'Ishani', age: 28 },
    ]})
    // console.log(event);
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      // This looks like HTML, but it is NOT. This is JavaScript behind the scenes. 
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <h2>This is very confusing so far 🤔 </h2>
       <p>Okay maybe i'm getting it...</p>
       <button 
       style={btnStyle}
       onClick = { this.switchNameHandler.bind(this, 'Iti') }>Switch name</button>

       <Person 
       name = { this.state.persons[0].name } 
       click = { this.switchNameHandler.bind(this, 'Itish Dhiman')}
       age = { this.state.persons[0].age } job="unemployed"/>
       <Person 
       name = { this.state.persons[1].name } 
       change = {this.nameChangedHandler}
       age = { this.state.persons[1].age } job="Engineering Manager"/>
       <Person 
       name = { this.state.persons[2].name } 
       age = { this.state.persons[2].age } job="Program Manager"/>
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