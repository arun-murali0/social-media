import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { UserPlus, MapPin, Briefcase, X, Linkedin } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Link } from '@tanstack/react-router';

const profile = () => {
	return (
		<section>
			<Card className="p-4">
				<div className="flex justify-between my-4">
					<div className="flex gap-2 my-2">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>
						<span>
							<p className="font-light">Name</p>
							<p className="text-sm">
								Total Friends:<span className="font-semibold mx-1">0</span>
							</p>
						</span>
					</div>
					<div>
						<Button variant={'ghost'} className="rounded-full">
							<UserPlus />
						</Button>
					</div>
				</div>
				<Separator />
				<div className="my-4">
					<div className="my-2 flex">
						<span className="mx-2">
							<MapPin />
						</span>
						<span className='text-muted-foreground'>Some where in Earth</span>
					</div>
					<div className="my-2 flex">
						<span className="mx-2">
							<Briefcase />
						</span>
						<span className='text-muted-foreground'>Doing some work</span>
					</div>
				</div>
				<Separator />
				<div className="my-4">
					<p className="my-2 mb-4 text-sm">Social Profiles</p>
					<Link>
						<div className="flex">
							<div className="mx-2">
								<X />
							</div>
							<div className="text-gray-600 flex flex-col">
								<span>Twitter</span>
								<span>Social Platform</span>
							</div>
						</div>
					</Link>
				</div>
				<Link>
					<div className="flex">
						<div className="mx-2">
							<Linkedin />
						</div>
						<div className="text-gray-600 flex flex-col">
							<span>LinkedIn</span>
							<span>Network Platform</span>
						</div>
					</div>
				</Link>
			</Card>
		</section>
	);
};

export default profile;
