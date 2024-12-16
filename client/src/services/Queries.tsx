import {
	useQuery,
	QueryClient,
	useMutation,
	QueryFunction,
	QueryKey,
	UseQueryOptions,
} from '@tanstack/react-query';

export const FetchData = (
	queryFn: QueryFunction,
	queryKey: QueryKey,
	options?: UseQueryOptions
) => {
	const result = useQuery({
		queryKey,
		queryFn,
		...options,
	});

	return result;
};

export const mutateData = <T, V>(
	mutationFn: (variable: V) => Promise<T>,
	onSuccess?: (data: T) => void,
	queryKey?: string | string[],
	shouldInvalidate?: boolean | ((data: T) => boolean)
) => {
	const queryClient = new QueryClient();

	const mutate = useMutation<T, unknown, V>({
		mutationFn,
		onSuccess: (data) => {
			if (queryKey && shouldInvalidate) {
				const shouldInvalidateResult =
					typeof shouldInvalidate === 'function' ? shouldInvalidate(data) : shouldInvalidate;

				if (shouldInvalidateResult) {
					queryClient.invalidateQueries({ queryKey });
				}
			}
			if (onSuccess) {
				onSuccess(data);
			}
		},
	});

	return {
		mutate,
		isPending: mutate.isPending,
		isError: mutate.isError,
		mutateAsync: mutate.mutateAsync,
		error: mutate.error,
	};
};
