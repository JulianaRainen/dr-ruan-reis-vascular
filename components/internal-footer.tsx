const whatsappUrl = 'https://wa.me/5573981893485';
const instagramUrl = 'https://www.instagram.com/drruanreis_vasc/';

export function InternalFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-complete section-wrap">
        <div className="footer-identity">
          {/* eslint-disable-next-line @next/next/no-img-element -- preserva o tratamento visual existente da marca. */}
          <img src="/logo.png" alt="Dr. Ruan Reis, Cirurgião Vascular" />
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <p>Navegação</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a navegação do projeto usa âncoras para compatibilidade com o runtime Vinext. */}
          <a href="/">Início</a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a navegação do projeto usa âncoras para compatibilidade com o runtime Vinext. */}
          <a href="/o-medico">O médico</a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a navegação do projeto usa âncoras para compatibilidade com o runtime Vinext. */}
          <a href="/tratamentos">Tratamentos</a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a navegação do projeto usa âncoras para compatibilidade com o runtime Vinext. */}
          <a href="/r-veins">R-Veins</a>
        </nav>

        <div className="footer-contact">
          <p>Contato</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">@drruanreis_vasc</a>
        </div>
      </div>

      <div className="footer-bottom section-wrap">
        <span>© 2026 Dr. Ruan Reis · CRM 6087 · RQE 4959</span>
        <span>Conteúdo informativo. Não substitui avaliação médica.</span>
      </div>
    </footer>
  );
}
