import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Braces,
  Layers,
  ShieldCheck,
  Mail,
  Fingerprint,
  BadgeCheck,
  KeyRound,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "ES6+", icon: Braces },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Context API", icon: Layers },
    ],
  },
  {
    title: "Authentication",
    skills: [
      { name: "Better Auth", icon: ShieldCheck },
      { name: "Email Authentication", icon: Mail },
      { name: "OAuth", icon: Fingerprint },
      { name: "Google Authentication", icon: FaGoogle },
      { name: "GitHub Authentication", icon: FaGithub },
      { name: "Email Verification", icon: BadgeCheck },
      { name: "Password Reset", icon: KeyRound },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
