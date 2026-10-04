import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, description, children }: Props) {
  return (
    <main className="min-h-screen bg-primary bg-grid px-6 py-12">
      {/* navbar */}
      <nav className="mb-15 max-w-300 mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="ByteSpace"
            width={30}
            height={30}
          />
        </Link>
      </nav>

      <div className="mx-auto grid max-w-300 items-start gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div className="text-white">
          <h2 className="font-heading text-2xl font-semibold">{title}</h2>
          <p className="mt-3 max-w-lg text-lg">{description}</p>
          <Image
            src="/images/auth/group-auth.png"
            alt=""
            width={640}
            height={560}
            className="mt-12 hidden lg:block"
          />
        </div>

        {/* right content */}
        <div className="w-full max-w-xl justify-self-end rounded-3xl bg-white p-16 shadow-lg">
          {children}
        </div>
      </div>
    </main>
  );
}
