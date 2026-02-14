'use client'

import Link from 'next/link';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    isExternal?: boolean;
}

export default function Button({ href, onClick, children, variant = 'primary', isExternal }: ButtonProps) {
    const baseStyles = "group relative px-6 py-2 rounded-full border-2 border-transparent border-l-purple-600 border-r-purple-600 text-purple-600 transition-all duration-700 ease-in-out hover:border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]";
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    };

    const className = `${baseStyles} ${variants[variant]}`;

    // Jika ada href dan isExternal (untuk detail penuh atau web luar)
    if (href && isExternal) {
        return <a href={href} className={className}>{children}</a>;
    }

    // Jika ada href untuk navigasi internal Next.js
    if (href) {
        return <Link href={href} className={className}>{children}</Link>;
    }

    // Jika hanya tombol biasa (seperti tombol Close di modal)
    return <button onClick={onClick} className={className}>{children}</button>;
}