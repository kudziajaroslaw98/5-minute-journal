import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type JournalTypeToggleType = {
	typeSetter: (type: string) => void;
};

function JournalTypeToggleComponent({ typeSetter }: JournalTypeToggleType) {
	const types = ['morning', 'evening'];
	const [type, setType] = useState(types[0]);

	const handleSettingType = () => {
		if (type === types[0]) {
			setType(types[1]);
			typeSetter(types[1]);
			return;
		}
		setType(types[0]);
		typeSetter(types[0]);
	};

	return (
		<div className='flex flex-col items-center justify-center gap-y-4'>
			<div
				className='flex w-[8rem] rounded-full bg-emperor-900/20 p-1'
				onClick={() => handleSettingType()}
			>
				<button
					className={`flex h-8 w-8 items-center justify-center rounded-full bg-picton-blue-500 transition-all hover:bg-picton-blue-400 ${
						type === types[1] ? 'translate-x-[92px]' : 'translate-x-0'
					}`}
				>
					{type === types[0] && <SunIcon className='w-5' />}
					{type === types[1] && <MoonIcon className='w-5' />}
				</button>
			</div>

			<span className='text-base text-picton-blue-500'>
				{type === types[0] ? 'Morning journal' : 'Evening journal'}
			</span>
		</div>
	);
}

export default JournalTypeToggleComponent;
