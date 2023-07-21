'use client';

import { useNotification } from '../../utils/use-notification.ts';
import { useEffect, useState } from 'react';

function NotificationsComponent() {
	const [{ isPending, notification }] = useNotification();
	const [showNotification, setShowNotification] = useState(isPending);

	useEffect(() => {
		console.log('inside notification component');
		setShowNotification(notification !== undefined);
	}, [notification]);

	const getTypeColor = () => {
		switch (notification?.type) {
			case 'success':
				return 'bg-green-400';
			case 'error':
				return 'bg-red-400';
			case 'warning':
				return 'bg-yellow-400';
			default:
				return 'bg-green-400';
		}
	};
	return (
		showNotification && (
			<div className={`${getTypeColor} fixed bottom-0 left-0 h-8 w-full`}>
				<span className='flex h-full w-full items-center justify-center text-sm font-semibold text-emperor-950'>
					{notification?.message}
				</span>
			</div>
		)
	);
}

export default NotificationsComponent;
