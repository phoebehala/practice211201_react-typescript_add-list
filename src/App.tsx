import React, {useState} from 'react';

import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState{

  //people: {}[]  >>> people is an array
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  // people is an array
  // const [people, setPeople] = useState<IState["people"]>([ ])
  const [people, setPeople] = useState<IState["people"]>([
      {
        name: "LeBron James",
        age: 35,
        url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        note: "Allegeric to staying on the same team"
      },
      {
        name: "Kobe Bryant",
        age: 42,
        url: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",

      }
    ]
  )



  return (
    <div className="App">
      <h1>People Invite to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
