import { createRootRoute, Navigate, Outlet } from '@tanstack/react-router';
import { routeChildren } from './Routes';
import { useState } from 'react';

export const ProtectedRoutes = () => {
	const [isAuth, _setIsAuth] = useState<boolean>(false);
	return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />;
};

export const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

export const routeTree = rootRoute.addChildren([...routeChildren]);
