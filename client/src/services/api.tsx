import axios from 'axios';
const axiosInstance = axios.create({ baseURL: 'http://localhost:4000' });

const getHome = async () => {
	try {
		const res = await axiosInstance.get('/profile');
		return res;
	} catch (error) {
		console.log(error);
	}
};

export { getHome };
