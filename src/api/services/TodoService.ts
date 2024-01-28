import { UniqueId } from 'types/types';
import { Todo } from 'types/todo.types';
import apiClient from 'api/apiClient';
import { SERVICE_ENDPOINTS } from 'constants/api';

const getAll = async () => {
	const response = await apiClient.get<Todo[]>(SERVICE_ENDPOINTS.TODOS);
	return response.data;
};

const getById = async (id: UniqueId) => {
	const response = await apiClient.get<Todo[]>(`${SERVICE_ENDPOINTS.TODOS}/${id}`);
	return response.data;
};

const TodoService = {
	getAll,
	getById
};

export default TodoService;
