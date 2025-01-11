import { lazy } from 'react';
import { LazyLayout } from './components/layouts/RootLayout';

const Navbar = lazy(() => import('./pages/Navbar'));

const App = () => {
	return (
		<section className="h-screen w-screen overflow-x-hidden flex flex-col">
			<main className="w-full">
				<LazyLayout>
					<Navbar />
				</LazyLayout>
			</main>
		</section>
	);
};

export default App;
