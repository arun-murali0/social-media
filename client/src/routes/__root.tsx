import { createRootRoute, Outlet } from '@tanstack/react-router';
import { routeChildren } from './Routes';

const RootComponent = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export const rootRoute = createRootRoute({
	component: RootComponent,
});

export const routeTree = rootRoute.addChildren([...routeChildren]);
