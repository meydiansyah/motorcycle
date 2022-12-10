import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "./Button";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full fixed z-20 top-0 bg-white shadow-sm ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between space-x-2">
          <Link href="/">
            <a className="font-josef text-xl cursor-pointer text-black">
              htci.
            </a>
          </Link>
          <div className="space-x-3  justiy-center items-center flex">
            <CustomButton
              onClick={() => router.push(`/about`)}
              title="About"
              pathName="/about"
            />
            <CustomButton
              onClick={() => router.push(`/product`)}
              title="Products"
              pathName="/product"
            />
            <CustomButton
              onClick={() => router.push(`/gallery`)}
              title="Gallery"
              pathName="/gallery"
            />
            <CustomButton
              onClick={() => router.push(`/events`)}
              title="Events"
              pathName="/events"
            />
            <CustomButton
              onClick={() => router.push(`/articles`)}
              title="Articles"
              pathName="/articles"
            />
          </div>
          <Link href="/login">
            <a className="py-4 text-md cursor-pointer text-black border-b-2 border-transparent hover:border-black ease-linear transition-all duration-400">
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
