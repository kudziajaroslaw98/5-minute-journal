'use client';

import { PlusIcon } from '@heroicons/react/24/solid';

type AddNewRowType = {
	type: string;
	action: (type: string) => void;
};

function AddNewRowInputComponent({ type, action }: AddNewRowType) {
	return (
		<div>
			<button
				type='button'
				onClick={() => action(type)}
				className='flex w-full justify-center rounded-sm border-[0.5px] border-emperor-900 bg-transparent p-2 text-sm transition-colors hover:bg-emperor-900'
			>
				<PlusIcon className='w-5' />
			</button>
		</div>
	);
}

export default AddNewRowInputComponent;
