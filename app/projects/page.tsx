import Image from 'next/image'

// Ini adalah Server Component (default)
export default async function ProjectsPage() {
    // Kita bisa langsung fetch data di sini
    const res = await fetch('https://api.contoh.com/projects');
    const projects = await res.json();

    return (
        <main>
            <h1>Karya Saya</h1>
            <div className="grid grid-cols-3">
                {projects.map((project: any) => (
                    <div key={project.id}>{project.title}</div>
                ))}
            </div>
            <Image
                src="/foto-profil.jpg"
                alt="Foto Profil Saya"
                width={500}
                height={500}
                className="rounded-full"
            />
        </main>
    );
}