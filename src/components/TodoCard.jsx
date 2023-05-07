
const TodoCard = ({title, desc, date}) => {
  return (
    <>
       <div className="card-body col-9" >
            <h5 className='card-title'>{ title }</h5>
            <hr />
            <p className="card-text">{ desc }</p>
            {/* <blockquote className="blockquote text-end">
                <footer className="blockquote-footer">{ JSON.stringify(date, null) }</footer>
            </blockquote> */}
        </div>
    </>
  )
}

export default TodoCard
