import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import InputLayout from '@/components/layouts/InputLayout';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Link } from '@tanstack/react-router';
import { userSchema } from '@/utils/validation/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface meth {
	type?: string | undefined;
}

const AuthForm = ({ type }: meth) => {
	const authForm = userSchema('');
	const form = useForm<z.infer<typeof authForm>>({
		resolver: zodResolver(userSchema('')),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<section className="h-screen flex justify-center items-center">
			<Card className="md:w-96">
				<CardHeader>
					<CardTitle className="text-lg max-sm:text-md text-center">
						{type === 'sign-up' ? 'Sign Up' : 'Sign In'}
					</CardTitle>
				</CardHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<CardContent>
							{/* Register form */}
							{type === 'sign-up' && (
								<>
									<InputLayout
										placeholder="first name"
										name="firstName"
										control={form.control}
										label="firstname"
									/>

									<InputLayout
										placeholder="last name"
										name="lastName"
										label="firstName"
										control={form.control}
									/>
								</>
							)}

							{/* Default form */}

							<InputLayout placeholder="email" name="email" label="Email" control={form.control} />

							<InputLayout
								placeholder="password"
								name="password"
								control={form.control}
								label="Password"
							/>
						</CardContent>
						<CardFooter className="flex flex-col gap-2">
							<Button className="w-full">submit</Button>
							<div>
								<span className="max-md:text-sm">
									{type === 'sign-up' ? 'Already have an account ?' : 'New User ?'}
								</span>
								<Link className="mx-1" href={type === 'sign-up' ? '/sign-in' : '/sign-up'}>
									<span className="text-blue-600">
										{type === 'sign-up' ? 'sign-in' : 'sign-up'}
									</span>
								</Link>
							</div>
						</CardFooter>
					</form>
				</Form>
			</Card>
		</section>
	);
};

export default AuthForm;
