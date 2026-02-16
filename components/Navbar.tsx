import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <main className='fixed left-0 w-full max-w-8xl mx-auto bg-neutral-900/50 backdrop-blur-lg grid grid-cols-4 items-center p-4'>
            <div>
                <Link href="/">
                    <Image
                        src="/images/logos/logos.svg"
                        alt="Logo"
                        className="h-8 w-8"
                        width={50}
                        height={50} />
                </Link>
            </div>
            <nav className="col-start-3 flex gap-4">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/dot">D.O.T</Link>
            </nav>
            <Link className='flex justify-end' href="/contact">Contact</Link>
        </main>

    )
}