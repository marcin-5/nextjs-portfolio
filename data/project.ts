export interface Project {
  title: string;
  link: string;
  desc: string;
  stack: string[];
}

export const projectData: Project[] = [
  {
    title: "Portfolio",
    link: "#",
    desc: "This page.",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Blogs portal",
    link: "https://osobliwy.blog",
    desc: "Under construction.",
    stack: ["Laravel", "Vue.js", "Inertia.js", "TailwindCSS"],
  },
  {
    title: "Snake game",
    link: "https://svelte-wasm-snake-game.vercel.app/",
    desc: "This project implements a simple snake game using Rust, Svelte, and TypeScript. ",
    stack: ["Rust", "Svelte", "TypeScript", "WebAssembly"],
  },
  {
    title: "Cinemate",
    link: "https://nuxt-cinemate.netlify.app/",
    desc: "This app functions similarly to IMDb, providing movie information.",
    stack: ["Nuxt.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "TV show adviser",
    link: "https://react-tv-show-adviser.netlify.app/",
    desc: "This app providing TV Shows information.",
    stack: ["React.js", "JavaScript", "Bootstrap"],
  },
  {
    title: "Applications await deployment.",
    link: "https://github.com/marcin-5",
    desc: "Source code available on GitHub.",
    stack: [],
  },
];
