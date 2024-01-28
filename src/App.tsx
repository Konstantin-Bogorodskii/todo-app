import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'api/queryClient';
import TodoList from 'components/TodoList';

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<h1>React Query Start</h1>
			<TodoList />
		</QueryClientProvider>
	);
};

export default App;
