import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Socials from "@/components/ui/socials";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground text-justify">
        Your web wizard and digital handyman. Armed with years of tinkering in the programming playground, I&apos;ve got
        a toolbox overflowing with front-end sparkles and back-end might. Add a bit of AI cleverness and a lock-tight
        dedication to web security, and you&apos;ve got a recipe for online grandeur. Ready for a little internet magic?
        Let&apos;s make your web dreams a screen reality! 🚀🖥
      </p>
      {/*Signature*/}
      <div className={"flex items-end justify-end pb-8"}>
        <Image src={SignatureImg} alt="marcin bojara" />
      </div>
      {/*Socials and resume btn*/}
      <div className={"flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]"}>
        {/*Socials*/}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
