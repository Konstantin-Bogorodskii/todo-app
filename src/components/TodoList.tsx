import useTodos from 'hooks/useTodos';
import Loader from './ui/Loader';

const TodoList: React.FC = () => {
	const { todos, isLoading } = useTodos();

	if (isLoading) {
		return <Loader />;
	}

	if (todos.length === 0) {
		return <h1>No matching todos...</h1>;
	}

	return (
		<>
			<h2>Todos:</h2>
			<ol>
				{todos.map(todo => {
					return <li key={todo.id}>{todo.title}</li>;
				})}
			</ol>
		</>
	);
};

export default TodoList;
