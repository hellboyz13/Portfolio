const experiences = [
  {
    role: 'IT Support Specialist, APAC',
    company: 'Cosmostar Singapore',
    period: '2024 - Present',
  },
  {
    role: 'IT Support & Services Engineer',
    company: 'Decathlon',
    period: '2021 - 2024',
  },
  {
    role: 'Bachelor in Business Information Systems',
    company: 'Murdoch University',
    period: '2023 - 2025',
  },
  {
    role: 'Diploma in Information Technology',
    company: 'Ngee Ann Polytechnic',
    period: '2016 - 2019',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16">
      {/* Recent adventures header */}
      <div className="flex justify-end mb-12">
        <div className="text-right">
          <span className="text-2xl md:text-3xl">↗</span>
          <span className="font-serif italic text-2xl md:text-3xl ml-2">Recent</span>
          <br />
          <span className="font-serif italic text-3xl md:text-4xl text-[#1a1a1a]">adventures</span>
        </div>
      </div>

      {/* Experience table */}
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 py-5 border-t border-[#e5e5e5] group hover:bg-[#fafafa] -mx-4 px-4 transition-colors"
          >
            <div className="col-span-12 md:col-span-5">
              <span className="text-[#1a1a1a] group-hover:text-[#22c55e] transition-colors">
                {exp.role}
              </span>
            </div>
            <div className="col-span-6 md:col-span-4">
              <span className="text-[#737373]">{exp.company}</span>
            </div>
            <div className="col-span-6 md:col-span-3 text-right">
              <span className="text-[#737373]">{exp.period}</span>
            </div>
          </div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-[#e5e5e5]"></div>
      </div>
    </section>
  );
}
