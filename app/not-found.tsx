import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
            <div className="absolute">
                <h2 className="text-2xl font-bold mt-4">Waduh, Halamannya Hilang!</h2>
                <p className="text-gray-500 mt-2 mb-8">
                    Sepertinya rute yang kamu cari tidak ada atau sudah pindah ke pasar modal.
                </p>
                <Link
                    href="/"
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </main>
    );
}