import Link from "next/link";

export default function Botton() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main wrap">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-logo">Comptabilité<span>CONTABILIDADE</span></Link>
          <p>Contabilidade próxima para decisões mais seguras.</p>
          <div className="site-footer-social" aria-label="Redes sociais">
            <a href="https://wa.me/5561982127834" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            <a href="https://www.instagram.com/comptabilitebsb?igsh=MWRjNm1tZDUzNnR5Ng==" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          </div>
        </div>

        <div className="site-footer-column">
          <h2>Contato</h2>
          <a href="tel:+5561982127834">(61) 98212-7834</a>
          <a href="mailto:comptabilitecontabil@gmail.com">comptabilitecontabil@gmail.com</a>
        </div>

        <div className="site-footer-column">
          <h2>Empresa</h2>
          <p>Comptabilite Contabilidade LTDA</p>
          <p>CNPJ: 44.749.020/0001-35</p>
          <p>CRC: DF 003618/O</p>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="wrap">© {new Date().getFullYear()} Comptabilité Contabilidade. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
