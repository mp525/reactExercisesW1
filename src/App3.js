import React, { Component, useState, useEffect } from "react";
import MembersApp from "./ListDemo";

function Count(props) {
  const [count, setCount] = useState(props.init);

  useEffect(() => {
    localStorage.setItem("count", count);
    //localStorage.getItem("count");
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.num)}>Increment</button>
      <button onClick={() => setCount(count - props.num)}>Decrement</button>
    </div>
  );
}

function Chuck() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            fetch("https://api.chucknorris.io/jokes/random")
              .then((res) => res.json())
              .then((data) => {
                setJoke(data.value);
              });
          }}
        >
          Chuck Norris joke
        </button>
      </div>
      {joke}
    </div>
  );
}

//Dadjokes https://icanhazdadjoke.com/

function DadJokes() {
  const [joke2, setJoke2] = useState("");

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setJoke2(data.joke);
      });
    return { joke2 };
  }, []);

  function getJoke() {
    //const [joke2, setJoke2] = useState("");
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setJoke2(data.joke);
      });
    return { joke2 };
  }

  useEffect(() => {
    //Det der står her bliver kørt når der mountes
    const interval = setInterval(getJoke, 10000);
    return () => {
      //Det der står her køres når der unmountes
      clearInterval(interval);
      alert("Timer stoppet");
    };
  }, []);

  return <div>{joke2}</div>;
}

export default function App3() {
  return (
    <div className="App">
      <Count init={0} num={1} />
      <Chuck />
      <br></br>
      <h3>Dadjoke:</h3>
      <DadJokes />

      <MembersApp />
    </div>
  );
}
