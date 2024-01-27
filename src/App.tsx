import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/reactQueryClient';
import TodoList from './components/TodoList';

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div>React Query Start</div>
			<TodoList />
		</QueryClientProvider>
	);
};

export default App;
