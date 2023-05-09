import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';
import DeleteTodo from './DeleteTodo';

const UpcomingColumn = ({title, desc, date, id}) => { 

  const { handleChangeToProgress, handleRemoveTodo } = useContext(TodoContext);
  
  return (
    <>
      <div className="card mt-2">
        <div className="container row">
           
            <TodoCard 
              title={title} 
              desc={desc} 
              date={date}
              onChangeState={handleChangeToProgress}
              id={id}
            />

             <div className="col-2">
               <DeleteTodo removeTodo={ handleRemoveTodo } id={ id }/>
            </div>

        </div>
      </div>
    </>
  )
}

export default UpcomingColumn
