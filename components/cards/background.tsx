import Card from "@/components/ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background" sectionId={"background"}>
      <div className="leading-[160%] font-normal text-zinc-200 text-[18px] text-justify">
        <p className="mb-2">
          <span>
            My passion for software development began in childhood, sparked by continuous experimentation with
            programming fundamentals. During technical school in the 1990s, I created an assembler-based system to
            control light shows at a local disco. While my colleague built the Atari 800XL interface for the lighting
            hardware, I focused entirely on designing and managing the light-pattern software. Witnessing the joy it
            brought hundreds of nightly attendees ignited a lasting drive to create meaningful code. This teenage
            aspiration led me to pursue a software-focused degree at a polytechnic. Though my engineering path brought
            unexpected challenges—from an ironic plagiarism accusation during studies for my original, highly optimized
            RISC assembler (where potential should have been recognized, not questioned) to the diploma failing as an
            actual career gateway—coupled with my limited understanding of recruitment processes complicating my
            industry entry, my commitment to coding remained unshaken.
          </span>
        </p>
        <p className="mb-2">
          <span>
            Following graduation, pursuing a programming career in my small hometown proved challenging. For many years,
            I worked as an electrician, a role that unexpectedly sharpened my technical ingenuity. Designing automated
            solutions and troubleshooting complex electrical systems required innovative thinking and precision—skills
            that translate seamlessly into software development.
          </span>
        </p>
        <p>
          <span>
            Now, increased leisure and enhanced learning resources have provided renewed opportunities for professional
            development. I am dedicated to continuous improvement, and derive particular satisfaction from refining code
            for optimal efficiency – especially when that code makes a real difference in people&#39;s lives. With solid
            foundations in Laravel, Vue.js, and Inertia.js, I leverage this powerful trio to build robust single-page
            applications that harness Laravel&#39;s backend strength and Vue.js&#39;s frontend capabilities through
            seamless Inertia.js integration. Building on this stack, I&#39;m now expanding into Rust – exploring its
            potential for backend systems, frontend WebAssembly applications, and high-performance libraries while
            utilizing the Dioxus framework for modern interfaces. I also leverage AI to accelerate development through
            boilerplate generation and improve code quality, particularly impressed by modern models capabilities in
            problem-solving, refactoring legacy code, and implementing SOLID principles alongside proven design
            patterns.
          </span>
        </p>
        <p>
          <span>
            The satisfaction of creating something robust and functional is even greater when that software improves the
            lives of others, a driving force for me. If you&#39;re looking for a highly motivated and adaptable
            developer with a strong problem-solving aptitude, I&#39;d love to hear from you.
          </span>
        </p>
      </div>
    </Card>
  );
}
