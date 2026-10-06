import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "./profile";

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/HridoyAhmedRafi",
    icon: FaGithub,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];
