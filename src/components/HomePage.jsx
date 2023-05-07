import { useContext, useState } from "react";
import DoneColumn from "./DoneColumn";
import InProgressColumn from "./InProgressColumn";
import UpcomingColumn from "./UpcomingColumn";
import AddTodo from "./AddTodo";


import '../styles.css';
import { TodoContext } from "../context/TodoContext";



const HomePage = () => {

    const [ showForm, setShowForm ] = useState(false);

    const {todos} = useContext(TodoContext);

    const todosUpcoming = todos.filter( todo => todo.isUpcoming === true );
    const todosisInProgress = todos.filter( todo => todo.isInProgress === true );
    const todosIsDone = todos.filter( todo => todo.isDone === true );

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4">

                    <div className="header-columns container d-flex align-items-center justify-content-between ">
                        <span className="align-self-center">UpcomingColumn</span>
                        <button 
                            className="btn btn-outline-primary btn-sm"
                            onClick={()=>setShowForm(!showForm )}
                        >
                            +
                        </button>
                    </div>
                    
                    {
                        showForm && <AddTodo />
                    }
                    
                    {
                       
                       todosUpcoming.map( todo =>(
                            <UpcomingColumn 
                                key={todo.id} {...todo}/>
                        ))
                    }
                </div>

                <div className='col-4'>
                    <div className="header-columns">
                        <span className="align-self-center">InProgressColumn</span>
                    </div>

                    {
                        todosisInProgress.map( todo =>(
                            <InProgressColumn 
                                 key={todo.id} {...todo}/>
                        ))  
                    }
                     
                </div>

                <div className='col-4'>
                    <div className="header-columns">
                        <span className="align-self-center">DoneColumn</span>
                    </div>

                    {
                        todosIsDone.map( todo => (
                            <DoneColumn 
                                key={ todo.id} {...todo}/>
                        ))
                    }
                    
                </div> 
                
            </div> 
        </div>
    </>
  )
}

export default HomePage
