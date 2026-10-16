import Image from "next/image";
import Link from "next/link";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6">
      <div className="mx-auto max-w-300 pt-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-md">
            <Image
              src="/images/logo-dark.svg"
              alt="ByteSpace"
              width={171}
              height={37}
            />

            <p className="mt-4 text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-10 flex items-center gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-13 w-full max-w-94 rounded-full border border-gray-300 px-6 text-sm outline-none"
              />
              <button
                type="submit"
                className="h-13 rounded-full bg-lime px-8 text-sm font-medium"
              >
                Search
              </button>
            </form>

            <p className="mt-6 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4 text-sm">
                {col.map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 text-xs sm:flex-row">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            {legal.map((item) => (
              <li key={item}>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
