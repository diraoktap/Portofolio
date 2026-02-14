import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ModalContainer from '@/components/ModalContainer'; // Kita akan buat ini
import Link from 'next/link';
import Button from '@/components/ui/buttons/Link';

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return null;

    return (
        <ModalContainer>
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Kamu bisa pakai Image dari next/image di sini nanti */}
                <p className="text-gray-400 italic">Preview Proyek {project.title}</p>
            </div>

            {/* Tambahkan di bawah deskripsi pada modal */}
            <Button href={`/projects/${project.slug}`} isExternal variant="outline">
                Lihat Detail Lengkap
            </Button>
            {/* <div className="mt-6 flex justify-between items-center">
                <a
                    href={`/projects/${project.slug}`}
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                >
                    Lihat Detail Lengkap →
                </a>
            </div> */}
        </ModalContainer>
    );
}