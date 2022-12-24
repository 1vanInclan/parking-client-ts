import React, { useEffect, useState } from 'react';
import './App.css';
import { List } from './components/List';


interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const initialState =  [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: 'Dapelu hace de moderador'
  },
  {
    nick: 'ivan',
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=ivan"
  }
]

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
  
    setSubs(initialState)

  }, [])
  

  return (
    <div className="App">
      <h1>Subs</h1>
      <List subs={subs} />
    </div>
  );
}

export default App;
