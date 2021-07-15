import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import CounterContainer from './components/CounterContainer';






function App() {

  const buttonNames = [{
    "id": 1,
    "message": "Click me!"
  },

  {
    "id": 2,
    "message": "Loser"
  },

  {
    "id": 3,
    "message": "Loser"
  },

  {
    "id": 4,
    "message": "Loser"
  },

  {
    "id": 5,
    "message": "Loser"
  }]

  const [buttons, setButtons] = useState([...buttonNames])


  const changeNames = () => {

    let randomId = Math.floor(Math.random() * 4) + 2
    let copyMessage = [...buttons]
    for (let i = 0; i < copyMessage.length; i++) {
      if (copyMessage[i].id === 1) {
        copyMessage[i].id = randomId
        copyMessage[i].message = "Loser"
      } else if (copyMessage[i].id === randomId) {
        copyMessage[i].id = 1
        copyMessage[i].message = "Click me!"
      }
    }
    setButtons(copyMessage)
  }



  return (
    <div className="App">
      <div className="container">
        {buttons.map(button =>
          <div key={button.id}>
            <Button
              message={button.message}
              id={button.id}
              changeNames={changeNames} />
          </div>)}
      </div>

      <CounterContainer />

    </div>
  );
}

export default App;
