'use client';

import Image from 'next/image';
import Banner from '@images/blog-banner.webp';
import JournalComponent from '@components/Journal/journal.component.tsx';
import { HeaderComponent } from '@components/header/header.component.tsx';
import { FooterComponent } from '@components/footer/footer.component.tsx';
import { Inter, Open_Sans } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
});

export default function Home() {
	return (
		<html lang='en' className='h-full w-full'>
			<body
				className={`${openSans.variable} ${inter.variable} no-scroll h-full w-full`}
			>
				<div className='no-scroll mx-auto flex h-auto w-full max-w-xl flex-col gap-y-6 p-6 font-inter text-emperor-100'>
					<HeaderComponent />
					<main className='relative flex h-full flex-col'>
						<div className='relative h-[12.5rem] w-full'>
							<Image
								src={Banner}
								alt={'Banner image'}
								className='rounded-lg object-cover'
								priority
								fill
							/>
						</div>

						<span className='pt-6 text-center font-open-sans text-sm font-light leading-6 min-[450px]:text-lg min-[450px]:leading-7'>
							Five minutes of reflection can focus a day. <br />
							Five days can shape a week.
							<br />
							Five weeks can transform a year.
							<br />
							Your life is a series of moments, take charge of them.
							<br />
						</span>

						<JournalComponent />
					</main>

					<FooterComponent />
				</div>
			</body>
		</html>
	);
}
