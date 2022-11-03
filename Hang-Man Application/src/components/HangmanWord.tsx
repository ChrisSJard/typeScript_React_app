import React from 'react'

export default function HangmanWord() {
    const word = "test";
    const guessLetters = ["t", "e"];
  return (
    <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
    {word.split("").map( (letter, index) =>(
        <span style={{borderBottom: ".1em solid black"}} key={index}>
            <span style={{visibility: guessLetters.includes(letter) ? "visible" : "hidden"}}>
                {letter}
            </span>
        
        </span>

    ))}
    </div>
  )
}
