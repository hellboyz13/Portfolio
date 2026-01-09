export default function AboutSection() {
  return (
    <section className="py-16 border-t border-[#e5e5e5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            Born in Singapore
          </h2>
          <p className="text-[#737373] leading-relaxed">
            Growing up in one of the world&apos;s most connected cities, I developed a deep appreciation
            for systems that work seamlessly. It&apos;s for this reason that I am intentional about my work.
            Technology should make life easier, not more complicated.
          </p>
        </div>

        <div>
          <p className="text-[#737373] leading-relaxed mb-6">
            I am devoted to continually learning and maintaining mindfulness as a technologist.
          </p>
          <p className="text-[#737373] leading-relaxed">
            The earliest memory I have of technology is setting up my family&apos;s first computer,
            troubleshooting problems others couldn&apos;t solve. Since those days, I have set out to
            master each layer of IT infrastructure—from endpoints to cloud systems.
          </p>
        </div>
      </div>
    </section>
  );
}
