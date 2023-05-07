import TodoCard from './TodoCard';

const DoneColumn = ({title, desc, date}) => {
  
  return (
    <>
        <div className="card mt-2">
            
          <TodoCard title={title} desc={desc} date={date}/>

        </div> 
    </>
  )
}

export default DoneColumn
