import { stackData } from "@/data";
import Card from "../ui/card";
import Tooltip from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="My Tech stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, index) => (
          <div key={index} className="grid items-center gap-[90px]" style={{ gridTemplateColumns: "50px 1fr" }}>
            {/* Stack group name*/}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            {/* Tooltip */}
            <div className="flex gap-4">
              {tech.stack.map((tooltip, index) => (
                <Tooltip key={index} {...tooltip} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
