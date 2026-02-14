import Button from "../buttons/Link";
import Image from 'next/image';

// components/ProjectCard.tsx
interface CardProps {
    title: string;
    description: string;
    images: string;
    category: string;
    slug: string;
}

export default function ProjectCard({ title, description, images, category, slug }: CardProps) {
    return (
        <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
            {/* Gambar Dinamis */}
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                {images ? (
                    <Image
                        src={images}
                        alt={title}
                        placeholder="blur"
                        fill // Membuat gambar memenuhi container
                        blurDataURL="data:image/png;base64,..." // Kamu bisa pakai placeholder generator
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 italic">No Image</div>
                )}
            </div>

            <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{category}</span>
                <h3 className="text-xl font-bold mt-2 text-black">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>

                <Button href={`/projects/${slug}`} isExternal variant="outline">
                    Lihat Detail Lengkap
                </Button>
            </div>
        </div>
    );
}