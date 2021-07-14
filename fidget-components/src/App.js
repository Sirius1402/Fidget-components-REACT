import './App.css';
import Button from './components/Button';
import {  useState } from 'react';





function App() {
    
  const buttonNames = [{"id": 1,
                        "status": true,
                        "message": "Click me!"},

                        {"id": 2,
                        "status": false,
                        "message": "Loser"},

                        {"id": 3,
                        "status": false,
                        "message": "Loser"},

                        {"id": 4,
                        "status": false,
                        "message": "Loser"},

                        {"id": 5,
                         "status": false,
                         "message": "Loser"}]
  const [buttons, setButtons] = useState([...buttonNames]) 
  const [counter, setCounter] = useState(0)
  
 const changeNames=(id, status, message)=>{
    
      let copyMessage = [...buttons]
      for(let i=0; i<copyMessage.length; i++){
        if(copyMessage[i][id]===1){
          copyMessage[i][status] = false
          copyMessage[i][id] = (Math.floor(Math.random()*4)+2)
          copyMessage[i][message] = "Loser"
        }else if(copyMessage[i][id] === (Math.floor(Math.random()*4)+2)){
            copyMessage[i][id] = 1
            copyMessage[i][message] = "Click me!"
            copyMessage[i][status] = true
          }
      }
      setButtons(copyMessage)
  }
 
  
 

  return (
    <div className="container">
      
       {buttons.map(button=>
       <div key={button.id}>
       <Button 
       message={button.message}
       id={button.id}
       status={button.status}
       changeNames={changeNames}/>
      </div>)}
      <div className="counter">
        <button className="button" onClick={()=>setCounter(counter+1)}>+</button>
        <div>{counter}</div>
        <button className="button" onClick={()=>setCounter(counter-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
