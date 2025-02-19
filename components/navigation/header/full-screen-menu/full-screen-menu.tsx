import { menuSlide } from "@/components/navigation/header/full-screen-menu/animation";
import { MAIN_NAV_ITEMS } from "@/components/navigation/header/full-screen-menu/config";
import { FooterLinks } from "@/components/navigation/header/full-screen-menu/footer-links";
import MenuCard from "@/components/navigation/header/full-screen-menu/menu-card";
import { MenuProvider } from "@/components/navigation/header/full-screen-menu/menu-context";
import NavLink from "@/components/navigation/header/full-screen-menu/nav-link";
import Profile from "@/components/ui/profile";
import { motion } from "framer-motion";

export default function FullScreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <MenuProvider onClose={onClose}>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-full bg-slate-950 fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
      >
        <ProfileSection />
        <MainContent />
        <FooterLinks />
      </motion.div>
    </MenuProvider>
  );
}

const ProfileSection = () => (
  <div className="relative w-full pl-[5%]">
    <div className="absolute top-8">
      <Profile />
    </div>
  </div>
);

const MainContent = () => (
  <div className="absolute bottom-32 w-full px-[5%]">
    <div className="grid relative" style={{ gridTemplateColumns: "1fr 500px" }}>
      <NavigationLinks items={MAIN_NAV_ITEMS} />
      <MenuCard />
    </div>
  </div>
);

const NavigationLinks = ({ items }: { items: typeof MAIN_NAV_ITEMS }) => (
  <div className="pl-4 flex flex-col justify-end">
    {items.map((item, index) => (
      <NavLink key={index} {...item} index={index} dotEffect={true} />
    ))}
  </div>
);
