import { HeadingAnimatedSvg } from "@/components/heading/heading-animated-svg";
import { CARD_STYLES, MENU_CARD_LINKS } from "@/components/navigation/header/full-screen-menu/config";
import NavLink from "@/components/navigation/header/full-screen-menu/nav-link";
import Background from "@/public/assets/images/background/noisy-background.png";
import Image from "next/image";

interface NavigationLink {
  title: string;
  href: string;
}

const NavigationList = ({ links }: { links: NavigationLink[]; onClose?: () => void }) => (
  <div className={CARD_STYLES.navigation}>
    {links.map((item, index) => (
      <NavLink key={index} {...item} index={index} dotEffect={false} linkClasses={CARD_STYLES.link} />
    ))}
  </div>
);

const CardHeader = () => (
  <div className={CARD_STYLES.header}>
    <div className={CARD_STYLES.title}>Who am I?</div>
    <HeadingAnimatedSvg animated text="LEARN MORE ABOUT MARCIN BOJARA" />
  </div>
);

const BackgroundImage = () => (
  <Image src={Background} alt="Menu background texture" className={CARD_STYLES.background} />
);

export default function MenuCard() {
  return (
    <div className={CARD_STYLES.container}>
      <CardHeader />
      <NavigationList links={MENU_CARD_LINKS} />
      <BackgroundImage />
    </div>
  );
}
