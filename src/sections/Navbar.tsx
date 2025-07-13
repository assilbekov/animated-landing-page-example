import Image from "next/image";
import logoSvg from "@/assets/images/logo.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 items-center px-4">
          <div>
            <Image src={logoSvg} alt="Logo" className="w-auto h-9" />
          </div>
          <div className="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
