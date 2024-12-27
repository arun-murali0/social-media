import Navbar from '@/components/layouts/Navbar';
import HomeLayout from './pages/HomeLayout';
const App = () => {
	return (
		<main className="max-w-full h-screen overflow-x-hidden ">
			<div className="h-full">
				<Navbar />
				<HomeLayout />
			</div>
		</main>
	);
};

export default App;
