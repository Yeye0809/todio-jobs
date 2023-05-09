import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';
import DeleteTodo from './DeleteTodo';

const DoneColumn = ({title, desc, date, id}) => {

  const { handleRemoveTodo } = useContext(TodoContext);
  
  return (
    <>
        <div className="card mt-2">
          <div className="container row">
            <TodoCard title={title} desc={desc} date={date}/>

            <div className="col-2">
                <DeleteTodo removeTodo={ handleRemoveTodo } id={ id }/>
            </div> 
          </div>

        </div> 
    </>
  )
}

export default DoneColumn
