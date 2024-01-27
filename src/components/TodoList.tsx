import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types/todo.types';
import TodoService from '../api/services/TodoService';
import Loader from './ui/Loader';

const TodoList: React.FC = () => {
	const { data, isLoading } = useQuery<Todo[], Error>({
		queryKey: ['todos'],
		queryFn: TodoService.getAll
	});

	if (isLoading) {
		return <Loader />;
	}

	return <div>Todos: </div>;
};

export default TodoList;
