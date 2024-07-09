// VERY EASY

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div>
//           <p>Name: Juan Casill</p>
//           <p>Number: 123-456-7890</p>
//           <p>Date of Birth: 16/09/2004</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

//EASY

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <p>Name: Juan Casill</p>
//           <p>Number: 123-456-7890</p>
//           <p>Date of Birth: 16/09/2004</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// MEDIUM

// import React, { Component } from 'react';
// import './App.css';
// import Info from './info';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Juan Casilla',
//         number: '123-456-7890',
//         dob: '16/09/2004'
//       }
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <Info person={this.state.person} />
//       </div>
//     );
//   }
// }

// export default App;

// HARD
import React, { Component } from 'react';
import './App.css';
import Info from './info';

import juan from './images/juan.jpg';
import nina from './images/nina.jpg';
import maria from './images/maria.jpg';
import diana from './images/diana.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'Juan Casilla', number: '123-456-7890', dob: '16/09/2004', picture: juan },
        { name: 'Nina Torrealba', number: '987-654-3210', dob: '22/08/2003', picture: nina },
        { name: 'Maria F. Torrealba', number: '444-444-444', dob: '22/08/2003', picture: maria },
        { name: 'Diana Freitas', number: '555-555-5555', dob: '26/09/2003', picture: diana }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.people.map((person, index) => (
          <Info key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;