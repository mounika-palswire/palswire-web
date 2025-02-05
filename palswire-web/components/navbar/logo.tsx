import Image from "next/image";
import Link from "next/link";

export const AcmeLogo = () => (
   <Link href="/">
   <Image alt="logo" src="/logo.png" width={100} height={100} />
   </Link>
);
