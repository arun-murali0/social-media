import { Link } from '@tanstack/react-router';
import { MessageCircle, Bell, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import MobileNavbar from '@/components/layouts/MobileNvabr';

const Navbar = () => {
	return (
		<section className="">
			<div className="p-5 rounded-md sticky mx-20 my-2 shadow-sm">
				<div className="flex justify-between items-center">
					<div className="text-xl text-blue-600">
						<Link href="/">SociaPedia</Link>
					</div>
					<div className="flex items-center justify-center gap-4 max-sm:gap-2">
						<span>
							<Link href="/notification">
								<Bell />
							</Link>
						</span>

						<span>
							<Link>
								<MessageCircle />
							</Link>
						</span>

						<span>
							<Link>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>A</AvatarFallback>
								</Avatar>
							</Link>
						</span>

						<span>
							<Link>
								<LogOut />
							</Link>
						</span>

						<span className="sm:hidden">
							<Button variant={'link'}>
								<MobileNavbar />
							</Button>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
