import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Socials from "@/components/ui/socials";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const RESUME = [
  [
    "A long-time enthusiast of coding, I've spent years exploring the world of programming. My skills encompass both front-end and back-end development.",
    "With years dedicated to the craft of coding, I possess a robust skillset encompassing both front-end and back-end development.",
  ],
  [
    "I'm always eager to learn more.  I find new concepts readily grasped and enjoy the challenge of problem-solving. I'm adept at finding efficient solutions.",
    "My aptitude for rapid learning and efficient problem-solving allows me to readily adapt to new challenges.",
  ],
  [
    "A commitment to robust web security underpins my approach, and I am eager to collaborate on innovative projects that redefine online possibilities.",
    "I'm particularly interested in ensuring robust web security.  Excited to collaborate on projects that push creative boundaries online, I'm ready to contribute my skills.",
  ],
];
const BIT_SHIFT = Math.pow(2, RESUME.length);

function getSentencesBasedOnBits(randomBitSelector: number) {
  return (
    RESUME.map((sentencePair, index) => {
      const bitValue = (randomBitSelector >> index) & 1;
      return sentencePair[bitValue];
    }).join(" ") + " 🚀🖥"
  );
}

export default function ResumeCard() {
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    const randomBitSelector = Math.floor(Math.random() * BIT_SHIFT);
    setSentence(getSentencesBasedOnBits(randomBitSelector));
  }, []);

  return (
    <Card className="md:h-full" sectionId={"resume"}>
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground text-justify">{sentence}</p>
      <div className={"flex items-end justify-end pb-8"}>
        <Image src={SignatureImg} alt="marcin bojara" />
      </div>
      <div className={"flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]"}>
        <Socials />
        <span title="not available yet" aria-disabled="true">
          <Button className="pointer-events-none opacity-50 cursor-not-allowed">
            <FaDownload />
            Resume
          </Button>
        </span>
      </div>
    </Card>
  );
}
