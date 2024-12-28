import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { UserCheck, Heart, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const content = () => {
	return (
		<>
			<Card className="py-6 px-4 max-h-fit">
				<div className="flex flex-col gap-5">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-3">
							<div>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>A</AvatarFallback>
								</Avatar>
							</div>
							<div>
								<p className="font-normal">Name</p>
								<p className="font-light">place</p>
							</div>
						</div>
						<div>
							<Button variant={'ghost'} className="rounded-full">
								<UserCheck className="size-4" />
							</Button>
						</div>
					</div>
					<div>description</div>
					<div className="w-full">
						<div>
							<img
								src="https://imgs.search.brave.com/KJm5w-cbELGkNcYvZ6RLPOkg9y9vZK_xGQGWeDH31N8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw"
								alt="Image"
								className="rounded-md w-full h-fit"
							/>
							<div className="flex mt-7 justify-around">
								<p className="flex gap-2">
									<Heart className=" hover:fill-red-600 hover:stroke-none " /> Numbers
								</p>
								<p className="flex">
									<MessageCircle />
									comments
								</p>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
};

export default content;
