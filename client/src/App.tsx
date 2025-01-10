import { useQueryData } from './hooks/useFetchData';
import { ApiEndpointsSerices } from './services/apiEndpoints';

const App = () => {
	const { data, isLoading } = useQueryData({
		queryKeys: ['user'],
		queryFn: () => ApiEndpointsSerices.getHome,
	});

	if (isLoading) {
		console.log('Loading........');
	}

	return <div>{JSON.stringify(data)}</div>;
};

export default App;
