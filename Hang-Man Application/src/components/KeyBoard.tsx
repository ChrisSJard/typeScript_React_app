import styles from "./KeyBoard.module.css";

const Keys = [
    "a", "b", "c", "d", "e", "f" , "g" ,"h","i","j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]

type KeyBoardProps = {
    disabled?: boolean
    activeLetter:string[] 
    inactiveLetters: string[] 
    addGuessedLetter: (letter:string) => void
}

export default function KeyBoard({disabled = false, activeLetter, inactiveLetters, addGuessedLetter}:KeyBoardProps) {
  return (
    <div style={{
        display:"grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
    }}>
    {Keys.map(key => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return <button 
                    onClick ={()=> addGuessedLetter(key)} 
                    className={` ${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
                    disabled = {isInactive || isActive || disabled}
                    key={key}
                >{key}
                </button>
    })}
    </div>

  )
}
