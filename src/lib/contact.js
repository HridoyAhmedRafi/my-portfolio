import { profile } from "@/data/profile";

// Right now this opens the visitor's email app with the message pre-filled.
// Later, when you have a backend, replace the inside of this function with a
// fetch("/api/contact", ...) call. The form component will not need any change.
export const sendContactMessage = async ({ name, email, subject, message }) => {
  const body = `${message}\n\n${name} (${email})`;
  const url = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = url;

  return { ok: true };
};
