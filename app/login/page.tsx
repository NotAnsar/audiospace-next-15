import LoginForm from '@/components/auth/LoginForm';
import SecondarySection from '@/components/auth/SecondarySection';
import { ModeToggle } from '@/components/ModeToggle';
// import SignAsGuest from '@/components/auth/SignAsGuest';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Sounding Future | Login',
	description: 'Login in to have Access.',
};

export default async function Page() {
	return (
		<div className='relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
			<Link href='/' className='top-6 left-4 md:left-8 md:top-8 absolute '>
				<Image
					src={'/logo.png'}
					alt='logo'
					width={288.33}
					height={132}
					className='w-24 md:w-[104px] h-auto hidden dark:block'
				/>
				<Image
					src={'/logo-light.png'}
					alt='logo'
					width={288.33}
					height={132}
					className='w-24 md:w-[104px] h-auto block dark:hidden'
				/>
			</Link>
			<div className='lg:p-8 mt-10 md:mt-0'>
				<div className='mx-auto flex w-full flex-col justify-center gap-4 sm:min-w-[550px] lg:min-w-[475px] md:max-w-[70%] px-4 mt-10 overflow-y-auto h-full '>
					<div className='flex flex-col space-y-2 '>
						<h1 className='text-[42px] font-bold tracking-tight leading-[46px]'>
							Login to your account
						</h1>
						<p className='text-sm text-muted'>
							Enter your email and password to access your account
						</p>
					</div>

					<LoginForm />

					<div className=' space-y-1.5'>
						<p className='px-8 text-center font-semibold mt-1.5'>
							{"Don't have an account? "}
							<Link
								href='/signup'
								className='text-primary-foreground hover:underline'
							>
								Sign up now
							</Link>
						</p>

						{/* <SignAsGuest /> */}

						<p className='text-[15px] text-muted text-center w-4/5 mx-auto'>
							By clicking continue, you agree to our{' '}
							<Link href={'/legal'} className='font-semibold hover:underline'>
								Legal Terms
							</Link>{' '}
							and{' '}
							<Link href={'/privacy'} className='font-semibold hover:underline'>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
			<ModeToggle className='absolute top-6 right-6 lg:bottom-12 z-50 lg:left-12 lg:right-auto lg:top-auto ' />

			<SecondarySection />
		</div>
	);
}
