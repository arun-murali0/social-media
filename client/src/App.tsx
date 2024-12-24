import { apiServices } from './services/api';
import { useFetchData } from '@/hooks/usefetchData';

const App = () => {
	const queryFn = apiServices({ endpointsMethods: 'get', urlEndpointsAddress: '/profile' });

	const { data, isError, isLoading } = useFetchData({
		queryFn: () => queryFn,
		queryKeys: ['user'],
	});

	if (isError) {
		console.log(isError);
	}

	if (isLoading) {
		console.log('loading.....');
	}

	return <div>{JSON.stringify(data)}</div>;
};

export default App;
