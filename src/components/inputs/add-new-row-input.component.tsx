'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type AddNewRowType = {
	type: string;
	action: (type: string) => void;
};

function AddNewRowInputComponent({ type, action }: AddNewRowType) {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		action(type);
		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 300);
	};

	return (
		<div>
			<button
				type='button'
				onClick={() => handleClick()}
				className={`flex w-full justify-center rounded-sm border-[0.5px] border-emperor-900 bg-transparent p-2 text-sm transition-colors hover:bg-emperor-900
				${clicked && 'animate-add-slide-in'}`}
			>
				<PlusIcon className='w-5' />
			</button>
		</div>
	);
}

export default AddNewRowInputComponent;
