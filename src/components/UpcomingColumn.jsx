import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoCard from './TodoCard';
import ButtonChangeState from './ButtonChangeState';

const UpcomingColumn = ({title, desc, date, id}) => { 

  const { handleChangeToProgress } = useContext(TodoContext);
  
  return (
    <>
      <div className="card mt-2">
        <div className="container row">
           
            <TodoCard title={title} desc={desc} date={date}/>

            <div className="col-2 align-self-center">
               <ButtonChangeState onChangeState={ handleChangeToProgress } id={ id }/>
            </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingColumn
