
import useTodo from '../hooks/useTodo';
import { TodoContext } from './TodoContext';


const TodoProvider = ({children}) => {

  const {todos, handleNewTodo, handleChangeToProgress, handleChangeToDone } = useTodo();  

  const value = {
    todos,
    handleNewTodo,
    handleChangeToProgress,
    handleChangeToDone
  }

  return (
    <TodoContext.Provider value={value}>
      { children }
    </TodoContext.Provider>
  )
}

export default TodoProvider
