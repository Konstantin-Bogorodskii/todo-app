import useGetTodos from 'hooks/useGetTodos';
import Loader from 'ui/Loader';
import TodoItem from './TodoItem';

const TodoList = () => {
	const { todos, isLoading, error } = useGetTodos();

	// 	const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

	// 	const toggleComplete = id => {
	// 		setTodos(
	// 			todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	// 		);
	// 	};

	// 	const editTodo = id => {
	// 		setTodos(
	// 			todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
	// 		);
	// 	};

	// 	const editTask = (task, id) => {
	// 		setTodos(
	// 			todos.map(todo =>
	// 				todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
	// 			)
	// 		);
	// 	};

	if (isLoading) return <Loader />;
	if (error) return <pre>{JSON.stringify(error)}</pre>;
	if (todos.length === 0) return <p>No matching todos...</p>;

	return (
		<ol>
			{todos.map(todo => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				);
			})}
		</ol>
	);
};

export default TodoList;
