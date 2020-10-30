import React, { Component, useState, useEffect } from "react";
import DateShow, { NamesList } from "./classex";
import "./App.css";

export default function App2() {
  const [myValue, setMyValue] = useState("");
  const [myTable, setMyTable] = useState();

  function change(event) {
    setMyValue(event.target.value);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const tableMap = data.map((album) => (
          <tr key={album.id}>
            <td>{album.title}</td>
          </tr>
        ));
        setMyTable(tableMap);
      });
  });

  const names = ["Hans", "Grete", "Martin"];
  return (
    <div className="App">
      <h3>App2</h3>
      <h3>Class exercise dag 2:</h3>
      <DateShow />
      <br></br>
      <input type="text" value={myValue} onChange={change} />
      {myValue}
      <NamesList names={names} />
      <table>
        <tbody>{myTable}</tbody>
      </table>
    </div>
  );
}
