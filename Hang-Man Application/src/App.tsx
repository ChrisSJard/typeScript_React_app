import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord";
import KeyBoard from "./components/KeyBoard";

function getWord(){
  return words[Math.floor(Math.random() * words. length)]
}

function App() {
  //Set up state of words
  const [wordToGuess, SetWords] = useState( getWord   // generate a randrom number between 0 - lenght of word array, then get integer rounded down and get word[ random number]
  );

  const [guessLetters, setGuessLetters] = useState<string[]>([])

  const incorrectLetters = guessLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >=6;
  const isWinner = wordToGuess.split("").every(letter => guessLetters.includes(letter));

  const addGuessedLetter = useCallback( (letter: string) => {
    if(guessLetters.includes(letter) || isLoser || isWinner) return 
    setGuessLetters(currentLetter => [...currentLetter, letter])
  }, [guessLetters, isWinner, isLoser])

  // function addGuessedLetter(letter:string){
  //   if(guessLetters.includes(letter)) return 
  //   setGuessLetters(currentLetter => [...currentLetter, letter])
  // }

  useEffect(()=>{
    const handler = (e:KeyboardEvent) =>{
      const key = e.key
      if (!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addGuessedLetter(key)

    }
    document.addEventListener("keypress", handler) 
    return () =>{
      document.removeEventListener("keypress", handler)
    }
  },[])

  useEffect( () =>{
    const handler = (e:KeyboardEvent) =>{
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessLetters([])

      SetWords(getWord())
      
    }
    document.addEventListener("keypress", handler) 
    return () =>{
      document.removeEventListener("keypress", handler)
    }
  }, [])

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
      <div style={{fontSize: "2rem", textAlign: "center"}}>
        {isWinner && "Winner! - refresh to try again"}
        {isLoser && "You have lost :["}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessLetters={guessLetters} wordToGuess = {wordToGuess}/> 
      <div style={{alignSelf: "stretch"}}>
        <KeyBoard activeLetter = {guessLetters.filter( letter =>{
            wordToGuess.includes(letter)
          })
        }
          inactiveLetters = {incorrectLetters}
          addGuessedLetter = {addGuessedLetter}

        /> 
      </div>
    </div>
  )
}

export default App
