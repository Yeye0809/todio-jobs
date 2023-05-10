import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {

    const [ inputValue, setInputValue ] = useState({
        title: '',
        desc: '',
    });

    const { handleNewTodo } = useContext(TodoContext);

    const { title, desc } = inputValue;

    const onInputChange = ({target}) =>{

        const { name, value } = target;
        
        setInputValue({
            ...inputValue,
            [name]: value
        })
       
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        handleNewTodo(inputValue);

        setInputValue({
            title: '',
            desc: '',
        });
        
    }

  return (
    <form 
        className="mb-3"
        onSubmit={ onSubmit } 
        autoComplete="off"
    >
        <input 
            type="text"
            className="form-control"
            placeholder="Title..."
            name="title"
            value={ title }
            onChange={ onInputChange }
        />

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="Add another To Do"
            name="desc"
            value={ desc }
            onChange={ onInputChange }
        />

        <button 
            type="submit"
            className="btn btn-sm btn-primary mt-2"
        >
            Add
        </button>
    </form>
  ) 
}

export default AddTodo
