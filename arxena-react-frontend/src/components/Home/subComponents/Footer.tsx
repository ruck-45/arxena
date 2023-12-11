// Dependencies
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const links = ["Pricing", "Terms of Service", "Privacy Policy", "How to Use", "Download Extension"];

const Footer = () => {
  return (
    <div className="px-[3rem] flex justify-between">
      <div>
        <p>OrgGPT - Talent Identification Software for Ambitious Companies</p>
        <ul className="flex gap-[0.3rem] text-[0.85rem]">
          {links.map((ele, index) => (
            <>
              <li key={index} className="text-[blue]">
                <a href="">{ele}</a>
              </li>
              {index < links.length - 1 ? <p>|</p> : null}
            </>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-[1rem]">
        <a href="https://www.linkedin.com/company/arxena/" target="_blank">
          <BsLinkedin className="text-[1.6rem] cursor-pointer text-[#0A66C2]" />
        </a>
        <a href="https://twitter.com/arxenainc" target="_blank">
          <FaSquareXTwitter className="text-[1.6rem] cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/arxenainc" target="_blank">
          <FaFacebookSquare className="text-[1.6rem] cursor-pointer text-[#316FF6]" />
        </a>
        <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank">
          <IoLogoYoutube className="text-[1.6rem] cursor-pointer text-[red]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
