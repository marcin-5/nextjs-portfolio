import FullScreenMenu from "@/components/navigation/header/full-screen-menu/full-screen-menu";
import ToggleButton from "@/components/navigation/header/full-screen-menu/toggle-button";
import FancyButton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { AnimatePresence } from "framer-motion";
import { debounce } from "next/dist/server/utils";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SCROLL_THRESHOLD = 300;
const SCROLL_DEBOUNCE_DELAY = 100;

interface MenuState {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const useScrollVisibility = (threshold: number): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const handleScroll = debounce(() => {
      if (!mounted) return;
      setIsVisible(window.scrollY > threshold);
    }, SCROLL_DEBOUNCE_DELAY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      mounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
};

const MenuSection = ({ isMenuOpen, setMenuOpen }: MenuState) => (
  <>
    <ToggleButton open={isMenuOpen} toggleOpen={setMenuOpen} />
    <AnimatePresence mode="wait">{isMenuOpen && <FullScreenMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
  </>
);

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const showToggle = useScrollVisibility(SCROLL_THRESHOLD);

  return (
    <header className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {showToggle && <MenuSection isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
    </header>
  );
}
