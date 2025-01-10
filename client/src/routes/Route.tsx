import { RootRoute } from './__root';
import { createRoute } from '@tanstack/react-router';
import { LazyLayout } from '../components/layouts/RootLayout';
import { lazy } from 'react';

const App = lazy(() => import('../App'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const index = createRoute({
	getParentRoute: () => RootRoute,
	path: '/',
	component: () => (
		<LazyLayout>
			<App />
		</LazyLayout>
	),
});

const login = createRoute({
	getParentRoute: () => RootRoute,
	path: '/login',
	component: () => (
		<LazyLayout>
			<Login />
		</LazyLayout>
	),
});

const register = createRoute({
	getParentRoute: () => RootRoute,
	path: '/register',
	component: () => (
		<LazyLayout>
			<Register />
		</LazyLayout>
	),
});

export const childRoutes = [index, login, register];
