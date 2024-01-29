import { useQuery } from '@tanstack/react-query';
import TodoService from 'api/services/TodoService';
import { QUERY_KEYS } from 'constants/api';
import { Todo } from 'types/todo.types';

const useGetTodos = () => {
	const {
		data: todos = [],
		isLoading,
		error
	} = useQuery<Todo[], Error>({
		queryKey: [QUERY_KEYS.TODOS],
		queryFn: TodoService.getAll
	});

	return { todos, isLoading, error };
};

export default useGetTodos;
