import { UniqueId } from 'types/types';
import { Todo } from 'types/todo.types';
import apiClient from 'api/apiClient';
import { SERVICE_ENDPOINTS } from 'constants/api';
import { v4 as uuid } from 'uuid';

const getAll = async () => {
	const response = await apiClient.get<Todo[]>(SERVICE_ENDPOINTS.TODOS);
	return response.data;
};

const getById = async (id: UniqueId) => {
	const response = await apiClient.get<Todo[]>(`${SERVICE_ENDPOINTS.TODOS}/${id}`);
	return response.data;
};

const create = async (title: string) => {
	const response = await apiClient.post<any>(SERVICE_ENDPOINTS.TODOS, {
		id: uuid(),
		title,
		userId: 1,
		completed: false
	});
	return response.data;
};

const TodoService = {
	getAll,
	getById,
	create
};

export default TodoService;
