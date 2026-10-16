import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-[120px] pt-10">
      <Link href="/">
        <Image
          src="/images/hero/logo.svg"
          alt="ByteSpace"
          width={173}
          height={34}
          priority
        />
      </Link>

      <nav className="absolute left-1/2 flex -translate-x-1/2 gap-8">
        {links.map((l) => (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <Link href="/login">Sign In</Link>
        <Link href="/signup">Join Us</Link>
      </div>
    </header>
  );
}
