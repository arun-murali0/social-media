import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';

interface RouteProp {
	children: React.ReactNode;
}

const RouterLayout = ({ children }: RouteProp) => {
	return (
		<Suspense
			fallback=<Oval
				visible={true}
				height="30"
				width="30"
				color="#4fa94d"
				ariaLabel="oval-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		>
			{children}
		</Suspense>
	);
};

export default RouterLayout;
