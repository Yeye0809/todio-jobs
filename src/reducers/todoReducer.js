
const todoReducer = (state, action) => {
    
    switch( action.type ){

        case '[TODO] Add Todo':
            return [...state, action.payload];

        case '[TODO] Change To Progress':
            return state.map( todo =>{
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        isUpcoming: !todo.isUpcoming,
                        isInProgress: !todo.isInProgress,
                    }
                }

                return todo
            });

        case '[TODO] Change To Done': 
            return state.map( todo =>{
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        isInProgress: !todo.isInProgress,
                        isDone: !todo.isDone
                    }
                }

                return todo
            });
            
        default:
            return state
    }

}

export default todoReducer
