import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-orange-800">
            Contact.
          </h1>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by Murathan Yildirim
      </h1>
    </>
  );
};

export default Footer;
