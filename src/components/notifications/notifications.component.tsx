'use client';

type NotificationType = {
	isPending: boolean;
	notification: {
		type: string;
		message: string;
	};
};

function NotificationsComponent({ isPending, notification }: NotificationType) {
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
		<div
			className={`${getTypeColor()}
			${isPending ? 'animate-slide-in-from-bottom' : 'animate-slide-out-to-bottom'}
			 fixed bottom-0 left-0 h-8 w-full translate-y-[56px] opacity-0`}
		>
			<span className='flex h-full w-full items-center justify-center text-sm font-semibold text-emperor-950'>
				{notification?.message}
			</span>
		</div>
	);
}

export default NotificationsComponent;
