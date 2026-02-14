// app/projects/ProjectList.tsx
import ProjectCard from '@/components/ui/cards/ProjectCard';
import { projects } from '@/data/projects';

export default async function ProjectList() {
    // Simulasi loading data berat (misal 2 detik)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}