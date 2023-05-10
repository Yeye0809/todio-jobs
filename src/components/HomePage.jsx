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

                    <div className="header-columns container d-flex align-items-center justify-content-between ">
                        <h3 className="text-center align-self-center ">UpcomingColumn</h3>
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

                <div className='col-4 bg-light'>
                    <div className="header-columns">
                        <h3 className="text-center align-self-center">InProgressColumn</h3>
                    </div>

                    {
                        todosisInProgress.map( todo =>(
                            <InProgressColumn 
                                 key={todo.id} {...todo}/>
                        ))  
                    }
                     
                </div>

                <div className='col-4 bg-light'>
                    <div className="header-columns">
                        <h3 className="text-center align-self-center">DoneColumn</h3>
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
