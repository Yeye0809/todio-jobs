
const DeleteTodo = ({removeTodo, id}) => {
  return (
    <button 
        className="btn-close" 
        aria-label="Close"
        onClick={ ()=> removeTodo(id) }
    > </button>
  )
}

export default DeleteTodo
