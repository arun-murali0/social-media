import { FetchData, mutateData } from '@/services/Queries';

export const useDataQuery = (queryFn: <T>() => Promise<T>, queryKey: readonly unknown[]) => {
	const { data, isLoading, isError } = FetchData(queryFn, queryKey);

	return { data, isError, isLoading };
};

export const useMutateData = <T, V>(mutationFn: (variable: V) => Promise<T>) => {
	const { isError, isPending, mutate, error, mutateAsync } = mutateData<T, V>(mutationFn);

	return { mutate, isError, isPending, error, mutateAsync };
};
