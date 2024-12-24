import { createRootRoute } from '@tanstack/react-router';
import { routeChildren } from './Routes';

export const rootRoute = createRootRoute();

export const routeTree = rootRoute.addChildren([...routeChildren]);
