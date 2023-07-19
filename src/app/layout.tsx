import './globals.css';
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import { HeaderComponent } from '@components/header/header.component.tsx';
import { FooterComponent } from '@components/footer/footer.component.tsx';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open-sans',
});

export const metadata: Metadata = {
	title: 'Journey SI - 5 Minute Journal',
	description:
		"Journey SI's 5-Minute Journal: A pocket-sized companion to ignite self-improvement and mindfulness in mere minutes a day.",
	manifest: '/manifest.json',
	themeColor: '#1A1A1A',

	viewport: 'width=device-width, initial-scale=1.0',
	openGraph: {
		type: 'website',
		url: `https://si-journey-blog.vercel.app/`,
		title: 'Journey SI - 5 Minute Journal',
		description:
			"Journey SI's 5-Minute Journal: A pocket-sized companion to ignite self-improvement and mindfulness in mere minutes a day.",
		images: [
			{
				url: `https://si-journey-blog.vercel.app/images/blog-banner.webp`,
				width: 1200,
				height: 630,
				alt: 'Journey Blog',
			},
		],
	},
	authors: [
		{ name: 'Jarek Kudzia', url: 'https://github.com/kudziajaroslaw98' },
	],
	keywords: [
		'self-improvement',
		'personal growth',
		'blog',
		'journey',
		'motivation',
		'mindset',
		'fighting addictions',
	],
	creator: 'Jarek Kudzia',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='h-full w-full'>
			<body
				className={`${openSans.variable} ${inter.variable} no-scroll h-full w-full`}
			>
				<div className='no-scroll mx-auto flex h-auto w-full max-w-xl flex-col gap-y-6 p-6 font-inter text-emperor-100'>
					<HeaderComponent />

					{children}

					<FooterComponent />
				</div>
			</body>
		</html>
	);
}
