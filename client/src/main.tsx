import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { routeTree } from './routes/__root';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createRouter({ routeTree });
const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</StrictMode>
);
