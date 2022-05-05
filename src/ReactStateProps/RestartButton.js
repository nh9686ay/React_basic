import React, {useState} from 'react'

 export const RestartButton = (props) => {
     const [gameOver, setGameOver] = useState(true)
    // return props .gameOver ? <button>Restart</button> : null;

    return props .gameOver ? <button onClick={()=>setGameOver(false)}>Restart</button> : null;
}

export default RestartButton