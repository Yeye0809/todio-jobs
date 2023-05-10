import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';


const DoneColumn = ({title, desc, date, id, isDone}) => {

  const { handleRemoveTodo } = useContext(TodoContext);
  
  return (
    <>
      <TodoCard
        title={title} 
        desc={desc} 
        date={date}
        id={id}
        isDone={isDone}
        removeTodo={ handleRemoveTodo }
      />
    </>
  )
}

export default DoneColumn
