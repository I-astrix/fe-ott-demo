import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t-2 border-white border-opacity-10 bg-gradient-to-br from-brand-dark to-brand-darker  mt-20">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-20">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="https://flowbite.com/"
              className="flex text-white flex-col gap-4"
            >
              <Image
                src={"/logo.png"}
                width={300}
                height={300}
                alt="one-flank-music"
                className="h-auto w-32 object-contain "
              />
              </a>
              <p className="text-sm text-gray-500 sm:text-center mt-4 dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  OneFlix™
                </a>
                . All Rights Reserved.
              </p>
            
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Call US
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
