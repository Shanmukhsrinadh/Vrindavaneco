import { FiStar } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const REVIEWS = [
  {
    name: "Anita Sharma",
    role: "Wedding planner, Mathura",
    text: "We served 600 guests on Vrindavan plates. Not one leaked, and the photos looked beautiful too.",
  },
  {
    name: "Rajesh Verma",
    role: "Owner, Tulsi Caterers",
    text: "Switched from thermocol two years ago. Customers love it and our food looks more premium.",
  },
  {
    name: "Sunita Devi",
    role: "Temple kitchen, Vrindavan",
    text: "Bhog feels right when served on real leaves. And cleanup is just composting — so easy.",
  },
  {
    name: "Vikram Iyer",
    role: "Restaurant owner, Delhi",
    text: "Strong, attractive and totally biodegradable. Our customers ask where we get them from.",
  },
  {
    name: "Pooja Mehta",
    role: "Eco event host",
    text: "The compartment thalis were a hit at our zero-waste festival. Will reorder for sure.",
  },
  {
    name: "Mohan Lal",
    role: "Bulk buyer, Agra",
    text: "Honest pricing, fast delivery, and the team is super responsive on WhatsApp.",
  },
];

function Card({ r }) {
  return (
    <article className="mx-3 flex w-[300px] shrink-0 flex-col rounded-3xl border border-leaf-100 bg-white p-6 shadow-sm sm:w-[340px]">
      <div className="flex items-center gap-1 text-leaf-600">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} className="fill-current" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-bark-900/85 sm:text-base">
        “{r.text}”
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-100 font-semibold text-leaf-700">
          {r.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <div className="text-sm font-semibold text-bark-900">{r.name}</div>
          <div className="text-xs text-bark-700/70">{r.role}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved by hosts"
          title="What our customers say"
          subtitle="Caterers, planners, temples and home hosts — they all keep coming back."
        />
      </div>

      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee">
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
