'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error ke layanan monitoring jika perlu
        console.error(error);
    }, [error]);

    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h2 className="text-2xl font-bold text-red-600">Terjadi Kesalahan Sistem</h2>
            <p className="text-gray-500 mt-2 mb-8">
                Tenang, ini bukan salah desain kamu. Ada sedikit kendala teknis di balik layar.
            </p>
            <button
                onClick={() => reset()} // Mencoba memuat ulang komponen yang error
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
                Coba Lagi
            </button>
        </main>
    );
}