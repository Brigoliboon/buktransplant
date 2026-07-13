import Link from "next/link";
import { siteConfig, navLinks } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white">
      <div className="px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div>
            <h3 className="text-xl font-bold text-accent mb-3">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Bukidnon, Philippines</p>
              <p>info@buktransplant.com</p>
              <p>+63 (XXX) XXX XXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="px-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}