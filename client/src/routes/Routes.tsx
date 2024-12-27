import { lazy } from 'react';
import { rootRoute } from './__root';
import { createRoute } from '@tanstack/react-router';
import LazyLayout from '../components/layouts/RouterLayout';

const App = lazy(() => import('../App'));
const AuthForm = lazy(() => import('../pages/auth'));

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
			<AuthForm type="sign-in" />
		</LazyLayout>
	),
});

const registerRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: () => (
		<LazyLayout>
			<AuthForm type='sign-up'/>
		</LazyLayout>
	),
});

export const routeChildren = [indexRoute, loginRoute, registerRoute];
