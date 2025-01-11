import { Form } from '@/components/ui/form';
import FormInput from '@/components/layouts/FormInput';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/utils/validation/loginSchema';

const Login = () => {
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: LoginSchemaType) => {
		console.log(data);
		form.resetField('email');
		form.resetField('password');
	};

	return (
		<section className="flex h-screen justify-center items-center flex-col">
			<div className="w-96 max-h-fit">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<Card>
							<CardHeader>
								<p className="text-center">Login</p>
							</CardHeader>
							<CardContent>
								<div className="my-4">
									<FormInput
										control={form.control}
										placeholder="email"
										label="Email"
										className="my-2"
										name="email"
									/>
								</div>
								<div className="my-4">
									<FormInput
										control={form.control}
										placeholder="password"
										label="Password"
										className="my-2"
										name="password"
									/>
								</div>
							</CardContent>
							<CardFooter className="my-2">
								<Button className="w-full">Sign-in</Button>
							</CardFooter>
						</Card>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default Login;
