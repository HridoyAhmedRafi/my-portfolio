import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { profile } from "./profile";

const GITHUB_URL = "https://github.com/HridoyAhmedRafi";
const LINKEDIN_URL = "https://www.linkedin.com/in/hridoy-ahmed-rafi";
const FACEBOOK_URL = "https://www.facebook.com/rafi.ahmed.hridoy.286649";

const cleanUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const digitsOnly = (value) => value.replace(/\D/g, "");

const items = {
  github: {
    id: "github",
    label: "GitHub",
    href: GITHUB_URL,
    display: cleanUrl(GITHUB_URL),
    icon: FaGithub,
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    href: LINKEDIN_URL,
    display: cleanUrl(LINKEDIN_URL),
    icon: FaLinkedin,
  },
  facebook: {
    id: "facebook",
    label: "Facebook",
    href: FACEBOOK_URL,
    display: cleanUrl(FACEBOOK_URL),
    icon: FaFacebook,
  },
  email: {
    id: "email",
    label: "Email",
    href: profile.email ? `mailto:${profile.email}` : "",
    display: profile.email,
    icon: Mail,
  },
  phone: {
    id: "phone",
    label: "Phone",
    href: profile.phone ? `tel:${profile.phone.replace(/\s/g, "")}` : "",
    display: profile.phone,
    icon: Phone,
  },
  whatsapp: {
    id: "whatsapp",
    label: "WhatsApp",
    href: profile.whatsapp ? `https://wa.me/${digitsOnly(profile.whatsapp)}` : "",
    display: profile.whatsapp,
    icon: FaWhatsapp,
  },
};

const pick = (...ids) => ids.map((id) => items[id]).filter(({ href }) => href);

// Icons in the hero (and footer)
export const socialLinks = pick("github", "linkedin", "facebook", "email");

// Cards in the contact section
export const contactLinks = pick("email", "phone", "whatsapp", "github", "linkedin", "facebook"); 