"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ThemeSwitch } from "./theme-switch";
import { Button } from "@heroui/react";

// Custom Lock SVG Component
const LockIcon = ({ isUnlocked, isAnimating, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Lock body */}
      <rect
        x="6"
        y="10"
        width="12"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="transition-all duration-300"
      />

      {/* Lock shackle */}
      <path
        d="M9 10V6a3 3 0 0 1 6 0v4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className={`transition-all duration-500 ease-out ${
          isUnlocked
            ? "translate-x-1 -translate-y-0.5 rotate-6"
            : "translate-x-0 translate-y-0 rotate-0"
        }`}
        style={{
          transformOrigin: "12px 8px",
        }}
      />

      {/* Keyhole dot */}
      <circle
        cx="12"
        cy="14"
        r="1.5"
        fill="currentColor"
        className={`transition-all duration-200 ${
          isUnlocked ? "opacity-30" : "opacity-100"
        }`}
      />

      {/* Simple unlock indicator */}
      <circle
        cx="12"
        cy="14"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 18"
        className={`transition-all duration-400 ${
          isUnlocked ? "opacity-60 animate-spin" : "opacity-0"
        }`}
        style={{
          animationDuration: "2s",
          animationIterationCount: "1",
        }}
      />
    </svg>
  );
};

// Custom Close Icon Component
const CloseIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  // Check if current page is home
  const isHome = pathname === "/";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Projects", href: "/projects" },
        { name: "News", href: "/all-news" },
    // { name: "News", href: "/news" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClose = () => {
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  const handleTicket = () => {
    router.push("/contact-us");
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  // Scroll effect - Check for even 1px scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Agar 1px bhi scroll ho gaya hai to blur effect lagao
      if (currentScrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check - page load ke time scroll position check karo
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
        fixed w-full top-0 z-50
        bg-[#1B1111]
      `}
        // style={{
        //   opacity: "99%",
        // }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-between items-center w-full">
            {/* Logo */}
            {/* <Image src={logo} alt="Logo" className="w-auto h-16" /> */}
            <Link href="/">
            <div  className="cursor-pointer">
            <video autoPlay muted loop className="h-32 md:h-36" playsInline  >
              <source src="/assets/images/logoVideo1.mp4" type="video/mp4" />
            </video>
            </div>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              <div className="flex items-center gap-4 xl:gap-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleNavClose}
                    onMouseEnter={() => setHoveredItem(`desktop-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                      ${
                        pathname === item.href
                          ? "text-brand-secondary kumbh_sans_semibold"
                          : "text-white hover:text-brand-secondary"
                      } 
                      cursor-pointer text-base no-underline kumbh_sans_medium transition-all duration-300
                      flex items-center gap-2 group
                    `}
                  >
                    <span className="text-sm transition-transform duration-300">
                      {item.name}
                    </span>
                    <LockIcon
                      isUnlocked={
                        pathname === item.href ||
                        hoveredItem === `desktop-${index}`
                      }
                      isAnimating={hoveredItem === `desktop-${index}`}
                      className="flex-shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeSwitch />
              <Button
                as={Link}
                href="/contact-us"
                className="px-4 py-2 md:py-[12px] border border-brand-secondary flex justify-center gap-3 items-center bg-brand-secondary text-white rounded-full text-sm kumbh_sans_semibold hover:bg-brand-secondaryDark transition-colors duration-300"
              >
                Support Ticket
                <FaArrowRightLong className="block lg:hidden" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeSwitch />
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-brand-white z-[60] relative p-2"
              >
                <svg
                  className="w-6 h-6 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] lg:hidden">
          {/* Background Overlay with Animation */}
          <div
            className={`absolute inset-0 bg-brand-secondaryDark/20 backdrop-blur-xl
              ${isMenuOpen ? "animate-fadeIn" : "animate-fadeOut"}
            `}
          ></div>

          {/* Menu Content */}
          <div
            className={`relative h-full flex flex-col ${
              isMenuOpen ? "animate-slideInFromTop" : ""
            }`}
          >
            {/* Close Button - Top Center */}
            <div className="flex justify-center py-8">
              <button
                onClick={handleNavClose}
                aria-label="Close menu"
                className="rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer "
              >
                <CloseIcon className="text-white w-12 h-12" />
              </button>
            </div>

            {/* Menu Items - Centered */}
            <div className="flex flex-col justify-center items-center space-y-2 px-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 delay-${
                    index * 100
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClose}
                    onTouchStart={() => setHoveredItem(`mobile-${index}`)}
                    onTouchEnd={() => setHoveredItem(null)}
                    onMouseEnter={() => setHoveredItem(`mobile-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`
                      no-underline kumbh_sans_medium text-2xl
                      ${
                        pathname === item.href
                          ? "text-brand-secondary kumbh_sans_semibold"
                          : "text-white"
                      } 
                      cursor-pointer hover:text-brand-secondary transition-all duration-300
                      flex items-center gap-4 transform hover:scale-105 active:scale-95
                      py-3 px-6 rounded-lg hover:bg-white/10 group
                    `}
                  >
                    <span className=" transition-transform duration-300">
                      {item.name}
                    </span>
                    <LockIcon
                      isUnlocked={
                        pathname === item.href ||
                        hoveredItem === `mobile-${index}`
                      }
                      isAnimating={hoveredItem === `mobile-${index}`}
                      className="flex-shrink-0"
                    />
                  </Link>
                </div>
              ))}

              {/* Mobile Get Consultation Button */}
              <div className="pt-8 transform transition-all duration-700 delay-700">
                <Button
                  as={Link}
                  href="/contact-us"
                  onClick={handleNavClose}
                  className="px-8 py-6 border border-brand-secondary flex justify-center gap-3 items-center bg-brand-secondary text-white rounded-full text-lg kumbh_sans_semibold hover:bg-brand-secondaryDark transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Support Ticket
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out forwards;
        }

        .animate-slideInFromTop {
          animation: slideInFromTop 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
