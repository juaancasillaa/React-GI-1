import React, { Component } from 'react';

class Info extends Component {
  render() {
    const { name, number, dob, picture } = this.props.person;
    return (
      <div className="person-info">
        <img src={picture} alt={`${name}`} className="person-picture" />
        <div>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <p>Date of Birth: {dob}</p>
        </div>
      </div>
    );
  }
}

export default Info;