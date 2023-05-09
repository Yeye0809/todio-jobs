
import useTodo from '../hooks/useTodo';
import { TodoContext } from './TodoContext';


const TodoProvider = ({children}) => {

  const {todos, handleNewTodo, handleChangeToProgress, handleChangeToDone, handleRemoveTodo } = useTodo();  

  const value = {
    todos,
    handleNewTodo,
    handleChangeToProgress,
    handleChangeToDone,
    handleRemoveTodo
  }

  return (
    <TodoContext.Provider value={value}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoProvider
