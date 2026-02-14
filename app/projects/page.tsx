import Image from 'next/image'
import { projects } from '@/data/projects'; // Import data
import Link from 'next/link';

// Ini adalah Server Component (default)
export default async function ProjectsPage() {
    // Kita bisa langsung fetch data di sini

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Koleksi Karya Saya</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        {/* Link menuju Dynamic Route [slug] */}
                        <Link
                            href={`/projects/${project.slug}`}
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Lihat Detail →
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}