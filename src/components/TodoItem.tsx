import { FiTrash } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';

import classes from 'styles/TodoItem.module.css';
import { Todo } from 'types/todo.types';

interface TodoItemProps {
	todo: Todo;
	// { task, deleteTodo, editTodo, toggleComplete }
}

const TodoItem = ({ todo }: TodoItemProps) => {
	return (
		<div className={classes.todo}>
			<p
				className={`${todo.completed ? classes.completed : classes.incompleted}`}
				// onClick={() => toggleComplete(task.id)
			>
				{todo.title}
			</p>
			<div>
				<FiEdit
					className={classes.edit}
					// onClick={() => editTodo(task.id)}
				/>
				<FiTrash
					className={classes.remove}
					// onClick={() => deleteTodo(task.id)}
				/>
			</div>
		</div>
	);
};

export default TodoItem;
