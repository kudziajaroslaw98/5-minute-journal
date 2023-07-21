import { useEffect, useState } from 'react';

export type UseNotificationType = {
	message: string;
	type: string;
};

function useNotification() {
	const [isPending, setIsPending] = useState(false);
	const [notification, setNotification] = useState<
		UseNotificationType | undefined
	>({
		message: '',
		type: '',
	});

	useEffect(() => {
		if (notification && notification.message !== '') {
			setIsPending(true);
			setTimeout(() => {
				setIsPending(false);
			}, 2700);

			setTimeout(() => {
				setNotification(undefined);
			}, 3000);
		}
	}, [notification]);

	return [isPending, notification, setNotification] as const;
}

export default useNotification;
