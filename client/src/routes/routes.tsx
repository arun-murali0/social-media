import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

import { App } from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: App,
});

export const LoginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-in',
	component: Login,
});

export const RegisterRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: Register,
});
