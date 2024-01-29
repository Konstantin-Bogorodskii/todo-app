import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'api/queryClient';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

const App: React.FC = () => {
	return (
		<div className="container">
			<QueryClientProvider client={queryClient}>
				<h1 className="header">Get Todos Done!</h1>
				<TodoForm />
				<TodoList />
			</QueryClientProvider>
		</div>
	);
};

export default App;
