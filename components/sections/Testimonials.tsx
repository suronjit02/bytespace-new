import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/avatar-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/avatar-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/avatar-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-testimonials-gradient px-6 pb-16 pt-24">
      <div className="mx-auto max-w-300">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <h2 className="font-heading text-5xl font-semibold leading-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg text-gray-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl bg-white p-6">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <h3 className="mt-6 font-heading text-xl font-semibold">
                {t.name}
              </h3>
              <p className="text-base text-primary">{t.role}</p>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
