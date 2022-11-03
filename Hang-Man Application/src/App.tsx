import { useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord";
import KeyBoard from "./components/KeyBoard";


function App() {
  //Set up state of words
  const [wordToGuess, SetWords] = useState(() =>{
    return words[Math.floor(Math.random() * words. length)]   // generate a randrom number between 0 - lenght of word array, then get integer rounded down and get word[ random number]
  });

  const [guessLetters, setGuessLetters] = useState<string[]>([])

  return (
    <div
      style = {{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}
    >
      <div style={{fontSize: "2rem", textAlign: "center"}}>Lose | Win</div>
      <HangmanDrawing />
      <HangmanWord /> 
      <KeyBoard /> 
    </div>
  )
}

export default App
