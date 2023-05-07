import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';
import ButtonChangeState from './ButtonChangeState';

const InProgressColumn = ({title, desc, date, id}) => {

  const { handleChangeToDone } = useContext(TodoContext);

  return (
    <>
      <div className="card mt-2">
        <div className="container row">
            
            <TodoCard title={title} desc={desc} date={date}/>

            <div className="col-2 align-self-center">
               <ButtonChangeState onChangeState={ handleChangeToDone } id={ id }/>
            </div>
        </div>
      </div>
    </>
  )
}

export default InProgressColumn
