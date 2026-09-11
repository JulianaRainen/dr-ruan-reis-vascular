import { ArrowUpRight, Check } from 'lucide-react';
import { ScrollEffects } from '@/components/scroll-effects';
import { ScrollText } from '@/components/scroll-text';
import { MobileNavigation } from '@/components/mobile-navigation';

export default function Medico() {
  return <main>
    <ScrollEffects/>
    <header className="site-header site-header-fixed">
      <a className="brand" href="/"><img src="/logo.png" alt="Dr. Ruan Reis, Cirurgião Vascular"/></a>
      <nav aria-label="Navegação principal">
        <a href="/">Início</a><a href="/o-medico" aria-current="page">O médico</a><a href="/tratamentos">Tratamentos</a><a href="/r-veins">R-Veins</a>
      </nav>
      <MobileNavigation currentPath="/o-medico"/>
      <a className="button button-small" href="https://wa.me/5573981893485" target="_blank" rel="noreferrer">Agendar consulta <ArrowUpRight size={16}/></a>
    </header>

    <section className="profile-hero section-wrap">
      <div>
        <p className="eyebrow">Cirurgião vascular · Aracaju</p>
        <h1><ScrollText text="Dr. Ruan Reis."/></h1>
        <p>Devolvendo saúde e leveza para suas pernas, com cuidado vascular pautado em escuta, confiança e segurança.</p>
        <a className="text-link profile-instagram" href="https://www.instagram.com/drruanreis_vasc/" target="_blank" rel="noreferrer">Acompanhar no Instagram <span>→</span></a>
      </div>
      <div className="profile-portrait"><img src="/RuanReis-consultorio.png" alt="Dr. Ruan Reis em seu consultório"/></div>
    </section>

    <section className="profile-details section-wrap scroll-reveal" data-reveal>
      <p className="eyebrow">Trajetória</p>
      <div>
        <h2>Uma prática dedicada à saúde vascular.</h2>
        <p>Graduado em Medicina pelas Faculdades Unidas do Norte de Minas, Dr. Ruan Reis realizou residência em Cirurgia Geral no Hospital Universitário de Sergipe, entre março de 2019 e março de 2021. Em março de 2021, iniciou a residência em Cirurgia Vascular no Hospital Heliópolis. Também realizou formações complementares, em 2022, relacionadas à ablação térmica e não térmica e ao pé diabético.</p>
        <ul>
          <li><Check size={18}/>2012–2017 · Graduação em Medicina — Faculdades Unidas do Norte de Minas</li>
          <li><Check size={18}/>Mar. 2019–mar. 2021 · Residência em Cirurgia Geral — Hospital Universitário de Sergipe</li>
          <li><Check size={18}/>Mar. 2021 · Início da residência em Cirurgia Vascular — Hospital Heliópolis</li>
          <li><Check size={18}/>2022 · Formação complementar em ablação térmica e não térmica e pé diabético</li>
        </ul>
      </div>
    </section>

    <section className="profile-details profile-approach section-wrap scroll-reveal" data-reveal>
      <p className="eyebrow">Seu cuidado</p>
      <div><h2>Escuta, clareza e escolhas individualizadas.</h2><p>Em cada consulta, o objetivo é compreender a história do paciente, explicar os caminhos possíveis e indicar condutas compatíveis com cada caso.</p></div>
    </section>

    <footer className="site-footer"><div className="footer-bottom section-wrap"><span>Dr. Ruan Reis · CRM 6087 · RQE 4959</span><a href="/">Voltar ao início</a></div></footer>
  </main>;
}
