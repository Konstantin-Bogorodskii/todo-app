import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		retry: false,
		staleTime: 5000
	}
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;
