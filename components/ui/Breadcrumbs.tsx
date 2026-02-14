'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
    const pathname = usePathname(); // Mengambil URL saat ini, misal: /projects/pt-dirgantara
    const pathSegments = pathname.split('/').filter((v) => v);

    return (
        <nav className="flex gap-2 text-sm text-gray-500 mb-6">
            <Link href="/">Home</Link>
            {pathSegments.map((segment, index) => {
                const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                return (
                    <div key={href} className="flex gap-2 text-black capitalize">
                        <span>/</span>
                        <Link href={href}>{segment.replace(/-/g, ' ')}</Link>
                    </div>
                );
            })}
        </nav>
    );
}