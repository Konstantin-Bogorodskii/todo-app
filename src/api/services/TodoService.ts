import { Todo } from '../../types/todo.types';
import { UniqueId } from '../../types/types';
import apiClient from '../apiClient';

const SERVICE_PATH = '/todos';

const getAll = async () => {
	const response = await apiClient.get<Todo[]>(SERVICE_PATH);
	return response.data;
};

const getById = async (id: UniqueId) => {
	const response = await apiClient.get<Todo[]>(`${SERVICE_PATH}/${id}`);
	return response.data;
};

const TodoService = {
	getAll,
	getById
};

export default TodoService;
