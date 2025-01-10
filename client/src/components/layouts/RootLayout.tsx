import { ReactNode } from '@tanstack/react-router';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';

export const LazyLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense
			fallback={
				<TailSpin
					visible={true}
					height="40"
					width="30"
					color="#4fa94d"
					ariaLabel="tail-spin-loading"
					radius="1"
				/>
			}
		>
			{children}
		</Suspense>
	);
};



