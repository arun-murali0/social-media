import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('@/components/layouts/Navbar'));
const HomeLayout = lazy(() => import('@/pages/HomeLayout'));

const App = () => {
	return (
		<main className="max-w-full h-screen overflow-x-hidden ">
			<div className="h-full ">
				<Suspense fallback="loading">
					<Navbar />
					<HomeLayout />
				</Suspense>
			</div>
		</main>
	);
};

export default App;
