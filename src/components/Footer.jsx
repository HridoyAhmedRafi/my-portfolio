import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HridoyAhmedRafi",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rafi.ahmed.hridoy.286649",
    icon: FaFacebookF,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#3a3d45] bg-[#0c0d10]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              className="font-mono text-xl font-bold tracking-tight text-white transition-colors hover:text-accent"
            >
              HRIDOY<span className="text-accent">.</span>
            </Link>

            <p className="mt-2 text-sm text-muted">
              Full Stack Developer • Building Modern Web Experiences
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3a3d45] bg-[#15171D] text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#3a3d45] pt-6 text-center text-sm text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Hridoy. All rights reserved.</p>

          <p className="text-[13px]">
            BUILD WITH <span className="text-accent">♥</span> BY HRIDOY
          </p>
        </div>
      </div>
    </footer>
  );
}
