import Link from 'next/link';
import {Bars3Icon} from '@heroicons/react/24/solid';
import Logo from '../../../public/images/svg/logo.svg';

export function HeaderComponent() {
    return (
        <header className={`top-0 z-50 w-full space-x-2 drop-shadow-2xl`}>
            <div className='flex w-full items-center justify-between'>
                <Link className='flex items-center gap-2 sm:gap-6' href='/'>
                    <Logo className='object-fit h-8 w-8'/>

                    <h1 className='text-xl font-black uppercase leading-6 text-emperor-100 md:text-3xl'>
                        Journey
                    </h1>
                </Link>

                <div className='flex flex-1 items-center justify-end gap-6 md:gap-12'>
                    <Bars3Icon className='h-8 w-8 cursor-pointer text-emperor-100'/>
                </div>
            </div>
        </header>
    );
}
