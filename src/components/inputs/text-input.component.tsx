'use client';

import { useEffect, useRef, useState } from 'react';

type TextInputType = {
	type: string;
	id: string;
	initialValue: string | null | undefined;
	onType: (type: string, value: string, id: string) => void;
	onDelete: (type: string, id: string) => void;
	last: boolean;
};

function TextInputComponent({
	type,
	initialValue,
	id,
	last,
	onType,
	onDelete,
}: TextInputType) {
	const textAreaRef = useRef(null);
	const [buttonState, setButtonState] = useState('default');
	const MIN_TEXTAREA_HEIGHT = 56;

	useEffect(() => {
		autoGrowOnLoad();
	}, [textAreaRef]);

	function autoGrow() {
		// @ts-ignore
		textAreaRef.current.style.height = '5px';
		// @ts-ignore

		textAreaRef.current.style.height = `${
			// @ts-ignore
			textAreaRef.current.scrollHeight > MIN_TEXTAREA_HEIGHT
				? // @ts-ignore
				  textAreaRef.current.scrollHeight
				: MIN_TEXTAREA_HEIGHT
		}px`;
	}

	function autoGrowOnLoad() {
		// @ts-ignore
		textAreaRef.current.style.height = `${
			// @ts-ignore
			textAreaRef.current.scrollHeight > MIN_TEXTAREA_HEIGHT
				? // @ts-ignore
				  textAreaRef.current.scrollHeight
				: MIN_TEXTAREA_HEIGHT
		}px`;
	}

	function handleButtonClick() {
		switch (buttonState) {
			case 'default':
				setButtonState('clicked');
				setTimeout(() => {
					setButtonState('default');
				}, 3000);
				break;
			case 'clicked':
				onDelete(type, id);
				break;
		}
	}

	return (
		<div
			className={`
				${last && '-z-10 animate-text-slide-in'}
				z-10 h-fit w-full gap-y-0 rounded-sm border-[0.5px] border-emperor-900 bg-emperor-1000 text-sm
				`}
		>
			<textarea
				ref={textAreaRef}
				onInput={(e) => autoGrow()}
				onBlur={(e) => onType(type, id, e.target.value)}
				defaultValue={initialValue ?? ''}
				className='h-9 w-full bg-transparent p-2 text-emperor-100'
			/>
			<button
				onClick={() => handleButtonClick()}
				className={`flex h-9 w-full items-center justify-center gap-x-2 border-t-[0.5px] border-emperor-900 p-2 ${
					buttonState === 'clicked' && 'bg-red-400 text-emperor-100 transition-all '
				}`}
			>
				{buttonState === 'clicked' && (
					<svg className='h-5 w-5'>
						<circle
							className='-rotate-90 animate-timelapse fill-transparent stroke-emperor-100 stroke-[3px]'
							cx='50%'
							cy='50%'
							r='5'
						/>
					</svg>
				)}
				<span>
					Remove <span className='sr-only'>this row</span>
				</span>
			</button>
		</div>
	);
}

export default TextInputComponent;
