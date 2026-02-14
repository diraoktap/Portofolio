// components/ProjectCard.tsx
interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    category: string;
    slug: string;
}

export default function ProjectCard({ title, description, imageUrl, category, slug }: CardProps) {
    return (
        <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
            {/* Gambar Dinamis */}
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 italic">No Image</div>
                )}
            </div>

            <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{category}</span>
                <h3 className="text-xl font-bold mt-2 text-black">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>

                <a href={`/projects/${slug}`} className="inline-block mt-4 text-sm font-semibold border-b-2 border-black pb-1">
                    View Project
                </a>
            </div>
        </div>
    );
}