import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { UserCheck } from 'lucide-react';
import { Button } from '../ui/button';

const friendsList = () => {
	return (
		<section>
			<Card className="p-4">
				<>
					<p className="font-medium">Friends List</p>
					<div className="flex my-7 justify-between items-center">
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>A</AvatarFallback>
							</Avatar>
							<p className="font-normal">Name</p>
						</div>
						<div>
							<Button variant={'ghost'} className="rounded-full">
								<UserCheck />
							</Button>
						</div>
					</div>
				</>
			</Card>
		</section>
	);
};

export default friendsList;
