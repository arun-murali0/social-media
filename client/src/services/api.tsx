import axios, { AxiosResponse } from 'axios';
const axiosInstance = axios.create({ baseURL: 'http://localhost:4000' });

interface apiProp {
	endPoints: 'post' | 'delete' | 'put';
	data?: any;
	id?: string;
	urlEndpoint: string;
}

export const ApiService = async <T,>({ endPoints, data, id, urlEndpoint }: apiProp) => {
	const url = id ? `${urlEndpoint}/${id}` : urlEndpoint;

	try {
		let response: AxiosResponse<T>;

		switch (endPoints) {
			case 'delete':
				response = await axiosInstance.delete<T>(url, { data });
				break;
			case 'post':
				response = await axiosInstance.post<T>(url, data);
				break;
			case 'put':
				response = await axiosInstance.put<T>(url, data);
				break;
			default:
				response = await axiosInstance.get<T>(url);
		}
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
