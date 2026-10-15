import { FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Braces } from "lucide-react";

// `color` is a Tailwind text color class for the icon (it also controls light/dark mode).
export const skills = [
  { name: "JavaScript", icon: FaJs, color: "text-[#d4b200] dark:text-[#f7df1e]" },
  { name: "ES6+", icon: Braces, color: "text-accent" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { name: "React.js", icon: FaReact, color: "text-[#087ea4] dark:text-[#61dafb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#5fa04e]" },
  { name: "Express.js", icon: SiExpress, color: "text-black dark:text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
];

export const tools = [
  { name: "Git", icon: FaGitAlt, color: "text-[#f05032]" },
  { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
  { name: "VS Code", icon: VscVscode, color: "text-[#007acc]" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
];