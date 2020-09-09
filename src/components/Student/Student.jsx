import React from 'react'
import Scores from '../Scores/Scores'


const Student = (props) => {
    return (
        <>
        {props.students.map((scores, idx)=>
        <Students 
        key={idx}
        students={students}
        />

        <Scores 
        scores={scores}
        />
        )}
        
        </>
    )
}

export default Student
