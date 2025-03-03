import Image from "next/image";
import Link from "next/link";
import BgImage from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        className="object-cover"
        src={BgImage}
        placeholder="blur"
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10">
          Welcome to paradise.{" "}
        </h1>
        <Link
          href="/cabins"
          className="px-8 py-6 text-lg font-semibold text-primary-800 bg-accent-500 hover:bg-accent-600 transition-all">
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
