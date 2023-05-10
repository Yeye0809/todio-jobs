import { useContext } from 'react';
import DeleteTodo from './DeleteTodo';
import { TodoContext } from '../context/TodoContext';

const TodoCard = ({title, desc, date, id, isUpcoming, isInProgress, isDone, onChangeState, removeTodo }) => {

  return (
    <div className={`card mt-2 p-1 bg-${( isUpcoming && "warning") || (isInProgress && "info") || (isDone && "success") } bg-opacity-70`}>
        <div className="d-flex justify-content-around ">
   
            <div className="card-body "  onDoubleClick={ ()=> onChangeState(id) } >
                <h5 className='card-title'> { title.toUpperCase() } </h5>

                <hr />
                <blockquote className="blockquote">
                   <p className="card-text text-white">{ desc }</p>
                    <footer className="blockquote-footer text-white mt-2">{ date }</footer>
                </blockquote>
              </div>
        
              <div>
                <DeleteTodo removeTodo={ removeTodo } id={ id }/>
              </div>            

        </div>
      </div>
  
  )
}

export default TodoCard
