import { ApiService } from './apiFetchMethods';

export const ApiEndpointsSerices = {
	getHome: ApiService({ apiEndpoints: '/home', apiMethod: 'get' }),
};
