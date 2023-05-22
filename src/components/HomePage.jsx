import { useContext, useState } from "react";
import DoneColumn from "./DoneColumn";
import InProgressColumn from "./InProgressColumn";
import UpcomingColumn from "./UpcomingColumn";
import AddTodo from "./AddTodo";
import { TodoContext } from "../context/TodoContext";
import filtersColumnsTodo from "../helpers/filtersColumnsTodo";





const HomePage = () => {

    const [ showForm, setShowForm ] = useState(false);

    const { todos } = useContext(TodoContext);

    const { todosUpcoming, todosisInProgress, todosIsDone } = filtersColumnsTodo(todos)

  return (
    <>
        <div className="container mt-2">
            <div className="row">
                <div className="col-4 bg-light">

                    <div className="row">
                        <div className="col-10">
                             <h3 className="text-center align-self-center ">Upcoming</h3>
                        </div>
                        <div className="col-2 p-0 d-flex align-items-center justify-content-center">    
                            <button 
                                className="btn btn-outline-primary w-75 h-75 p-0"
                                onClick={()=>setShowForm(!showForm )}
                            > + </button>
                        </div>
                    </div>
                    <hr />
                    
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

                <div className='col-4 bg-light'>
                    <div className="header-columns">
                        <h3 className="text-center align-self-center">InProgress</h3>
                    </div>

                    <hr />

                    {
                        todosisInProgress.map( todo =>(
                            <InProgressColumn 
                                 key={todo.id} {...todo}/>
                        ))  
                    }
                     
                </div>

                <div className='col-4 bg-light'>
                    <div className="header-columns">
                        <h3 className="text-center align-self-center">Done</h3>
                    </div>

                    <hr />

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
