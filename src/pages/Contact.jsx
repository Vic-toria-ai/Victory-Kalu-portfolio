function Contact() {
  const email = "vickalu860@gmail.com";

  return (
    <div className="bg-[#141414] min-h-screen px-6 py-16 flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-['Sora'] font-semibold text-3xl md:text-4xl text-[#F7F9F9] mb-6">
          Don't take my word for it.
        </h1>

        <p className="font-['IBM_Plex_Sans'] text-[#F7F9F9]/80 text-lg leading-relaxed mb-10">
          Every project on this site is live — real input, real logic, real
          outcomes. If you're hiring for a frontend role and want to see it
          for yourself, click through the work, then get in touch. I'll
          point you to whichever project makes the strongest case for what
          you need.
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-block bg-[#A40E4C] text-[#F7F9F9] font-['IBM_Plex_Sans'] font-medium text-lg px-8 py-4 rounded hover:bg-[#801A86] transition"
        >
          Email me →
        </a>
      </div>
    </div>
  );
}

export default Contact;