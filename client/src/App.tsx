import Navbar from "./pages/Navbar";

const App = () => {
	return (
		<section className="h-screen w-screen overflow-x-hidden flex flex-col">
			<main className="w-full">
				<Navbar />
			</main>
		</section>
	);
};

export default App;
