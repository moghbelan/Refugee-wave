import Image from "next/image";
import Twitter from "../../public/X.svg";
import TikTok from "../../public/TikTok.svg";
import Instagram from "../../public/Instagram.svg";
import Facebook from "../../public/Facebook.svg";

export default function Social() {
  return (
    <div className="flex space-x-4 mt-3">
      {session && (
        <a
          href="https://TikTok.com"
          className="text-gray-700 hover:text-blue-500"
        >
          <Image src={TikTok} width={50} height={50} alt="Twitter" />
        </a>
      )}
      {session && (
        <a
          href="https://Instagram.com"
          className="text-gray-700 hover:text-blue-500"
        >
          <Image src={Instagram} width={50} height={50} alt="Twitter" />
        </a>
      )}
      {session && (
        <a href="https://x.com" className="text-gray-700 hover:text-blue-500">
          <Image src={Twitter} width={50} height={50} alt="Twitter" />
        </a>
      )}
      {session && (
        <a
          href="https://Facebook.com"
          className="text-gray-700 hover:text-blue-500"
        >
          <Image src={Facebook} width={50} height={50} alt="Twitter" />
        </a>
      )}
    </div>
  );
}
