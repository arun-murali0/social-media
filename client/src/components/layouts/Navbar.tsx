import { Link } from '@tanstack/react-router';
import { MessageCircle, Bell, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import MobileNavbar from '@/components/layouts/MobileNvabr';
import { useState } from 'react';
import { toast } from 'sonner';

const Navbar = () => {
	const [showNotification, setNotification] = useState<boolean>(false);
	return (
		<>
			<div className="p-5 rounded-md sticky md:mx-20 md:my-2 shadow-sm">
				<div className="flex justify-between items-center">
					<div className="text-xl text-blue-600">
						<Link href="/">SociaPedia</Link>
					</div>
					<div className="flex items-center justify-center gap-4 max-sm:gap-2">
						<span>
							<Button onClick={()=>toast("notify")} variant={'link'}>
								<Bell />
							</Button>
						</span>

						<span>
							<Link>
								<MessageCircle />
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
		</>
	);
};

export default Navbar;
