import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiCodewars, SiUdemy } from "react-icons/si";
import Button from "./button";

interface Social {
  icon: JSX.Element;
  link: string;
  username: string;
}

const socials: Social[] = [
  {
    icon: <FaGithub className={"w-5 h-5"} />,
    link: process.env.NEXT_PUBLIC_GITHUB_URL as string,
    username: "marcin-5",
  },
  {
    icon: <FaLinkedinIn className={"w-5 h-5"} />,
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL as string,
    username: "Marcin Bojara",
  },
  {
    icon: <SiCodewars className={"w-5 h-5"} />,
    link: process.env.NEXT_PUBLIC_CODEWARS_URL as string,
    username: "marcin-5",
  },
  {
    icon: <SiUdemy className={"w-5 h-5"} />,
    link: process.env.NEXT_PUBLIC_UDEMY_URL as string,
    username: "Marcin Bojara",
  },
];

const SocialIcon: React.FC<{ social: Social }> = ({ social }) => (
  <Button key={social.link} link={social.link} isIcon>
    <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
  </Button>
);

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social) => (
        <SocialIcon key={social.link} social={social} />
      ))}
    </div>
  );
}
