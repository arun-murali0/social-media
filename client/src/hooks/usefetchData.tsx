import { fetchDataQuery, mutateData } from '@/services/Queries';

interface useFetchProps<T> {
	queryFn: () => Promise<T>;
	queryKeys: string[];
}

interface useMutateProps<T, V> {
	mutateFn: (data: V) => Promise<T>;
	queryKey?: string[];
	shouldInvalidation?: boolean | ((data: T) => boolean);
	onSuccess?: (data: T) => void;
}

export const useFetchData = <T,>({ queryFn, queryKeys }: useFetchProps<T>) => {
	const { data, isError, isLoading } = fetchDataQuery({
		queryFn,
		queryKeys,
	});

	return { data, isError, isLoading };
};

export const useMutateData = <T, V>({
	mutateFn,
	queryKey,
	shouldInvalidation,
	onSuccess,
}: useMutateProps<T, V>) => {
	const { data, isPending, isSuccess, mutateAsync } = mutateData<T, V>({
		mutationFn: mutateFn,
		queryKey: queryKey,
		shouldInvalidation: shouldInvalidation!,
		onSuccess: onSuccess!,
	});

	return { data, isPending, isSuccess, mutateAsync };
};
