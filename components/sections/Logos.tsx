import Image from "next/image";

const logos = [
  { src: "/images/logos/Frame1.png", alt: "Logo 1" },
  { src: "/images/logos/Frame2.png", alt: "Logo 2" },
  { src: "/images/logos/Frame3.png", alt: "Logo 3" },
  { src: "/images/logos/Frame4.png", alt: "Logo 4" },
  { src: "/images/logos/Frame5.png", alt: "Logo 5" },
];

export default function Logos() {
  return (
    <section className="flex h-48 items-center justify-center bg-gray-soft px-6">
      <div className="flex w-full max-w-6xl items-center justify-between gap-4">
        {logos.map((logo, index) => (
          <Image
            width={180}
            height={40}
            key={index}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
}
