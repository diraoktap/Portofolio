import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface ProjectProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    return {
        title: project ? `${project.title} | Portfolio Saya` : 'Project Not Found',
        description: project?.description,
    };
}

export default async function ProjectDetailPage({ params }: ProjectProps) {
    // 1. Ambil slug dari URL
    const { slug } = await params;

    // 2. Cari data proyek yang cocok dengan slug di URL
    const project = projects.find((p) => p.slug === slug);

    // 3. Jika proyek tidak ditemukan, tampilkan halaman 404
    if (!project) {
        notFound();
    }

    return (
        <main className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="bg-gray-100 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">{project.description}</p>
            </div>

            {/* Di sini kamu bisa menambah screenshot proyek nantinya */}
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 italic">Gambar proyek {project.title} akan muncul di sini</p>
            </div>
        </main>
    );
}