import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:4001' });

interface ApiServiceProp<T> {
	apiMethod: 'get' | 'post' | 'put' | 'patch' | 'delete';
	apiEndpoints: string;
	data?: T;
	id?: string | null;
}

export const ApiService = async <T, Res=unknown>({
	apiEndpoints,
	apiMethod,
	data,
	id,
}: ApiServiceProp<T>): Promise<Res | undefined> => {
	const url = id ? `${apiEndpoints}/${id}` : apiEndpoints;
	try {
		let response: AxiosResponse<Res>;

		switch (apiMethod) {
			case 'get':
				response = await axiosInstance.get<Res>(url);
				break;
			case 'post':
				response = await axiosInstance.post<Res>(url, data);
				break;
			case 'put':
				response = await axiosInstance.put<Res>(url, data);
				break;
			case 'patch':
				response = await axiosInstance.patch<Res>(url, data);
				break;
			case 'delete':
				response = await axiosInstance.delete<Res>(url, { data });
				break;
			default:
				throw new Error('Invalid API method');
		}

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios error:', error.response?.data || error.message);
		} else {
			console.error('Unknown error:', error);
		}
	}
};
