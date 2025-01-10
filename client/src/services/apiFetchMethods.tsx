import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:4001' });

interface ApiServiceProp {
	apiMethod: 'get' | 'post' | 'put' | 'patch' | 'delete';
	apiEndpoints: string;
	data?: any;
	id?: string | null;
}

export const ApiService = async <T,>({
	apiEndpoints,
	apiMethod,
	data,
	id,
}: ApiServiceProp): Promise<T | unknown> => {
	const url = id ? `${apiEndpoints}/${id}` : apiEndpoints;
	try {
		let response: AxiosResponse;

		switch (apiMethod) {
			case 'get':
				response = await axiosInstance.get(url);
				break;
			case 'post':
				response = await axiosInstance.post(url, data);
				break;
			case 'put':
				response = await axiosInstance.put(url, data);
				break;
			case 'patch':
				response = await axiosInstance.patch(url, data);
				break;
			case 'delete':
				response = await axiosInstance.delete(url, { data });
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
