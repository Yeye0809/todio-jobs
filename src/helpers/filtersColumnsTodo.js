

const filtersColumnsTodo = (todos) => {
    
    const todosUpcoming = todos.filter( todo => todo.isUpcoming === true );
    const todosisInProgress = todos.filter( todo => todo.isInProgress === true );
    const todosIsDone = todos.filter( todo => todo.isDone === true );

  return {
    todosUpcoming,
    todosisInProgress,
    todosIsDone
  }
}

export default filtersColumnsTodo

