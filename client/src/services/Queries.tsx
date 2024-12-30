import {
	useQuery,
	useMutation,
	QueryKey,
	QueryFunction,
	QueryOptions,
	useQueryClient,
	UseQueryResult,
	UseMutationResult,
} from '@tanstack/react-query';

interface queryProps<T> {
	queryKeys: QueryKey;
	queryFn: QueryFunction<T>;
	options?: QueryOptions;
}

interface mutationProps<T, V> {
	queryKey?: string | string[];
	onSuccess: (data: T) => void;
	mutationFn: (data: V) => Promise<T>;
	shouldInvalidation: boolean | ((data: T) => boolean);
}

export const fetchDataQuery = <T,>({
	options,
	queryFn,
	queryKeys,
}: queryProps<T>): UseQueryResult => {
	const result = useQuery({
		queryKey: queryKeys,
		queryFn: queryFn,
		...options,
	});
	return result;
};

export const mutateData = <T, V>({
	mutationFn,
	shouldInvalidation,
	queryKey,
	onSuccess,
}: mutationProps<T, V>): UseMutationResult<T, unknown, V, unknown> => {
	const queryClient = useQueryClient();

	const mutate = useMutation<T, unknown, V>({
		mutationFn: mutationFn,
		onSuccess: (data) => {
			if (queryKey && shouldInvalidation) {
				const shouldInvalidateResult =
					typeof shouldInvalidation === 'function' ? shouldInvalidation(data) : shouldInvalidation;
				if (shouldInvalidateResult) {
					queryClient.invalidateQueries({ queryKey });
				}

				if (onSuccess) {
					onSuccess(data);
				}
			}
		},
	});

	return mutate;
};
