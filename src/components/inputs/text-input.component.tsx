'use client';

import { useRef } from 'react';

type TextInputType = {
	type: string;
	id: string;
	initialValue: string | null;
	action: (type: string, value: string, id: string) => void;
};

function TextInputComponent({ type, initialValue, id, action }: TextInputType) {
	const textAreaRef = useRef(null);

	function auto_grow() {
		// @ts-ignore
		textAreaRef.current.style.height = '5px';
		// @ts-ignore
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
	}

	return (
		<div>
			<textarea
				ref={textAreaRef}
				onInput={(e) => auto_grow()}
				onBlur={(e) => action(type, id, e.target.value)}
				defaultValue={initialValue ?? ''}
				className='w-full rounded-sm border-[0.5px] border-emperor-900 bg-transparent p-2 text-sm'
			/>
		</div>
	);
}

export default TextInputComponent;
