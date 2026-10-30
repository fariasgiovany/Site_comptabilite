"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="site-menu">
      <button
        type="button"
        className="site-menu-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="site-mobile-menu"
      >
        <span className="site-menu-lines" aria-hidden="true"><span /><span /><span /></span>
      </button>

      {isOpen && (
        <div className="site-menu-panel" id="site-mobile-menu">
          {items.map((item) => (
            <Link key={item.id} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href="https://wa.me/5561982127834" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            Fale com um especialista <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
}
