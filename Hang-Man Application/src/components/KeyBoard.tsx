import React from 'react'

const Keys = [
    "a", "b", "c", "d", "e", "f" , "g" ,"h","i","j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]

export default function KeyBoard() {
  return (
    <div style={{
        display:"grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
        gap: ".5rem"
    }}>
        <div>t</div>
        <div>t</div>
        <div>t</div>
    </div>

  )
}
