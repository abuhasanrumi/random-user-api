import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <User></User>
    </div>
  );
}

function User(){
  const[user, setUser] = useState([])
  useEffect( () => {
    fetch('https://randomuser.me/api/')
    .then (res => res.json())
    .then (data => setUser(data.results))
  }, [])
  return(
    <div>
      {
        user.map(person => 
        <RandomUser 
          picture={person.picture.large}
          fname={person.name.first}
          lname={person.name.last}
          email={person.email}
          >

        </RandomUser>)
      }

    </div>
  )
}

function RandomUser(props){
  const personStyle = {
    borderRadius: "50%",
    border: '2px solid black'
  }
  return(
  <div>
    <img style={personStyle} src={props.picture} alt=""/>
    <h1>Name: {props.fname} {props.lname}</h1>
    <h4>Email: {props.email}</h4>
  </div>
  )
}

export default App;
