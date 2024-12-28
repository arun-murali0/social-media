import UserProfile from '@/components/layouts/profile';
import FriendsList from '@/components/layouts/friendsList';
import Content from '@/components/layouts/content';
import Search from '@/components/layouts/Search';

const HomeLayout = () => {
	return (
		<section className="md:mx-20 my-5 max-sm:px-2 max-md:px-3">
			<div className="grid md:grid-cols-4 gap-2 max-sm:grid-cols-1">
				<div>
					<UserProfile />
				</div>
				<div className="col-span-2 space-y-2">
					<Search />
					<Content />
				</div>
				<div>
					<FriendsList />
				</div>
			</div>
		</section>
	);
};

export default HomeLayout;
