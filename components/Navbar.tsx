import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { selectAuth } from "@/core/redux/slices/auth";
import { setModalLogin, setModalLogout } from "@/core/redux/slices/ui/uiSlice";
import { useState } from "react";
import CustomButton from "./Button";

const Navbar = () => {
  const router = useRouter();
  const { token, user } = useAppSelector(selectAuth);
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();

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
          <div
            className="flex"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {token ? (
              <button
                onClick={() => dispatch(setModalLogout())}
                className={`${
                  hover && "hover:text-red-600 hover:border-red-900"
                } py-4 mx-4 items-center inline-flex text-black border-b-2 border-transparent ease-linear transition-all duration-400`}
              >
                <div className="block">{hover ? "Logout" : user.name}</div>
              </button>
            ) : (
              <button
                onClick={() => dispatch(setModalLogin())}
                className="py-4 mx-4 items-center inline-flex text-black border-b-2 border-transparent hover:text-gray-600 hover:border-blue ease-linear transition-all duration-400"
              >
                <div className="block">Login</div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
