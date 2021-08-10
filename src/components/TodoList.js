import React from 'react'
import reactDom from 'react-dom'
import Task from './Task.js'
import TaskForm from './Form.js'
import {} from 'react-bootstrap'



class TodoList extends React.Component{
    constructor(){
        super()
        this.state={
            todoList:JSON.parse(localStorage.getItem("tasks")) || [],
            task:{
                text:"",
                isComplete:false
            }
        }
    }
    handleUpdateState=(event)=>{
        const newText=event.target.value
        this.setState({task:{text:newText,isComplete:false}})
    }

    addTask=(event)=>{
        let tempArr=this.state.todoList
        const id=this.state.todoList.length+1
        tempArr.push({id,...this.state.task})
        localStorage.setItem("tasks", JSON.stringify(tempArr))

        this.setState({todoList:tempArr})
        document.querySelector('#textInput').value=''
    }


    completeTask=(ee)=>{
        let newNotes = [...this.state.todoList]
        for (let index = 0; index < newNotes.length; index++) {
            if(newNotes[index].id==ee.id)
            {
                if(newNotes[index].isComplete==true)
                newNotes[index].isComplete=false
                else
                newNotes[index].isComplete=true
            }
        }
        localStorage.setItem("tasks", JSON.stringify(newNotes))

         this.setState({todoList:newNotes})
    }

    deleteAllTasks=()=>{
        localStorage.setItem("tasks", JSON.stringify([]))

        this.setState({todoList:[]})

    }

    deleteCompletedTasks=()=>{
        const temp=this.state.todoList.filter((t)=>{
            return t.isComplete==false
        })
        localStorage.setItem("tasks", JSON.stringify(temp))

        this.setState({todoList:temp})
    }

    render(){
        return(
            <div style={myFormStyles}>
                <h1>MY TASKS LIST</h1>
                <TaskForm handleUpdateState={this.handleUpdateState} addTask={this.addTask} deleteAllTasks={this.deleteAllTasks} deleteCompletedTasks={this.deleteCompletedTasks}/>
                <div>
                   {
                       this.state.todoList.map((task,index)=>{
                           console.log(task)
                           if(task.isComplete==false)
                                return(<Task myFormStyles2={myFormStyles3} text={task.text} completeTask={this.completeTask} task={task} key={index}/>)
                           else
                                return(<Task myFormStyles2={myFormStyles2} text={task.text} completeTask={this.completeTask} task={task} key={index}/>)
                       })
                   }
                </div>

            </div>
        )
    }

}
let myFormStyles2 ={
    backgroundColor:'#DCFFD7',
    textDecoration: 'line-through',
    margin: "0",
}
let myFormStyles3 ={
    backgroundColor:'white',
    margin: "0",
}

let myFormStyles = {
    width: "500px",
    height:"300px",
    margin: "0 auto",
    backgroundColor: '#f2f2f2'
}
export default TodoList
