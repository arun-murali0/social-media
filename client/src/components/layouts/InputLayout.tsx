import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { userSchema } from '@/utils/validation/userSchema';
import { z } from 'zod';

const authForm = userSchema('sign-up');

interface InputProp {
	placeholder: string;
	label: string;
	name: FieldPath<z.infer<typeof authForm>>;
	control: Control<z.infer<typeof authForm>>;
}

const InputLayout = ({ name, placeholder, control, label }: InputProp) => {
	return (
		<>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem className="md:my-2 my-1">
						<FormLabel className="sm:text-sm lg:text-md">{label}</FormLabel>
						<div className="flex flex-col w-full">
							<FormControl>
								<Input placeholder={placeholder} {...field} type="text" />
							</FormControl>
							<FormMessage className="md:my-2 max-sm:my-1" />
						</div>
					</FormItem>
				)}
			/>
		</>
	);
};

export default InputLayout;
