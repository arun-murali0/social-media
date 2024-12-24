import { lazy } from 'react';
import { rootRoute } from './__root';
import { createRoute } from '@tanstack/react-router';
import LazyLayout from '../components/layouts/RouterLayout';

const App = lazy(() => import('../App'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<LazyLayout>
			<App />
		</LazyLayout>
	),
});

const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-in',
	component: () => (
		<LazyLayout>
			<Login />
		</LazyLayout>
	),
});

const registerRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: () => (
		<LazyLayout>
			<Register />
		</LazyLayout>
	),
});

export const routeChildren = [indexRoute, loginRoute, registerRoute];
