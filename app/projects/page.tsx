import Image from 'next/image'
import { projects } from '@/data/projects'; // Import data
import Link from 'next/link';
import { Suspense } from 'react';
import ProjectList from './ProjectList';
import LoadingProjects from './loading';

// Ini adalah Server Component (default)
export default async function ProjectsPage() {
    // Kita bisa langsung fetch data di sini

    // Simulasi loading data berat (misal 2 detik)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Koleksi Karya Saya</h1>

            {/* Sihirnya ada di sini! 
                Navbar dan judul di atas akan muncul INSTAN.
                Daftar proyek akan menampilkan 'fallback' (Skeleton) 
                sampai datanya siap.
            */}

            <Suspense fallback={<LoadingProjects />}>
                <ProjectList />
            </Suspense>
        </main>
    );
}