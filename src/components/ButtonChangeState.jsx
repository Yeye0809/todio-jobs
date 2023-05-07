
const ButtonChangeState = ({onChangeState, id}) => {
  return (
    <button 
        className="btn btn-sm btn-primary"
        onClick={ ()=> onChangeState(id) }
    >
        ➡️
    </button>
  )
}

export default ButtonChangeState
