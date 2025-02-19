import { scale, slide } from "@/components/navigation/header/full-screen-menu/animation";
import { DEFAULT_LINK_CLASSES } from "@/components/navigation/header/full-screen-menu/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useCallback, useState } from "react";

interface NavLinkProps {
  title: string;
  href: string;
  index: number;
  dotEffect?: boolean;
  linkClasses?: string;
  onClick?: () => void;
}

const renderDotEffect = (isHovered: boolean) => (
  <motion.div
    variants={scale}
    animate={isHovered ? "open" : "closed"}
    className="w-3 h-3 bg-white rounded-full absolute left-[-30px] md:left-[-30px]"
    aria-hidden="true"
  />
);

const NavLink: FC<NavLinkProps> = ({ title, href, index, dotEffect, linkClasses, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      className="relative flex items-center z-40"
      variants={slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="navigation"
    >
      {dotEffect && renderDotEffect(isHovered)}
      <Link
        href={href}
        className={linkClasses || DEFAULT_LINK_CLASSES}
        aria-label={`Navigate to ${title}`}
        onClick={onClick}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
