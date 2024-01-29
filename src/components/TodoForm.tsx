import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoService from 'api/services/TodoService';
import { QUERY_KEYS } from 'constants/api';
import { SyntheticEvent, useState } from 'react';

import classes from 'styles/TodoForm.module.css';
import { Todo } from 'types/todo.types';

const TodoForm: React.FC = () => {
	const [value, setValue] = useState<string>('');

	const queryClient = useQueryClient();

	const createTodoMutation = useMutation({
		mutationFn: async (title: string) => {
			return await TodoService.create(title);
		},
		onSuccess: todo => {
			queryClient.setQueryData([QUERY_KEYS.TODOS], (todos: Todo[]) => {
				return [...todos, todo];
			});
		}
	});

	const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
		e.preventDefault();
		if (!value) return;

		createTodoMutation.mutate(value);
		setValue('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={classes.form}>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				className={classes.input}
				placeholder="What is the task for today?"
			/>
			<button className={classes.button}>Add Todo</button>
		</form>
	);
};

export default TodoForm;
