import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "../components/Logo";
import { SITE, telLink, waLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-leaf-100 bg-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-bark-700/80">
            Pure leaf-based plates and bowls, lovingly made by women artisans
            from the villages around Vrindavan.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-leaf-200 text-leaf-700 transition hover:bg-leaf-600 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-leaf-200 text-leaf-700 transition hover:bg-leaf-600 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-leaf-200 text-leaf-700 transition hover:bg-leaf-600 hover:text-white"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-bark-900">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-bark-700/80">
            <li><a href="#products" className="hover:text-leaf-700">Products</a></li>
            <li><a href="#about" className="hover:text-leaf-700">About us</a></li>
            <li><a href="#benefits" className="hover:text-leaf-700">Benefits</a></li>
            <li><a href="#process" className="hover:text-leaf-700">How it's made</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-bark-900">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-bark-700/85">
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 text-leaf-700" />
              <a href={telLink} className="hover:text-leaf-700">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 text-leaf-700" />
              <a href={`mailto:${SITE.email}`} className="hover:text-leaf-700">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 text-leaf-700" />
              <span>{SITE.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-leaf-100">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-bark-700/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with leaves, not plastic.</p>
        </div>
      </div>
    </footer>
  );
}
