'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react'; // @ts-ignore
import lodash from 'lodash';
import AddNewRowInputComponent from '@components/inputs/add-new-row-input.component.tsx';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import TextInputComponent from '@components/inputs/text-input.component.tsx';

type BaseValue = {
	[key: string]: string | null;
};

type JournalValue = {
	[key: string]: {
		grateful: BaseValue;
		great: BaseValue;
		affirmations: BaseValue;
		highlights: BaseValue;
		learn: BaseValue;
		work: BaseValue;
	};
} | null;

function JournalComponent() {
	const [journalValue, setJournalValue] = useState<JournalValue>(null);
	const todayDate = new Date().toLocaleDateString('en-GB');

	useEffect(() => {
		const journal = localStorage.getItem('journal');
		const parsedJSON = JSON.parse(journal as string);
		if (journal === null) {
			addEmptyTodayObject();
			return;
		}
		if (!lodash.has(parsedJSON, todayDate)) {
			setJournalValue({
				...parsedJSON,
				[todayDate]: {
					grateful: {},
					great: {},
					affirmations: {},
					highlights: {},
					learn: {},
					work: {},
				},
			});
			return;
		}

		setJournalValue(parsedJSON);
	}, []);

	useEffect(() => {
		if (journalValue === null) {
			return;
		}
		localStorage.setItem('journal', JSON.stringify(journalValue));
		console.log(journalValue);
	}, [journalValue]);

	function checkIfTodayIsAvailable() {
		return !lodash.has(journalValue, todayDate);
	}

	function addEmptyTodayObject() {
		setJournalValue({
			...journalValue,
			[todayDate]: {
				grateful: {},
				great: {},
				affirmations: {},
				highlights: {},
				learn: {},
				work: {},
			},
		});
	}

	function addNewSectionRow(type: string) {
		if (!checkIfTodayIsAvailable()) {
			addEmptyTodayObject();
		}
		setJournalValue({
			...journalValue,
			[todayDate]: {
				// @ts-ignore
				...journalValue[todayDate],
				[type]: {
					// @ts-ignore
					...journalValue[todayDate][type],
					[uuidv4()]: null,
				},
			},
		});
	}

	function modifySectionRow(type: string, id: string, value: string) {
		if (!checkIfTodayIsAvailable()) {
			addEmptyTodayObject();
		}
		setJournalValue({
			...journalValue,
			[todayDate]: {
				// @ts-ignore
				...journalValue[todayDate],
				[type]: {
					// @ts-ignore
					...journalValue[todayDate][type],
					[id]: value,
				},
			},
		});
	}

	return (
		<div className='flex h-full w-full flex-col gap-y-8 pt-12 text-lg'>
			<div className='flex flex-col gap-y-4'>
				<span className='text-lg font-bold'>
					{todayDate.split('/').join(' / ')}
				</span>
				<span className='flex gap-x-2 text-base font-bold text-picton-blue-500'>
					Morning journal <SunIcon className='w-[1.25rem]' />
				</span>
			</div>

			<section className='flex flex-col gap-y-3'>
				<h3>I am grateful for...</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						Feeling stuck? Don`t worry, it could be the <br /> little things like
						enjoying your beloved coffee.
					</span>
				</div>

				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'grateful') &&
					Object.keys(journalValue?.[todayDate]?.grateful ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'grateful'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.grateful[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'grateful'} action={addNewSectionRow} />
			</section>

			<section className='flex flex-col gap-y-3'>
				<h3>What would make today great?</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						Making small changes is better than staying the same
					</span>
				</div>
				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'great') &&
					Object.keys(journalValue?.[todayDate]?.great ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'great'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.great[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'great'} action={addNewSectionRow} />
			</section>

			<section className='flex flex-col gap-y-3'>
				<h3>Daily affirmations</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						You are amazing. We know that, but you should also remind yourself of
						this!
					</span>
				</div>
				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'affirmations') &&
					Object.keys(journalValue?.[todayDate]?.affirmations ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'affirmations'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.affirmations[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'affirmations'} action={addNewSectionRow} />
			</section>

			<div className='flex flex-col gap-y-4'>
				<span className='flex gap-x-2 text-base font-bold text-picton-blue-500'>
					Evening journal <MoonIcon className='w-[1.25rem]' />
				</span>
			</div>

			<section className='flex flex-col gap-y-3'>
				<h3>Highlights of the day.</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						Did something out of the ordinary occur?
					</span>
				</div>
				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'highlights') &&
					Object.keys(journalValue?.[todayDate]?.highlights ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'highlights'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.highlights[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'highlights'} action={addNewSectionRow} />
			</section>

			<section className='flex flex-col gap-y-3'>
				<h3>What did I learn today?</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						Life is a journey of continuous learning and exploration.
					</span>
				</div>
				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'learn') &&
					Object.keys(journalValue?.[todayDate]?.learn ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'learn'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.learn[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'learn'} action={addNewSectionRow} />
			</section>

			<section className='flex flex-col gap-y-3'>
				<h3>What I need to work on</h3>

				<div className='border-l-2 border-emperor-800 pl-2'>
					<span className='text-base text-emperor-400 '>
						We all make mistakes. The first step to not repeating them is
						acknowledging that they happened.
					</span>
				</div>
				{lodash.has(journalValue, todayDate) &&
					lodash.has(journalValue?.[todayDate], 'work') &&
					Object.keys(journalValue?.[todayDate]?.work ?? {}).map(
						(key, index, arr) => {
							return (
								<TextInputComponent
									key={key}
									type={'work'}
									id={key}
									action={modifySectionRow}
									last={index === arr.length - 1}
									initialValue={journalValue?.[todayDate]?.work[key]}
								/>
							);
						}
					)}
				<AddNewRowInputComponent type={'work'} action={addNewSectionRow} />
			</section>
		</div>
	);
}

export default JournalComponent;
