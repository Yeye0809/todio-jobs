import { useEffect, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     title: 'Yeye',
    //     desc: 'recolectar la piedra del poder',
    //     date: new Date(),
    //     isUpcoming: true,
    //     isInProgress: false,
    //     isDone: false
    // },
   
]

const init = () => {

    const oldState = localStorage.getItem('todos');

    return JSON.parse(oldState);

}


const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init );

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todoValues)=>{

        const {desc, title} = todoValues;

        const newDate = new Date();
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();        
        
        const newTodo = {
           id: new Date().getTime(),
           desc,
           title,
           date: `${day}-${month}-${year}` ,
           isUpcoming: true,
           isInProgress: false,
           isDone: false
        }
        
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }

        dispatch(action);

        console.log(newTodo.date);
    }


    const handleChangeToProgress = (id) => {
        dispatch({
            type: '[TODO] Change To Progress',
            payload: id
        })
    }

    const handleChangeToDone = (id) => {
        dispatch({
            type: '[TODO] Change To Done',
            payload: id
        })
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }


    return {
        todos,

        handleNewTodo,
        handleChangeToProgress,
        handleChangeToDone,
        handleRemoveTodo

    }
}

export default useTodo
