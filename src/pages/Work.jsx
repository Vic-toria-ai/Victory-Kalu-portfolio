import { useState } from "react";

// Project data stored in an array for easier management. It is easier passing them as props to the ProjectCard component.
const projects = [
  {
    name: "CredAxis",
    tag: "Featured",
    description:
      "An alternative credit engine — real user input evaluated into a real, conditional outcome.",
    before: "/screenshots/cred-hero.jpeg",
    after: "/screenshots/cred-signup.jpeg",
    live: "https://cred-axis-beryl.vercel.app/",
    code: "#",
  },
  {
    name: "IP Address Tracker",
    description:
      "Enter any IP or domain, get its real location, timezone, and ISP back — live lookup, not mock data.",
    before: "/screenshots/ip-tracker-before.jpeg",
    after: "/screenshots/ip-tracker-after.jpeg",
    live: "https://ip-address-trackernetlify.netlify.app/",
    code: "#",
  },
  {
    name: "Product List & Cart",
    description:
      "Add items, watch quantities and totals update in real time — real state management, not static pricing.",
    before: "/screenshots/cart-empty.jpeg",
    after: "/screenshots/cart-filled.jpeg",
    live: "https://product-list-cart-74av.vercel.app/",
    code: "#",
  },
  {
    name: "Web Calculator",
    description:
      "Handles real arithmetic, including edge cases like division errors.",
    before: "/screenshots/calc-before.jpeg",
    after: "/screenshots/calc-after.jpeg",
    live: "https://mycalc-a.netlify.app/",
    code: "#",
  },
  {
    name: "Todo App — Clarify",
    description:
      "Add, check off, and delete tasks — real state changes, not a static list.",
    before: "/screenshots/todo-unchecked.jpeg",
    after: "/screenshots/todo-checked.jpeg",
    live: "https://clarify-todo-app.vercel.app/",
    code: "#",
  },
  {
    name: "Auto Company Website",
    description:
      "A fully responsive marketing site — supporting visual work, not logic-focused.",
    before: "/screenshots/auto-home.jpeg",
    after: "/screenshots/auto-carShowcase.jpeg",
    live: "https://automobile-website-net.netlify.app/",
    code: "#",
  },
];

// ProjectCard component renders individual project cards. It receives a project object as a prop and displays its details.

// onImageClick lets the Work know which image was clicked, so it can show it enlarged.

function ProjectCard({ project, onImageClick }) {
  return (
    <div className="border border-[#141414]/10 rounded-lg overflow-hidden bg-white flex flex-col">
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
        <h3 className="font-['Sora'] font-semibold text-xl text-[#141414]">
          {project.name}
        </h3>
        <p className="font-['IBM_Plex_Sans'] text-[#141414] text-sm mt-2 flex-1">
          {project.description}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#801A86] font-['IBM_Plex_Sans'] font-medium text-sm"
          >
            Try it live →
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#141414]/60 font-['IBM_Plex_Sans'] font-medium text-sm"
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
    <div className="bg-[#F5F5F5] min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['Sora'] font-semibold text-3xl md:text-4xl text-[#141414] mb-2">
          Work
        </h1>
        <p className="font-['IBM_Plex_Sans'] text-[#141414] mb-10">
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

      {largeImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
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
