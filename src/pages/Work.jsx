import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

// ProjectCard component renders individual project cards. It receives a project object as a prop and displays its details.

// onImageClick lets the Work know which image was clicked, so it can show it enlarged.
function ProjectCard({ project, onImageClick }) {
  return (
    <div className="border border-[#F7F9F9]/10 rounded-lg overflow-hidden bg-[#1E1E1E] flex flex-col">
      <img
        src={project.after}
        alt={`${project.name} in action`}
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
        onClick={() => onImageClick(project.after, project.name)}
      />
      <div className="p-5 flex flex-col flex-1">
        {project.tag && (
          <p className="font-['IBM_Plex_Sans'] text-xs uppercase tracking-wide text-[#A40E4C] mb-1">
            {project.tag}
          </p>
        )}
        <Link to={`/work/${project.slug}`}>
          <h3 className="font-['Sora'] font-semibold text-xl text-[#F7F9F9] hover:text-[#A40E4C] transition">
            {project.name}
          </h3>
        </Link>
        <p className="font-['IBM_Plex_Sans'] text-[#F7F9F9]/70 text-sm mt-2 flex-1">
          {project.description}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A40E4C] font-['IBM_Plex_Sans'] font-medium text-sm"
          >
            Try it live →
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7F9F9]/50 font-['IBM_Plex_Sans'] font-medium text-sm"
          >
            View code →
          </a>
        </div>
      </div>
    </div>
  );
}

// The Work component renders the Work page, displaying a list of project cards.

// LargeImg state variable is just tracking which image is currently enlarged.

function Work() {
  const [largeImg, setLargeImg] = useState(null);

  return (
    <div className="bg-[#141414] min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['Sora'] font-semibold text-3xl md:text-4xl text-[#F7F9F9] mb-2">
          My Work
        </h1>
        <p className="font-['IBM_Plex_Sans'] text-[#F7F9F9]/70 mb-10">
          Click through any project — the logic actually runs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.name}
              project={p}
              onImageClick={(src, name) => setLargeImg({ src, name })}
            />
          ))}
        </div>
      </div>

      {/* short circuit the large image display */}

      {largeImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50"
          onClick={() => setLargeImg(null)}
        >
          <img
            src={largeImg.src}
            alt={largeImg.name}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default Work;
