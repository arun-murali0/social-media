import { FetchData, mutateData } from '@/services/Queries';

export const useDataQuery = <T,>(queryFn:() => Promise<T>, queryKey: readonly T[]) => {
	const { data, isLoading, isError } = FetchData(queryFn, queryKey);

	return { data, isError, isLoading };
};

export const useMutateData = <T, V>(mutationFn: (variable: V) => Promise<T>) => {
	const { isError, isPending, mutate, error, mutateAsync } = mutateData<T, V>(mutationFn);

	return { mutate, isError, isPending, error, mutateAsync };
};
