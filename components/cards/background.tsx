import Card from "@/components/ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.5] text-[18px]">
          <span>Insert your text here</span> TODO
        </p>
      </div>
    </Card>
  );
}
