import React, { Component } from 'react';
import {persons} from "./file2";
import PropTypes from 'prop-types';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props){
      console.log(persons);
      console.log(props);
     return <li>Welcome {props.person.firstName} {props.person.lastName} {props.person.email}</li>;
  }
  
  function MultiWelcome() {
     // const {p1,p2,p3} = persons;
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]}  />
        <WelcomePerson person={persons[1]}  />
        <WelcomePerson person={persons[2]}  />
        <br></br>
        {persons.map((person)=><WelcomePerson key={person.firstName} person={person}/>)}
      </div>
    );
  }

  export default Welcome;
  export {MultiWelcome};