import { Link } from '@tanstack/react-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
	return (
		<nav className="p-2 sm:p-5 shadow sticky top-0  w-full">
			<div className="sm:mx-20 flex items-center justify-between max-sm:mx-0">
				<div className="text-lg text-primary sm:text-xl">
					<Link href="/">SociaPedia</Link>
				</div>
				<div className="flex items-center justify-center sm:gap-3 ">
					<Input placeholder="search.." className="hidden md:block" />
					<Link href="/" className="hidden md:block">
						<img src="../../public/icons/messenger.svg" className="size-8" alt="messenger" />
					</Link>
					<Link href="/" className="hidden md:block">
						<img src="../../public/icons/logout.svg" className="size-8" alt="logout" />
					</Link>
					{/* <Link href="/" className="md:hidden">
						<img src="../../public/icons/search.svg" className="size-5" alt="logout" />
					</Link> */}
					<Button variant={'link'} className="max-md:block md:hidden p-0 size-5">
						<img src="../../public/icons/humburger.svg" className="size-8" alt="humburger" />
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
