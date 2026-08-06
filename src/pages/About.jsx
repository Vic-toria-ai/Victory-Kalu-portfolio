import { Link } from "react-router-dom";

const skills = [
  "HTML5",
  "CSS3 / SASS",
  "JavaScript (ES6+)",
  "React & React Hooks",
  "React Router",
  "Tailwind CSS",
  "Bootstrap 5",
  "Git & GitHub",
  "Vercel & Netlify deployment",
  "Figma (design-to-code)",
  "Responsive / mobile-first design",
  "Cross-browser debugging",
];

function About() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-['Sora'] font-semibold text-3xl md:text-4xl text-[#141414] mb-10">
          Who Is Victory Kalu?
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <img
            src="/me.jpeg"
            alt="Victory Kalu"
            className="w-40 h-40 rounded-full object-cover flex-shrink-0"
          />

          <div className="font-['IBM_Plex_Sans'] text-[#141414] leading-relaxed space-y-5">
            <p>
              I'm a frontend developer who builds interfaces that actually do something — not just layouts, but real logic a visitor can put input into and get a real result back. If a page just sits there looking good, I don't think it's finished yet.
            </p>

            <p>
              I came to this from an unusual direction. My background is in
              journalism, I studied Mass Communication and Media Studies at the University of Nigeria, Nsukka. Before I touched a line of code professionally, I worked as a copy editor at Jacksonite Magazine and as a PR and news writer for The Sun Newspaper, producing content under daily
              deadlines for a national platform. That background left me with an editorial eye: the same precision it takes to catch a factual error or an awkward sentence before it goes to print is the precision it takes to catch a bug in a conditional statement before it ships. I write code the way I used to edit copy — carefully, reading it back, checking that it actually says what I meant it to say.
         
            </p>

            <p>
              I taught myself frontend development starting late 2025 — HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Bootstrap, and SASS  — and I've been building and shipping projects independently ever since. That means translating design briefs and Figma mockups into pixel-accurate, semantic, mobile-first interfaces; managing my own
              version control with Git and GitHub; and handling deployment
              myself through Vercel and Netlify, the same way I did for every project in my Work section. I'm comfortable with component-based architecture, React Hooks, responsive and cross-browser debugging, and basic RESTful API integration — the kind of hands-on problem-solving that comes from building things end to end rather than only following a tutorial.
            </p>

            <p>
              I also completed the Aspire Leaders Programme through Aspire
              Institute at Harvard University in 2025, and hold a Networking (N+) IT certification from New Horizons, Ikeja — a small signal, alongside everything else here, that I take learning seriously even outside of what's strictly required.
            </p>

            <p>
              Every project in my Work section is something I built myself,
              start to finish, and every one of them is live — click through and you'll see the logic actually run.

            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-['Sora'] font-semibold text-xl text-[#141414] mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-['IBM_Plex_Sans'] text-sm text-[#141414] bg-white border border-[#141414]/10 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/contact"
          className="inline-block bg-[#801A86] text-[#F7F9F9] font-['IBM_Plex_Sans'] font-medium px-6 py-3 rounded"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}

export default About;
