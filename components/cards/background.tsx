import Card from "@/components/ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background" sectionId={"background"}>
      <div className="leading-[160%] font-normal text-zinc-200 text-[18px] text-justify">
        <p className="mb-2">
          <span>
            My enthusiasm for software development commenced childhood, marked by an ongoing exploration of programming
            fundamentals. In technical school during the 90s, I wrote assembler-based software to control a local
            disco's light show. My colleague engineered the Atari 800XL interface to the lighting system, allowing me to
            concentrate on creating and managing the software for light patterns. Seeing the joy it brought to hundreds
            of people each night fueled my passion for programming, a passion that's driven me ever since. A teenager's
            aspiration to become a software developer motivated my pursuit of a relevant degree at a polytechnic. While
            my engineering education fell short of expectations (including an ironic accusation of plagiarism for highly
            optimized assembler code written for a RISC architecture processor!), my desire to code never faded.
          </span>
        </p>
        <p className="mb-2">
          <span>
            Following graduation, pursuing a programming career in my small hometown proved challenging. For many years,
            I worked as an electrician, a role that unexpectedly honed valuable problem-solving skills. Troubleshooting
            complex electrical systems and designing automated solutions demanded creativity and precision—skills highly
            transferable to software development.
          </span>
        </p>
        <p>
          <span>
            Now, increased leisure and enhanced learning resources has provided renewed opportunities for professional
            development. I am dedicated to continuous improvement, and derive particular satisfaction from refining code
            for optimal efficiency – especially when that code makes a real difference in people's lives. I'm currently
            most excited about working with the synergistic combination of Laravel, Vue.js, and Inertia.js. This
            powerful trio allows me to build robust and efficient single-page applications by leveraging Laravel's
            backend strength and Vue.js's frontend capabilities, seamlessly integrated through Inertia.js. Currently,
            I'm expanding my skillset by delving into Java and the Spring Boot framework, with a particular interest in
            exploring microservices architecture. I also appreciate how AI can assist in generating boilerplate code and
            generally contribute to writing high-quality, maintainable software. The satisfaction of creating something
            robust and functional is even greater when that software improves the lives of others, a driving force for
            me. If you're looking for a highly motivated and adaptable developer with a strong problem-solving aptitude,
            I'd love to hear from you.
          </span>
        </p>
      </div>
    </Card>
  );
}
