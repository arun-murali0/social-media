import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// tanstack-client
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// tanstack-router
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routes/__root';

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
