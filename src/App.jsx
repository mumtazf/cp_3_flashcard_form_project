import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FrontCard from "./components/FrontCard.jsx"
import BackCard  from './components/BackCard'
import FormElement from './components/FormElement.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [flippedCard, setCardState] = useState(false);
  //const[inputValidate,setInputValidate] = useState(false);

  const flipCardFunction = () => {
   
      setCardState(!flippedCard);
   
  }


  const updateCount = () => {
    if(count < 9)
      setCount(count+1);
    
      //changes back to questions so that users cannot see the answer when they move to the next card
    if(flippedCard)
      setCardState(!flippedCard);
    
  }

  const decreaseCount = () => {
    if(count>=1)
      setCount(count-1);

      //changes back to questions so that users cannot see the answer when they move to the next card
    if(flippedCard)
      setCardState(!flippedCard);
  }

  const [cardColor, setCardColor] = useState("blue");

// const setCardColor = (cardColor) => {
//     setCardColor(cardColor);
//   };

const colorHandler = (newColor)  => {
    setCardColor(newColor);
  }


// const inputValidator = (validate) => {
//   setInputValidate(validate);
//   console.log("in put validator");
//   console.log(validate);
// }

const containerClass = `cardDisplay ${cardColor}`;

  return (
    <div className="App">
      <div class = "info">
          <h1>Probability</h1>
          <p>What's the probability that you can get all questions right? Who knows? 🤷‍♀️</p>
          <h2>Number of cards: 10</h2>
          <h3>Difficulty levels: 🟢 (green) = Easy, 🟡 (yellow) = Medium, 🔴 (red) = Hard</h3>
          <div className = "card-container">
            <div className = {containerClass}  onClick = {flipCardFunction} >  
              {flippedCard? <BackCard index = {count} onColorChange = {colorHandler}/> : <FrontCard index = {count} onColorChange = {colorHandler}/>}    
            </div>
          </div>
          <div> 
            <FormElement index = {count}/> 
          </div>
          <div>
          <button onClick = {decreaseCount}>⬅️</button>
          <button onClick = {updateCount}>➡️</button>
          </div>

      </div>
    </div>
  )
}

export default App
