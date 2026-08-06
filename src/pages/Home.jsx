import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <section className=" max-w-3xl mx-auto text-center px-6 pt-24 pb-16">
        <h1 className="font-['sora'] font-semibold text-4xl md:text-5xl leading-tight text-[#141414] mb-4">
          Every project here runs, click through and see the logic work.
        </h1>
        <p className="font-['IBM_Plex_Sans'] text-[#141414] mt-6 text-lg">
          I build interactive web interfaces with working logic — real user input,
          calculations, and conditional outcomes, not just static layouts.
        </p>
        <Link
          to="/work"
          className="inline-block mt-8 bg-[#801A86] text-[#F7F9F9] font-['IBM_Plex_Sans'] font-medium px-6 py-3 rounded"
        >
          See the work
        </Link>
      </section>
        {/* project previews. */}
        <section className="max-w-5xl mx-auto px-6 pb-20"> 
          <p className="font-['IBM_Plex_Sans'] text-sm uppercase tracking-wide text-[#A40E4C] mb-3">
            Featured Projects
          </p>
          <div className="border border-[#141414]/10 rounded-lg overflow-hidden bg-white">
            <img
              src="/screenshots/cred-hero.jpeg"
              alt="CredAxis credit scoring interface"
               className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="font-['Sora'] font-semibold text-2xl text-[#141414]">
                CredAxis
              </h2>
              <p className="font-['IBM_Plex_Sans'] text-[#141414] mt-2">
                An alternative credit engine — real user input evaluated into a real,
                conditional outcome.
              </p>
              <Link
                to="/work"
                className="inline-block mt-4 text-[#A40E4C] font-['IBM_Plex_Sans'] font-medium"
              >
                View case study →
              </Link>
            </div>
          </div>
    
        </section>
    </div>
  );
}

export default Home;
