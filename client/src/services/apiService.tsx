import {
	useQuery,
	useMutation,
	QueryKey,
	QueryFunction,
	UseQueryResult,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query';

interface mutateDataProp<T, V> {
	queryKey?: QueryKey;
	mutateFn: (variables: V) => Promise<T>;
	onSuccess?: (data: T) => void;
	onError?: (error: unknown) => void;
}

interface queryDataProp<T> {
	queryKeys: QueryKey;
	queryFn: QueryFunction<T>;
}

export const QueryData = <T,>({
	queryFn,
	queryKeys,
}: queryDataProp<T>): UseQueryResult<T, unknown> => {
	return useQuery<T, unknown>({
		queryKey: queryKeys,
		queryFn: queryFn,
	});
};

export const mutateData = <T, V>({
	mutateFn,
	onSuccess,
	queryKey,
	onError,
}: mutateDataProp<T, V>): UseMutationResult<T, unknown, V> => {
	const queryClient = useQueryClient();
	return useMutation<T, unknown, V>({
		mutationFn: mutateFn,
		onSuccess: (data) => {
			if (onSuccess) {
				onSuccess(data);
			}
			if (queryKey) {
				queryClient.invalidateQueries({ queryKey });
			}
		},
		onError: (error) => {
			if (onError) {
				onError(error);
			}
		},
	});
};
