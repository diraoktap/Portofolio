// app/projects/loading.tsx
export default function LoadingProjects() {
    // Kita buat array dummy untuk menampilkan 6 kotak skeleton
    const skeletons = Array.from({ length: 6 });

    return (
        <main className="p-8">
            <h1 className="h-8 w-48 bg-gray-200 animate-pulse mb-6 rounded"></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skeletons.map((_, i) => (
                    <div key={i} className="border rounded-lg p-4 space-y-4">
                        {/* Simulasi Gambar Proyek */}
                        <div className="h-40 bg-gray-200 animate-pulse rounded-md"></div>
                        {/* Simulasi Judul */}
                        <div className="h-6 bg-gray-200 animate-pulse w-3/4 rounded"></div>
                        {/* Simulasi Deskripsi */}
                        <div className="h-4 bg-gray-200 animate-pulse w-full rounded"></div>
                    </div>
                ))}
            </div>
        </main>
    );
}