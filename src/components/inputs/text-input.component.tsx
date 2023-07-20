'use client';

import { useRef } from 'react';

type TextInputType = {
	type: string;
	id: string;
	initialValue: string | null | undefined;
	action: (type: string, value: string, id: string) => void;
	last: boolean;
};

function TextInputComponent({
	type,
	initialValue,
	id,
	last,
	action,
}: TextInputType) {
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
				className={`
				${last && '-z-10 animate-text-slide-in'}
				z-10 w-full rounded-sm border-[0.5px] border-emperor-900 bg-emperor-1000 p-2 text-sm
				`}
			/>
		</div>
	);
}

export default TextInputComponent;
