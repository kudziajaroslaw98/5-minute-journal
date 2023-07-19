import Image from "next/image";
import Banner from '@images/blog-banner.webp';
import JournalComponent from "@components/Journal/journal.component.tsx";

export default function Home() {
    return (
        <main className='relative flex h-full flex-col'>
            <div className='relative w-full h-[12.5rem]'>
                <Image src={Banner}
                       alt={'Banner image'}
                       className='object-cover rounded-lg'
                       priority
                       fill
                />
            </div>

            <span
                className='font-open-sans text-center font-light pt-6 text-sm leading-6 min-[450px]:leading-7 min-[450px]:text-lg'>
                    Five minutes of reflection can focus a day. <br/>
                    Five days can shape a week.<br/>
                    Five weeks can transform a year.<br/>
                    Your life is a series of moments, take charge of them.<br/>
            </span>

            <JournalComponent />
        </main>
    );
}
