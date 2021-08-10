import React from 'react'
import reactDom from 'react-dom'
import { Button} from 'react-bootstrap';


function Task(props){
    return(
        <div className='container' style={myFormStyles}>
            <div className='row my-2'>
                <p style={props.myFormStyles2} className='col-10'>{props.text}</p> 
                <Button  className='col-2' variant="success" id='complete' onClick={()=>{ props.completeTask(props.task)}}>✔</Button>
            </div>
        </div>
      
    )
}
let myFormStyles = {
    width: "500px",
    margin: "0 auto",
}


export default Task