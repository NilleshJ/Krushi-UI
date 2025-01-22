import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const UserAuthForm = dynamic(() => import('@/components/forms/user-auth-form'), { ssr: false });

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-[url('/bg.svg')] bg-cover bg-center p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-[#0000001a]" />
        <div className="relative z-20 flex items-center text-black text-2xl font-bold">
          <Image src="/logo.png" width={200} height={200} alt="icon" className="mr-2 h-8 w-32" />
        </div>
        <div className="relative z-20 mt-auto rounded-lg -mb-4">
          <p className="text-lg text-black p-2 font-semibold">
            World’s first Evidence Based Generative AI for Orthopaedics built on LLM and Cognitive search model.
          </p>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className='flex justify-center'>
            <Image src="/favicon.png" width={200} height={200} alt="icon" className="h-10 w-10" />
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-base font-semibold tracking-tight mb-3 -mt-2">
              Start analyzing smarter
            </h1>
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to Ortho Analytics
            </h1>
            <p className="text-sm text-muted-foreground">
              Please enter your details below to sign in to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
