import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
    // useParams() tells which project the URL is asking for. In this case, it retrieves the 'slug' parameter from the route '/work/:slug'.

    // .find searches the projects array for the one whose slug field matches, that's how the page knows which project's data to display.
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-['IBM_Plex_Sans']">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/work"
          className="font-['IBM_Plex_Sans'] text-sm text-[#141414]/60 hover:text-[#801A86]"
        >
          ← Back to Work
        </Link>

        <h1 className="font-['Sora'] font-semibold text-3xl md:text-4xl text-[#141414] mt-4 mb-6">
          {project.name}
        </h1>

        <img
          src={project.after}
          alt={`${project.name} in action`}
          className="w-full rounded-lg mb-8"
        />

        <p className="font-['IBM_Plex_Sans'] text-[#141414] text-lg leading-relaxed">
          {project.fullDescription}
        </p>

        {project.note && (
          <p className="font-['IBM_Plex_Sans'] text-[#A40E4C] text-sm mt-4 italic">
            {project.note}
          </p>
        )}

        <div className="flex gap-6 mt-8">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#801A86] text-[#F7F9F9] font-['IBM_Plex_Sans'] font-medium px-6 py-3 rounded"
          >
            Try it live →
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#141414]/20 text-[#141414] font-['IBM_Plex_Sans'] font-medium px-6 py-3 rounded"
          >
            View code →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;