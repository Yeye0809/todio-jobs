import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';


const UpcomingColumn = ({title, desc, date, id, isUpcoming}) => { 

  const { handleChangeToProgress, handleRemoveTodo } = useContext(TodoContext);
  
  return (
    <>
      <TodoCard 
        title={title} 
        desc={desc} 
        date={date}
        id={id}
        isUpcoming={isUpcoming}
        onChangeState={handleChangeToProgress}
        removeTodo={ handleRemoveTodo }
      />
    </>
  )
}

export default UpcomingColumn
