import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const MobileNvabr = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Home</SheetTitle>
					<SheetTitle>Home1</SheetTitle>
					<SheetTitle>Home2</SheetTitle>
					<SheetTitle>Home3</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNvabr;
