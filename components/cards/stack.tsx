import { stackData } from "@/data";
import Card from "../ui/card";
import Tooltip from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="My Tech stack" sectionId={"stack"}>
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-y-2 sm:[grid-template-columns:50px_1fr] sm:items-center sm:gap-x-12"
          >
            {/* Stack group name */}
            <div className="h-auto flex-none break-words whitespace-normal sm:whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            {/* Tooltip list */}
            <div className="ml-3 flex flex-wrap gap-3 sm:gap-4 overflow-visible">
              {tech.stack.map((tooltip, i) => (
                <Tooltip key={i} {...tooltip} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
