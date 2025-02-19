import { FOOTER_LINKS } from "@/components/navigation/header/full-screen-menu/config";
import Link from "next/link";

export const FooterLinks = () => (
  <div className="w-[95%] pl-[5%] absolute bottom-8">
    <div className="flex flex-wrap items-center justify-between uppercase text-white">
      <LinkGroup links={FOOTER_LINKS.left} />
      <LinkGroup links={FOOTER_LINKS.middle} />
      <LinkGroup links={FOOTER_LINKS.right} />
    </div>
  </div>
);

const LinkGroup = ({ links }: { links: Array<{ title: string; href: string }> }) => (
  <div className="flex items-center gap-4">
    {links.map((link) => (
      <Link key={link.title} href={link.href}>
        {link.title}
      </Link>
    ))}
  </div>
);
