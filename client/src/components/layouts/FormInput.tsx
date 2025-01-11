import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';
import { LoginSchemaType } from '@/utils/validation/loginSchema';

interface formInputProp {
	label: string;
	placeholder: string;
	control: Control<LoginSchemaType>;
	className?: string;
	name: string;
}

const FormInput = ({ label, placeholder, control, className, name }: formInputProp) => {
	return (
		<>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input placeholder={placeholder} {...field} className={className} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
};

export default FormInput;
