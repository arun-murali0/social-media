import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router';
import { childRoutes } from './Route';

const RootComponent = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export const RootRoute = createRootRoute({
	component: RootComponent,
});

const routeTree = RootRoute.addChildren([...childRoutes]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });
