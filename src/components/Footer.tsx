import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import Linkedin from "../assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2024 Jeffrey, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.">
            <li>
              <InstaIcon />
            </li>
            <li>
              <XSocial />
            </li>
            <li>
              <YoutubeIcon />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
