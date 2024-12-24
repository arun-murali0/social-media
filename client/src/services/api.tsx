import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:4000' });

interface apiServicesProps {
	id?: string;
	urlEndpointsAddress: string;
	endpointsMethods: 'get' | 'post' | 'put' | 'delete';
	data?: any;
}

export const apiServices = async <T,>({
	data,
	endpointsMethods,
	urlEndpointsAddress,
	id,
}: apiServicesProps) => {
	const url = id ? `${urlEndpointsAddress}/${id}` : `${urlEndpointsAddress}`;
	try {
		let response: AxiosResponse<T>;
		switch (endpointsMethods) {
			case 'post':
				response = await axiosInstance.post<T>(url, data);
				break;
			case 'put':
				response = await axiosInstance.put<T>(url, data);
				break;
			case 'delete':
				response = await axiosInstance.delete<T>(url);
				break;
			default:
				response = await axiosInstance.get<T>(url);
				break;
		}

		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
