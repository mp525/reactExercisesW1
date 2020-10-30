import logo from './logo.svg';
import './App.css';
import person from "./file2.js";
import {males, females} from "./file2";
import Welcome, {MultiWelcome} from "./file3";

const {firstName, email} = person;
const [x,y,z,q] = [...males, ...females];
const [a,b,c,d,e,f,g] = [...males, firstName, "Helle", ...females, "Tina"];
const personV2 = {...person, friends:[...males, ...females], phone:123456};
//["Peter", "Jan", "Kurt", "Helle", "Janne", "Sarah", "Tina"]

function App() {
  console.log([x, y, z, q]);
  console.log([a,b,c,d,e,f,g]);
  console.log(personV2);
  return (
    <div className="App">
     <h2>Ex2</h2>
  <p>First name : {firstName}, email: {email}</p>
    <h2>Ex3</h2>
    <MultiWelcome />
    </div>
  );
}

export default App;
