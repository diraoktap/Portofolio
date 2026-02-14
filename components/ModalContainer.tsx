'use client'

import { useRouter } from 'next/navigation';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            {/* Klik di luar kotak putih untuk tutup */}
            <div className="absolute inset-0" onClick={() => router.back()} />

            <div className="bg-white p-8 rounded-2xl max-w-2xl w-full text-black relative shadow-2xl z-10">
                <button
                    onClick={() => router.back()}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors text-xl"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}