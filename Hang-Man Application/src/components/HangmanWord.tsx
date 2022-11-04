type HangmanWordProps = {
    guessLetters:string[]
    wordToGuess:string
    reveal?: boolean
}

export default function HangmanWord({reveal=false, guessLetters, wordToGuess}:HangmanWordProps) {
    // const word = "test";
    // const guessLetters = ["t", "e"];
  return (
    <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
    {wordToGuess.split("").map( (letter, index) =>(
        <span style={{borderBottom: ".1em solid black"}} key={index}>
            <span 
                style={{
                visibility: guessLetters.includes(letter) || reveal
                ? "visible" : "hidden",
                color: !guessLetters.includes(letter) && reveal ? "red" : "black",
            }}>
                {letter}
            </span>
        </span>
    ))}
    </div>
  )
}
