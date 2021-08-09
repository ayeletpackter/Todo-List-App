import React from 'react'
import reactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';


function Task(props){
    return(
        <div className='container' style={myFormStyles}>
  <div className='row'>
              <p style={props.myFormStyles2} className='col-10'>{props.text}</p> 
                <Button  className='col-2' variant="success" id='complete' onClick={()=>{ props.completeTask(props.task)}}>V</Button>
        </div>
        </div>
      
    )
}
let myFormStyles = {
    width: "500px",
    margin: "0 auto",
}


export default Task