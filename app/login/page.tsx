import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center mt-10 sm:mt-0 md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-16 w-full items-end rounded-lg bg-secondary border border-primary p-3 md:h-36">
                    <div className="w-32 md:w-36">
                        <Link href={'/'} className='logo text-lg'>
                            BillWise<span className='text-primary font-semibold'>.</span>
                        </Link>
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}