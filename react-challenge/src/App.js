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
import beni from './images/beni.jpg';
import tony from './images/tony.jpg';
import tra from './images/tra.jpg';
import vyncent from './images/vyncent.jpg';
import sulayman from './images/sulayman.jpg';
import erica from './images/erica.jpg';
import ly from './images/ly.jpg';
import richard from './images/richard.jpg';
import zariyah from './images/zariyah.jpg';
import joshuab from './images/joshuab.jpg';
import joshua from './images/joshua.jpg';
import julius from './images/julius.jpg';
import kayla from './images/kayla.jpg';
import lourdes from './images/lourdes.jpg';
import jemima from './images/jemima.jpg';
import ricardo from './images/ricardo.jpg';
import david from './images/david.jpg';
import bryan from './images/bryan.jpg';
import jorge from './images/jorge.jpg';
import carlos from './images/carlos.jpg';
import sera from './images/sera.jpg';
import jordan from './images/jordan.jpg';
import birhanu from './images/birhanu.jpg';
import katya from './images/katya.jpg';
import makayla from './images/makayla.jpg';
import edwin from './images/edwin.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
      { name: 'Juan Casilla', number: '123-456-7890', dob: '16/09/2004', picture: juan },
      { name: 'Nina Torrealba', number: '987-654-3210', dob: '22/08/2003', picture: nina },
      { name: 'Maria F. Torrealba', number: '444-444-4444', dob: '22/08/2003', picture: maria },
      { name: 'Diana Freitas', number: '555-555-5555', dob: '26/09/2003', picture: diana },
      { name: 'Bryan Martinez', number: '111-222-3333', dob: '08/03/1999', picture: bryan },
      { name: 'Joshua Drakeford', number: '333-444-5555', dob: '04/11/1999', picture: joshua },
      { name: 'Julius Sasa', number: '444-555-6666', dob: '15/12/2000', picture: julius },
      { name: 'Kayla Lorenzo', number: '555-666-7777', dob: '29/03/1999', picture: kayla },
      { name: 'Ma de Lourdes Villa', number: '666-777-8888', dob: '08/05/2001', picture: lourdes },
      { name: 'Jemima Shakya', number: '888-999-0000', dob: '21/01/1997', picture: jemima },
      { name: 'Zariyah Tate', number: '999-000-1111', dob: '13/02/2000', picture: zariyah },
      { name: 'Jordan Sturdivant', number: '000-111-2222', dob: '07/03/2003', picture: jordan },
      { name: 'David Flores Torres', number: '111-222-3334', dob: '19/04/2002', picture: david },
      { name: 'Ricardo Feliz', number: '222-333-4445', dob: '24/05/1998', picture: ricardo },
      { name: 'Carlos Peralta Rayon', number: '333-444-5556', dob: '18/06/2001', picture: carlos },
      { name: 'Sera Senwosret-Ward', number: '444-555-6667', dob: '30/07/1999', picture: sera },
      { name: 'Sulayman Komma', number: '555-666-7778', dob: '17/08/2000', picture: sulayman },
      { name: 'Vyncent Harris', number: '666-777-8889', dob: '09/09/1997', picture: vyncent },
      { name: 'Tony Yang', number: '777-888-9990', dob: '26/10/1998', picture: tony },
      { name: 'Joshua Brito-Infante', number: '888-999-0001', dob: '05/11/2000', picture: joshuab },
      { name: 'Birhanu Kramer', number: '000-111-2223', dob: '14/12/1999', picture: birhanu },
      { name: 'Tremon Armstrong', number: '888-999-0001', dob: '05/11/2000', picture: tra },
      { name: 'Richard', number: '467-213-6796', dob: '09/4/2002', picture: richard},
      { name: 'Beni Kiambote', number: '344-639-3478', dob: '07/23/1999', picture: beni},
      { name: 'Ly Y', number: '245-245-2354', dob: '09/4/2002', picture: ly},
      { name: 'Jorge Esperaza', number: '355-328-5389', dob: '09/4/2002', picture: jorge},
      { name: 'Erica Moua', number: '785-134-9700', dob: '09/4/2002', picture: erica},
      { name: 'Katya Martinez', number: '325-578-4833', dob: '09/4/2002', picture: katya},
      { name: 'Edwin Luna', number: '789-346-7597', dob: '09/4/2002', picture: edwin},
      { name: 'Makayla Dennis', number: '585-790-123', dob: '09/4/2002', picture: makayla}
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