import Image from 'next/image';
import Banner from '@images/blog-banner.webp';
import JournalComponent from '@components/Journal/journal.component.tsx';

export default function Home() {
	return (
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

			<span className='pt-6 text-center font-open-sans text-base font-light leading-6 min-[450px]:text-lg min-[450px]:leading-7'>
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
	);
}
