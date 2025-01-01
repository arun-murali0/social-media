import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'sonner';

const axiosInstance = axios.create({ baseURL: 'http://localhost:4001' });

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
				response = await axiosInstance.post<T>(url, data, { withCredentials: true });
				break;
			case 'put':
				response = await axiosInstance.put<T>(url, data, { withCredentials: true });
				break;
			case 'delete':
				response = await axiosInstance.delete<T>(url, { withCredentials: true });
				break;
			default:
				response = await axiosInstance.get<T>(url, { withCredentials: true });
				break;
		}
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError;
		// Extract backend error message if available
		const serverResponseError = axiosError.response?.data?.error;
		const errorMessage = serverResponseError || axiosError.message || 'An error occurred';
		toast(errorMessage);
	}
};
