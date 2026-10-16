import {
  PencilRuler,
  SquareCode,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  { label: "Design", Icon: PencilRuler },
  { label: "Development", Icon: SquareCode },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

export default function Categories() {
  return (
    <section className="bg-white px-6 pb-30 pt-10 text-center">
      <h2 className="font-heading text-4xl font-semibold">
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p className="mx-auto mt-5 max-w-4xl text-lg text-gray-400">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      <div className="mx-auto mt-16 grid max-w-300 grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex h-42 flex-col items-center justify-center gap-4 rounded-3xl border border-gray-300 bg-white"
          >
            <span className="flex size-15 items-center justify-center rounded-full bg-lime">
              <Icon className="size-6" />
            </span>
            <span className="text-lg font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
