import { useQuery } from '@tanstack/react-query';
import TodoService from 'api/services/TodoService';
import { QUERY_KEYS } from 'constants/api';
import { Todo } from 'types/todo.types';

const useTodos = () => {
	const { data: todos = [], isLoading } = useQuery<Todo[], Error>({
		queryKey: [QUERY_KEYS.TODOS],
		queryFn: TodoService.getAll,
		gcTime: Infinity,
		staleTime: Infinity
	});

	return { todos, isLoading };
};

export default useTodos;
