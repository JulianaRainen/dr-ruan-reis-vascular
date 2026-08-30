import { ArrowUpRight, MapPin } from 'lucide-react';

const treatments = [
  ['Cirurgia vascular', 'Avaliação e tratamento individualizado para doenças venosas e arteriais.'],
  ['Varizes e microvarizes', 'Estratégias minimamente invasivas definidas após diagnóstico preciso.'],
  ['Doppler vascular', 'Exame que orienta decisões clínicas com mais segurança e clareza.'],
];

export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#inicio" aria-label="Dr. Ruan Reis, início"><img src="/logo.png" alt="Dr. Ruan Reis, Cirurgião Vascular"/></a><nav aria-label="Navegação principal"><a href="#medico">O médico</a><a href="#tratamentos">Tratamentos</a><a href="/r-veins">R-Veins</a></nav><a className="button button-small" href="https://wa.me/5573981893485" target="_blank" rel="noreferrer">Agendar consulta <ArrowUpRight size={16}/></a></header>
    <section id="inicio" className="hero section-wrap"><div className="hero-copy"><p className="eyebrow">Cirurgia vascular · Sergipe</p><h1>Cuidado vascular para seguir em <em>movimento.</em></h1><p className="lede">Diagnóstico cuidadoso e tratamentos conduzidos com precisão técnica, conversa clara e respeito ao seu ritmo.</p><div className="hero-actions"><a className="button" href="https://wa.me/5573981893485" target="_blank" rel="noreferrer">Agendar avaliação <ArrowUpRight size={18}/></a><a className="text-link" href="#medico">Conheça a abordagem <span>↓</span></a></div></div><div className="hero-portrait"><img src="/RuanReis.jpg" alt="Dr. Ruan Reis"/></div><aside className="hero-note"><span>CRM 6087</span><span>RQE 4959</span><span>Atendimento particular</span></aside></section>
    <section id="medico" className="intro section-wrap"><p className="eyebrow">Uma medicina que começa pela escuta</p><div className="intro-grid"><h2>Mais do que tratar um exame, entender o que faz diferença na sua rotina.</h2><div><p>O acompanhamento vascular pede precisão — e também contexto. Cada plano de cuidado parte de uma avaliação clínica completa, de expectativas alinhadas e de escolhas explicadas sem pressa.</p><a className="text-link" href="#tratamentos">Ver áreas de atuação <span>↓</span></a></div></div></section>
    <section id="tratamentos" className="treatments"><div className="section-wrap"><div className="section-heading"><p className="eyebrow">Áreas de atuação</p><h2>Decisões guiadas por diagnóstico.</h2></div><div className="treatment-list">{treatments.map(([title, description]) => <article key={title} className="treatment"><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight aria-hidden="true"/></article>)}</div></div></section>
    <section className="protocol section-wrap"><div><p className="eyebrow">Protocolo R-Veins</p><h2>Uma rota mais precisa para o tratamento de varizes.</h2></div><div className="protocol-body"><p>Conheça uma abordagem que integra avaliação, recursos de imagem e técnicas minimamente invasivas. A indicação depende sempre de consulta e diagnóstico individual.</p><a className="button button-outline" href="/r-veins">Conhecer R-Veins <ArrowUpRight size={18}/></a></div></section>
    <section className="contact section-wrap"><div><p className="eyebrow">Primeiro passo</p><h2>Vamos conversar sobre o seu cuidado.</h2></div><div className="contact-details"><a href="https://wa.me/5573981893485" target="_blank" rel="noreferrer">Agendar uma avaliação <ArrowUpRight size={20}/></a><p><MapPin size={17}/> Sergipe · atendimento com hora marcada</p></div></section>
    <footer className="site-footer section-wrap"><span>Dr. Ruan Reis</span><span>CRM 6087 · RQE 4959</span><span>© 2026</span></footer>
  </main>;
}
