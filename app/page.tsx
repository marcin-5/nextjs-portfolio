import {mergeClassNames as mcn} from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <h1 className={mcn("text-5xl", "font-bold", "text-red-400")}>Hello</h1>
      <h1 className={mcn("text-5xl", "font-bold", "font-oswald")}>Hello</h1>
      <h1 className={mcn("text-4xl", "font-bold", "font-pixel")}>Hello</h1>
    </div>
  );
}
