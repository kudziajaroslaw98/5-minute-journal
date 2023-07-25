'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

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
	onType,
	onDelete,
}: TextInputType) {
	const textAreaRef = useRef(null);
	const [buttonState, setButtonState] = useState('default');
	const [isNew, setIsNew] = useState(true);
	const MIN_TEXTAREA_HEIGHT = 36;

	useEffect(() => {
		autoGrowOnLoad();
	}, [textAreaRef]);

	useEffect(() => {
		setTimeout(() => {
			setIsNew(false);
		}, 1000);
	}, []);

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
				${isNew && '-z-10 animate-text-slide-in'}
				z-10 flex h-fit w-full gap-y-0 rounded-sm bg-emperor-1000 text-sm
				`}
		>
			<textarea
				ref={textAreaRef}
				onInput={(e) => autoGrow()}
				onBlur={(e) => onType(type, id, e.target.value)}
				defaultValue={initialValue ?? ''}
				className='mr-2 flex w-full max-w-[486.5px] border-[0.5px] border-emperor-900 bg-transparent p-2 text-emperor-100 outline-none'
			/>
			<button
				onClick={() => handleButtonClick()}
				className={`relative flex h-9 w-9 items-center justify-center rounded-sm border-[0.5px] border-emperor-900 bg-emperor-1000 p-2 transition-all ${
					buttonState === 'clicked' && 'bg-red-400 text-emperor-100'
				}`}
			>
				<span>
					{buttonState === 'default' && <XMarkIcon className='h-5 w-5' />}
					{buttonState === 'clicked' && (
						<span className=' flex flex-col items-center justify-center'>
							<CheckIcon className='h-5 w-5' />
							<svg className='absolute bottom-0 left-0 h-[34px] w-[34px]'>
								<rect className=' h-[34px] w-[34px] animate-timelapse fill-transparent stroke-emperor-100 stroke-[3px]' />
							</svg>
						</span>
					)}
				</span>
			</button>
		</div>
	);
}

export default TextInputComponent;
