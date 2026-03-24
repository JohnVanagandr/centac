import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../data/navigationData";

const NavLink = ({ link, isHome, closeMenu, mobile }) => {
  const baseClass = mobile
    ? "hover:text-brand transition-colors"
    : "nav-link-style";

  if (link.type === "route") {
    return (
      <Link to={`/${link.href}`} onClick={closeMenu} className={baseClass}>
        {link.name}
      </Link>
    );
  }

  const target = isHome ? `#${link.href}` : `/#${link.href}`;
  return (
    <a href={target} onClick={closeMenu} className={baseClass}>
      {link.name}
    </a>
  );
};

const Navigation = ({ isHome, closeMenu, mobile = false }) => {
  const containerClass = mobile
    ? "flex flex-col gap-6 font-display text-4xl text-white"
    : "hidden md:flex gap-8 font-semibold text-navy";

  return (
    <nav className={containerClass}>
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          link={link}
          isHome={isHome}
          closeMenu={closeMenu}
          mobile={mobile}
        />
      ))}
    </nav>
  );
};

export default Navigation;
