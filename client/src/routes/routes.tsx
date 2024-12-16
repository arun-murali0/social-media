import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { lazy } from 'react';
import LazyLayout from '../components/layouts/RouterLayout';

// lazy load
const Register = lazy(() => import('../pages/Register'));
const App = lazy(() => import('../App'));
const Login = lazy(() => import('../pages/Login'));

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => (
		<LazyLayout>
			<App />
		</LazyLayout>
	),
});

const LoginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-in',
	component: () => (
		<LazyLayout>
			<Login />
		</LazyLayout>
	),
});

const RegisterRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: () => (
		<LazyLayout>
			<Register />
		</LazyLayout>
	),
});

export const childRoute = [indexRoute, LoginRoute, RegisterRoute];
