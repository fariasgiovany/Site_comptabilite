"use client";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

const items = [
  { id: "irpf", label: "Imposto de Renda", href: "/#irpf" },
  { id: "servicos", label: "Serviços", href: "/#servicos" },
  { id: "empresa", label: "Nossa empresa", href: "/#empresa" },
];

export default function Navbartop() {
  return (
    <header className="site-header">
      <nav className="site-header-inner wrap" aria-label="Navegação principal">
        <Link className="site-brand" href="/" aria-label="Comptabilité, página inicial">
          <Image src="/images/complogo.jpg" width={48} height={48} alt="" className="site-brand-mark" />
          <span className="site-brand-name">Comptabilité<small>CONTABILIDADE</small></span>
        </Link>

        <div className="site-header-links">
          {items.map((item) => (
            <Link key={item.id} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <a className="site-header-contact" href="https://wa.me/5561982127834" target="_blank" rel="noopener noreferrer">
          Fale com um especialista <span aria-hidden="true">↗</span>
        </a>

        <Dropdown items={items} />
      </nav>
    </header>
  );
}
