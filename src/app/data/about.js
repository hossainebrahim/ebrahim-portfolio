import { GoDeviceDesktop } from "react-icons/go";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
  title: "About Me",
  name: "Ebrahim Hossain",
  description:
    "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
  exports: ["JavaScript", "React", "UI/UX"],
  image: "/Asset/me.JPG",
  services: [
    {
      title: "Web Development",
      text: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "Mobile Apps",
      text: "A mobile app is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "UI/UX Design",
      text: "User interface (UI) design refers to the aesthetic elements by which people interact with a product, such as buttons, icons, menu bars, typography, colors, and more. User experience (UX) design refers to the experience a user has when interacting with a product",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Web Design",
      text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
