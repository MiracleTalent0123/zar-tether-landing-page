import Flex from "../common/Flex";
import Box from "../common/Box";
import Image from "../common/Image";
import MediumIcon from "../../assets/imgs/medium-1889501-1597561.webp";
import TelegramIcon from "../../assets/imgs/logo-1889481-1597541.png";
import TwitterIcon from "../../assets/imgs/logo-1889529-1597589.png";
import GithubIcon from "../../assets/imgs/developer-tool-1889494-1597554.webp";
import DiscordIcon from "../../assets/imgs/discord-2474808-2056094.png";
import Logo from "../../assets/images/ZT LOGO WHITE-01.png";
import { Link } from "react-router-dom";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  const socialIcons = [
    { icon: TwitterIcon, link: "" },
    { icon: MediumIcon, link: "" },
    { icon: TelegramIcon, link: "" },
    { icon: DiscordIcon, link: "" },
    { icon: GithubIcon, link: "" },
  ];

  return (
    <Box cssClasses={["footer"]}>
      <Box cssClasses={["footer-container"]}>
        <Flex
          cssClasses={["container"]}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box cssClasses={["col-md-4", "col-12"]}>
            <h1 className="fw-bold text-white">Zar Tether Token</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </p>
          </Box>
          <Box cssClasses={["col-md-7", "col-12", "d-flex", "flex-wrap"]}>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                DOCUMENTATION
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Tokenomics</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Whitepaper</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Smart contracts</Link>
              </p>
            </Box>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                Company
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>About us</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Contact Us</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Legal Terms</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Cookie Settings</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Launchpad</Link>
              </p>
            </Box>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                Resources
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>News</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>FAQs</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Integration Guidelines</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Media Assets</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Tether Facts</Link>
              </p>
            </Box>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                DOCUMENTATION
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Tokenomics</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Whitepaper</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Smart contracts</Link>
              </p>
            </Box>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                Company
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>About us</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Contact Us</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Legal Terms</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Cookie Settings</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Launchpad</Link>
              </p>
            </Box>
            <Box cssClasses={["col-md-4", "col-12", "mt-4", "pt-4"]}>
              <p className="font-size-md-4 fw-700 text-uppercase mb-4 fw-bold footer-menu-title">
                Resources
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>News</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>FAQs</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Integration Guidelines</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Media Assets</Link>
              </p>
              <p className="font-size-sm-2 opacity-color mb-2">
                <Link to={"/"}>Tether Facts</Link>
              </p>
            </Box>
          </Box>
        </Flex>
        <div className="d-md-flex justify-content-between align-items-center container mt-4 pt-4">
          <Image src={Logo} cssClasses={["footer-logo-img"]} />
          <div className="d-md-flex align-items-center">
            <p style={{ fontSize: "12px" }} className="mb-0">
              Copyright © 2013-2022 Tether Operations Limited. All rights
              reserved.
            </p>
            <Flex
              direction="row"
              justifyContent="start"
              cssClasses={["ms-md-4, mt-md-0", "mt-4"]}
            >
              {socialIcons.map((icon, index) => (
                <Box key={index} cssClasses={["me-xxl-4", "me-3"]}>
                  <SocialIcon icon={icon.icon} />
                </Box>
              ))}
            </Flex>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
