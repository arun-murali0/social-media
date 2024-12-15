import { createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute();

import { indexRoute, LoginRoute, RegisterRoute } from './routes';

// root tree
export const routeTree = rootRoute.addChildren([indexRoute, LoginRoute, RegisterRoute]);
