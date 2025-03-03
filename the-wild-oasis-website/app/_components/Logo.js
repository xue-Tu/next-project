import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image quality={80} height={60} width={60} src="/logo.png" alt="Logo" />
      {/* <Image className="w-[60px]" src={LogoImage} /> */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
