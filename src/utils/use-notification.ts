import { useEffect, useState } from 'react';

type UseNotification = {
	message: string;
	type: string;
};

export function useNotification() {
	const [isPending, setIsPending] = useState(false);
	const [notification, setNotification] = useState<UseNotification | undefined>({
		message: '',
		type: '',
	});

	useEffect(() => {
		console.log('notification.message', notification?.message);
		if (notification) {
			setIsPending(true);
			console.log('notification.pending', isPending);
			setTimeout(() => {
				setIsPending(false);
				setNotification(undefined);
			}, 3000);
		}
	}, [notification]);

	return [{ isPending, notification, setNotification }];
}
