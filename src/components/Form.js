import React from 'react'
import reactDom from 'react-dom'
import { Button, Badge } from 'react-bootstrap';


function TaskForm(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='row'>
                    <input type='text' className='mt-3 col-10' id='textInput' onChange={props.handleUpdateState} />
                    <Button  id="createBtn"  className='mt-3 col-2' onClick={props.addTask}>+</Button>
                </div>

                <div className='row'>
                <Button variant="danger" id="deleteAll" size="lg"  className='mt-3 mx-2 col-2 ' onClick={props.deleteAllTasks}>Delete All</Button>
                <Button variant="danger" id="deleteCompleted"  className='mt-3 col-3' onClick={props.deleteCompletedTasks}>Delete Completed</Button>
                </div>

            </div>

        </div>
    );

}

export default TaskForm