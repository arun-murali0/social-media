import { lazy } from 'react';
import { rootRoute } from './__root';
import { createRoute } from '@tanstack/react-router';
import LazyLayout from '../components/layouts/RouterLayout';

// Lazy load components
const App = lazy(() => import('../App'));
const AuthForm = lazy(() => import('../pages/auth'));

// Protected route wrapper
// const protectedRouteIndex = createRoute({
// 	getParentRoute: () => rootRoute,
// 	path: '/protected',
// 	component: () => <ProtectedRoutes />,
// });

// Home route (nested under /protected)
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/home',
	component: () => (
		<LazyLayout>
			<App />
		</LazyLayout>
	),
});

// Sign-in route (public)
const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-in',
	component: () => (
		<LazyLayout>
			<AuthForm type="sign-in" />
		</LazyLayout>
	),
});

// Sign-up route (public)
const registerRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: () => (
		<LazyLayout>
			<AuthForm type="sign-up" />
		</LazyLayout>
	),
});

// Export routes
export const routeChildren = [indexRoute, loginRoute, registerRoute];
