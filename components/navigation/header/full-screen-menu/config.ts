export const MAIN_NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

export const MENU_CARD_LINKS = [
  { title: "About", href: "#me" },
  { title: "Background", href: "#background" },
  { title: "Courses", href: "#courses" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Projects", href: "#projects" },
  { title: "Tech stack", href: "#stack" },
  { title: "Gallery", href: "#gallery" },
];

export const FOOTER_LINKS = {
  left: [],
  middle: [
    { title: "GITHUB", href: process.env.NEXT_PUBLIC_GITHUB_URL as string },
    { title: "LINKEDIN", href: process.env.NEXT_PUBLIC_LINKEDIN_URL as string },
    { title: "CODEWARS", href: process.env.NEXT_PUBLIC_CODEWARS_URL as string },
    { title: "UDEMY", href: process.env.NEXT_PUBLIC_UDEMY_URL as string },
  ],
  right: [{ title: "©2025", href: "/" }],
};

export const DEFAULT_LINK_CLASSES =
  "text-2xl md:text-[4vw] lg:text-[6vw] uppercase leading-tight font-bold text-primary-foreground";

export const CARD_STYLES = {
  container:
    "w-full h-auto min-h-[427px] gap-[70px] bg-slate-800 rounded-[10px] flex-col justify-between items-start flex relative overflow-hidden pt-10 px-[25px] pb-5 shadow-md",
  header: "w-full flex relative justify-between items-center",
  title: "uppercase font-bold text-2xl text-amber-200",
  navigation: "z-40 w-full flex flex-col gap-y-[10px] justify-center items-start relative",
  background: "block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0",
  link: "xl:text-[52px] sm:text-[3vw] lg:text-[4vw] text-amber-400 lowercase font-bold leading-[85%] transition-colors duration-75 hover:text-white",
};
