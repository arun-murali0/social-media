import { createRootRoute, Outlet } from '@tanstack/react-router';
import { childRoute } from './routes';
import Navbar from '@/components/layouts/Navbar';

export const rootRoute = createRootRoute({
	component: () => {
		return (
			<>
				<Navbar />
				<main>
					<Outlet />
				</main>
			</>
		);
	},
});

// root tree
export const routeTree = rootRoute.addChildren([...childRoute]);
