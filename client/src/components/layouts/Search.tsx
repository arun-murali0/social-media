import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Paperclip, BookImage, Video } from 'lucide-react';
import { useRef, useState } from 'react';

const Search = () => {
	const fileUploadRef = useRef<HTMLInputElement | null>(null);
	const [fileType, setFileType] = useState<string>('');

	// handling file uplaod
	const FileUpload = (type: string) => {
		setFileType(type);
		fileUploadRef.current?.click();
	};

	return (
		<>
			<Card className="py-6 px-3">
				<div>
					<div className="mb-5 flex gap-2">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>
						<textarea
							placeholder="Write Something....."
							className="w-full resize-y border p-2 rounded-sm"
						/>
						<Button>Post</Button>
					</div>
					<Separator />
					<div className="flex justify-around mt-4">
						<li onClick={() => FileUpload('image')} className="list-none flex gap-2 cursor-pointer">
							<BookImage />
							<span>Images</span>
						</li>
						<li onClick={() => FileUpload('video')} className="list-none flex gap-2 cursor-pointer">
							<Video />
							<span>Videos</span>
						</li>
						<li onClick={() => FileUpload('')} className="list-none flex gap-2 cursor-pointer">
							<Paperclip />
							<span>Attachment</span>
						</li>
					</div>
				</div>
			</Card>

			{/* hidden Input Type */}
			<>
				<input
					type="file"
					className="hidden"
					ref={fileUploadRef}
					accept={fileType === 'image' ? 'image/*' : fileType === 'video' ? 'video' : '*/*'}
				/>
			</>
		</>
	);
};

export default Search;
