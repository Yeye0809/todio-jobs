import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';


const InProgressColumn = ({title, desc, date, id, isInProgress}) => {

  const { handleChangeToDone, handleRemoveTodo } = useContext(TodoContext);

  return (
    <>
      <TodoCard 
        title={title} 
        desc={desc} 
        date={date}
        id={id}
        isInProgress={isInProgress}
        onChangeState={handleChangeToDone}
        removeTodo={ handleRemoveTodo }
      />
    </>
  )
}

export default InProgressColumn
