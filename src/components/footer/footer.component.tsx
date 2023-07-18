import Link from "next/link";

export function FooterComponent() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 ">
            <span>
              Made with ❤️ by{' '}
                   <Link href="https://si-journey-blog.vercel.app" className='text-picton-blue-500 underline'>Journey SI</Link>
            </span>
        </footer>
    );
}
