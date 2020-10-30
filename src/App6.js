import React, { Component, useState } from "react";
import "./App.css";

const redborder = {
  border: "2px solid red",
  width: "400px",
  margin: "5px",
};

const parentborder = {
  border: "2px solid green",
  width: "414px",
};

const blueborder = {
  border: "2px solid blue",
  width: "400px",
  margin: "5px",
};

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState({name:""});

  const addPerson = (name) => {
    //const name = event.target.value;
    const person = { name: name, id: count };
    setPersons([...persons, person]);
    setCount(count + 1);
  };

  const deletePerson = (event) => {
    console.log("delete");
    const target = event.target;
    const id = Number(target.id);
    console.log(id);
    const oneLess = persons.filter((person) => person.id !== id);
    console.log(oneLess);
    setPersons(oneLess);
  };

  const updatePerson = (person) => {
    console.log("update")
    console.log(person)
    //const target = event.target;
    const id = Number(person.id);
    persons.forEach(p => {
      if(p.id===id){
        p.name = person.name;
      }
    });
    setPersons([...persons])
  };

  const editPerson = (event) => {
    console.log("edit");
    const target = event.target;
    const id = Number(target.id);
    console.log(id);
    setPerson({ id: id });
  };

  return (
    <div style={parentborder}>
      <h3>Total Persons : {count}</h3>
      <ListPersons
        persons={persons}
        deletePerson={deletePerson}
        editPerson={editPerson}
      />
      <InputPerson addPerson={addPerson} person={person} updatePerson={updatePerson} />
    </div>
  );
};

const InputPerson = (props) => {
  const [name, setName] = useState(props.person.name);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.person.id)
    if (props.person.id) {
      props.updatePerson({name:name, id:props.person.id});
    }else{
    props.addPerson(name);
    }
  }

  return (
    <div style={blueborder}>
      <h4>New Person</h4>
      <form>
        {props.person.id}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

const ListPersons = (props) => {
  return (
    <div style={redborder}>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {props.persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>
                <a href="#" id={person.id} onClick={props.deletePerson}>
                  delete
                </a>
                /{" "}
                <a href="#" id={person.id} onClick={props.editPerson}>
                  edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App6() {
  return (
    <div className="App">
      <h2>Ex3 part 2</h2>
      <h3>State Lift Demo</h3>

      <Persons />
    </div>
  );
}
export default App6;
