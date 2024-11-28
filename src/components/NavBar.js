import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiFillInstagram, AiFillMessage } from "react-icons/ai";

import { CustomButton } from "./CustomUi";
import { useRouter } from "next/navigation";

function ContactIcon({ Icon }) {
  return (
    <button
      type="button"
      className="flex size-11 items-center justify-center rounded-full bg-second-500 text-utility-primary transition-colors duration-300 hover:bg-second-600"
    >
      <Icon className="size-4" />
    </button>
  );
}

export function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex h-16 items-center justify-between bg-utility-primary px-6 overflow-hidden shadow-lg lg:h-20 lg:px-32">
      <a href="" className="text-2xl font-semibold text-utility-second">
        Merry<span className="font-extrabold text-primary-500">Match</span>
      </a>

      {/* Mobile */}
      <div className="flex items-center gap-8 lg:hidden">
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full bg-fourth-100 text-primary-200 transition-colors duration-300 hover:bg-fourth-200"
        >
          <AiFillMessage className="size-5" />
        </button>
        <button
          type="button"
          className="text-fourth-700 transition-colors duration-300 hover:text-fourth-900"
        >
          <FiMenu className="size-6" />
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-10 font-bold lg:flex">
        <a
          href=""
          className="text-second-800 transition-colors duration-300 hover:text-second-500"
        >
          Why Merry Match?
        </a>
        <a
          href=""
          className="text-second-800 transition-colors duration-300 hover:text-second-500"
        >
          How to Merry
        </a>

        <CustomButton
          buttonType="primary"
          customStyle="w-20 h-11 font-bold"
          onClick={() => router.push("/login")}
        >
          Login
        </CustomButton>
      </div>
    </nav>
  );
}

export function Footer() {
  const contactIconList = [FaFacebook, AiFillInstagram, FaTwitter];

  return (
    <footer className="flex flex-col items-center justify-center gap-8 bg-fourth-100 px-4 py-10">
      <div className="flex flex-col items-center gap-3 font-semibold">
        <p className="text-4xl text-utility-second">
          Merry<span className="font-extrabold text-primary-500">Match</span>
        </p>
        <p className="text-center text-base text-fourth-700">
          New generation of online dating <br className="md:hidden" /> website
          for everyone
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-6">
        <div className="h-[1px] w-11/12 bg-fourth-300 lg:w-10/12"></div>
        <p className="text-center text-xs text-fourth-600">
          copyright ©2022 merrymatch.com All rights reserved
        </p>

        <div className="flex items-center gap-4">
          {contactIconList.map((Icon, index) => {
            return <ContactIcon key={index} Icon={Icon} />;
          })}
        </div>
      </div>
    </footer>
  );
}
