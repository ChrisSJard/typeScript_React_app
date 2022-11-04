const Head = (
        <div style={{
            width:"50px",
            height: "50px", 
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "10px",
            right: "-30px"
        }}>
        </div>
)

const Neck = (
    <div>
        <div style={{
            height:"100px", 
            width: "10px", 
            background: "black", 
            position:"absolute", 
            top:"80px", 
            right: 0}}></div>
    </div>
)

const RightArm = (
    <div>
        <div style={{
            height:"10px", 
            width: "100px", 
            background: "black", 
            position:"absolute", 
            top:"120px", 
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom"
        }}
            ></div>
    </div>
)

const LeftArm = (
    <div>
        <div style={{
            height:"10px", 
            width: "100px", 
            background: "black", 
            position:"absolute", 
            top:"120px", 
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom"
        }}
            ></div>
    </div>
)

const RightLeg = (
    <div>
        <div style={{
            height:"10px", 
            width: "60px", 
            background: "black", 
            position:"absolute", 
            top:"170px", 
            right: "-60px",
            rotate: "30deg",
            transformOrigin: "left top"
        }}
            ></div>
    </div>
)

const LeftLeg = (
    <div>
        <div style={{
            height:"10px", 
            width: "60px", 
            background: "black", 
            position:"absolute", 
            top:"170px", 
            right: "10px",
            rotate: "-30deg",
            transformOrigin: "right top"
        }}
            ></div>
    </div>
)

const HangmanParts = [Head, Neck, RightArm, RightLeg, LeftArm, LeftLeg];

type HangmanDrawingProps = {
    numberOfGuesses:number
}

export default function hangmanDrawing({numberOfGuesses}: HangmanDrawingProps){
    return (
        <div style={{position: "relative"}}>
            {HangmanParts.slice(0, numberOfGuesses)}
            <div style={{height:"20px", width: "5px", background: "black", position:"absolute", top:0, right:0}}></div> 
            <div style={{height:"5px", width: "125px", background:"black", marginLeft:"120px"}}></div>
            <div style={{height:"400px", width: "5px", background: "black", marginLeft:"120px"}}></div> 
            <div style={{height:"10px", width: "250px", background:"black"}}></div>
        </div>
    )
}