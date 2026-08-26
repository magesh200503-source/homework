let todos = [];
const todoKeys = {
    id: "id",
    text: "text",
    isCompleted: "isCompleted",
};
const getNewTodoId = (todos) => {
    return (
        todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1
    );
};

const errTodoNotFound = (todoId) => {
    console.error(`Todo with id ${todoId} not found`);
};

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.isCompleted]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (!todo) {
        errTodoNotFound(todoId);
        return null;
    }
    todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
    console.log(todo);
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        errTodoNotFound(todoId);
    } else {
        todos.splice(todoIndex, 1);
        return todos;
    }
};

/* const deleteTodoById = (todos, todoId) => {
  return todos.filter(todo => todo[todoKeys.id] !== todoId)
} */

createTodo(todos, "test1");
createTodo(todos, "test2");
createTodo(todos, "test3");

deleteTodoById(todos, 2);
console.log(todos);
