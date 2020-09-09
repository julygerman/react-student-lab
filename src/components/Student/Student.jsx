import React from 'react'
import Scores from '../Scores/Scores'


const Student = (props) => {
    return (
        <>
       <h3>{props.name}</h3>
        <h2>{props.bio}</h2>
            <ul>
            {props.scores.map((scores, idx)=>
                <Scores 
                scores={scores.score}
                date={scores.date}
                />
            )}
    
            </ul>
        
        </>
    )
}

export default Student
