import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: true,
		retry: 2,
		staleTime: 5000
	}
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;
