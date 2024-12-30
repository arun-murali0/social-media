import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import InputLayout from '@/components/layouts/InputLayout';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useMutateData } from '@/hooks/usefetchData';
import { apiServices } from '@/services/apiMethods';
import { useRouter } from '@tanstack/react-router';

import { Link } from '@tanstack/react-router';
import { userSchema } from '@/utils/validation/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

interface authFormProp {
	type?: string | undefined;
}

const AuthForm = ({ type }: authFormProp) => {
	const { latestLocation, navigate } = useRouter();

	// getting pathname from url
	const formType: string = latestLocation.pathname === 'sign-in' ? 'sign-in' : 'sign-up';

	const authForm = userSchema(formType);
	type AuthData = z.infer<typeof authForm>;

	const form = useForm<AuthData>({
		resolver: zodResolver(authForm),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	});

	// custom hook for registration and login
	const { isPending, mutateAsync } = useMutateData<unknown, AuthData>({
		mutateFn: async (userDetails: unknown): Promise<unknown> => {
			const response = await apiServices({
				endpointsMethods: 'post',
				urlEndpointsAddress: formType === '/sign-up' ? '/sign-up' : '/sign-in',
				data: userDetails,
			});

			if (response?.success === true) {
				if (formType === 'sign-in') {
					toast('Login successfull');
					navigate({ to: '/home' });
				}
				if (formType === 'sign-up') {
					toast('registration successfull');
					navigate({ to: '/home' });
				}
			}

			return response;
		},
		queryKey: ['users'],
		shouldInvalidation: true,
	});

	// submitting the data
	const onSubmit = async (userDetails: AuthData) => {
		try {
			await mutateAsync(userDetails);
		} catch (error: any) {
			toast(error.message);
		}
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
							<Button disabled={isPending} className="w-full">
								submit
							</Button>
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
