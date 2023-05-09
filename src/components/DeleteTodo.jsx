
const DeleteTodo = ({removeTodo, id}) => {
  return (
    <button 
        className="btn btn-sm btn-danger"
        onClick={ ()=> removeTodo(id) }
    >
        X
    </button>
  )
}

export default DeleteTodo
