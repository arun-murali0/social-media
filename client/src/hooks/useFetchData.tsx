import { QueryData, mutateData } from '../services/apiService';

interface useQueryDataProps<T> {
	queryKeys: string[];
	queryFn: () => Promise<T>;
}

interface useMutateDataProps<T, V> {
	queryKey?: string[];
	mutateFn: (variables: V) => Promise<T>;
	onSuccess?: (data: T) => void;
	onError?: (error: unknown) => void;
}

export const useQueryData = <T,>({ queryFn, queryKeys }: useQueryDataProps<T>) => {
	const { data, isPending, isLoading, isError } = QueryData<T>({
		queryFn,
		queryKeys,
	});

	return { data, isPending, isLoading, isError };
};

export const useMutateData = <T, V>({
	mutateFn,
	onError,
	onSuccess,
	queryKey,
}: useMutateDataProps<T, V>) => {
	const { data, error, isPending, mutateAsync } = mutateData({
		mutateFn,
		onError,
		onSuccess,
		queryKey,
	});
	return { data, error, isPending, mutateAsync };
};
