import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  Shield, 
  Award, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp,
  Star
} from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="py-6 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center relative z-10">
         <div className="font-serif text-2xl font-semibold tracking-wide text-brand-text">
           Sonia Saldanha
         </div>
         <a href="#oferta" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-brand-accent/30 rounded-full text-xs font-medium uppercase tracking-wider text-brand-accent hover:bg-brand-accent hover:text-white transition-all">
           Inscreva-se
         </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs font-medium uppercase tracking-widest text-brand-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Especialização Premium</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-medium text-brand-text">
            Técnica Espanhola de <span className="italic text-brand-accent">Drenagem Linfática</span> Manual
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted max-w-lg leading-relaxed font-light">
            Uma formação profissional clara, estruturada e segura. Conquiste domínio técnico, confiança e diferencie-se no mercado da estética corporal.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="#oferta" className="inline-flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-brand-accent-hover transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
              Quero me especializar
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 text-sm text-brand-muted px-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-bg bg-stone-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Aluna" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span>Junte-se a outras profissionais</span>
            </div>
          </div>
        </div>

        <div className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none">
          {/* Elegant image placeholder */}
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
              alt="Procedimento de estética" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[260px] border border-stone-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="font-serif text-3xl font-semibold leading-none">100%</div>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">Foco em resultados visíveis e segurança nos atendimentos.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px w-full bg-brand-border"></div>
      </div>

      {/* Para Quem É & Objetivos */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-brand-accent" />
            <h2 className="font-serif text-3xl md:text-4xl">Para quem é?</h2>
          </div>
          <p className="text-brand-muted mb-8 font-light leading-relaxed">
            Esta formação foi desenhada tanto para quem está começando quanto para profissionais que buscam elevar seu nível de entrega.
          </p>
          <ul className="space-y-4">
            {[
              'Esteticistas',
              'Massoterapeutas',
              'Profissionais da área da beleza',
              'Iniciantes que desejam ingressar na área',
              'Profissionais que buscam especialização',
              'Quem deseja se destacar no mercado estético'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0"></div>
                <span className="text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-5 h-5 text-brand-accent" />
            <h2 className="font-serif text-3xl md:text-4xl">Objetivos do Curso</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-border">
            <ul className="space-y-6">
              {[
                'Aplicar corretamente a técnica espanhola de drenagem linfática.',
                'Entregar resultados visíveis às clientes.',
                'Atuar com segurança e domínio técnico.',
                'Elevar o padrão de atendimento.',
                'Aumentar a valorização profissional.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-brand-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O Que a Aluna Irá Aprender */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">O que você irá aprender</h2>
            <p className="text-brand-muted font-light leading-relaxed">
              Um currículo estruturado passo a passo para garantir que você domine cada aspecto da técnica espanhola.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Fundamentos', desc: 'A base teórica essencial da Técnica Espanhola de Drenagem Linfática.' },
              { title: 'Sequência Correta', desc: 'O passo a passo exato para uma aplicação fluida e eficiente.' },
              { title: 'Manobras Específicas', desc: 'Domine os movimentos precisos que caracterizam a técnica.' },
              { title: 'Indicações e Contraindicações', desc: 'Saiba exatamente quando aplicar e quando evitar o procedimento.' },
              { title: 'Potencializar Resultados', desc: 'Estratégias avançadas para maximizar os efeitos em cada sessão.' },
              { title: 'Experiência da Cliente', desc: 'Como proporcionar um atendimento memorável e fidelizador.' }
            ].map((module, i) => (
              <div key={i} className="bg-brand-bg rounded-2xl p-8 border border-brand-border/50 hover:border-brand-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-brand-accent font-serif font-semibold">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-brand-accent transition-colors">{module.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-light">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop" 
                alt="Benefícios da massagem" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 bg-white p-4 rounded-2xl shadow-lg border border-brand-border hidden md:block">
              <TrendingUp className="w-8 h-8 text-brand-accent" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Benefícios da Formação</h2>
            <div className="space-y-8">
              {[
                { title: 'Diferencial competitivo', desc: 'Destaque-se em um mercado concorrido com uma técnica exclusiva.' },
                { title: 'Maior segurança', desc: 'Atenda com total confiança, sabendo exatamente o que está fazendo.' },
                { title: 'Resultados mais eficazes', desc: 'Entregue o que suas clientes realmente buscam e esperam.' },
                { title: 'Autoridade profissional', desc: 'Seja reconhecida como uma especialista na sua região.' },
                { title: 'Aumento de faturamento', desc: 'Profissionais especializadas cobram mais e têm agendas mais cheias.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-1">{benefit.title}</h3>
                    <p className="text-brand-muted text-sm font-light">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Instrutora */}
      <section className="py-24 bg-[#1a1a1a] text-white px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-t-full rounded-b-full overflow-hidden border-4 border-[#2a2a2a]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Sonia Saldanha" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <div className="uppercase tracking-widest text-xs font-semibold text-brand-accent/80 mb-2">Sua Instrutora</div>
            <h2 className="font-serif text-4xl md:text-5xl">Sonia Saldanha</h2>
            <div className="w-12 h-px bg-brand-accent"></div>
            <p className="text-stone-400 font-light leading-relaxed text-lg">
              Profissional da área da estética com vasta experiência prática em drenagem linfática.
            </p>
            <p className="text-stone-400 font-light leading-relaxed">
              Seu trabalho é voltado para a formação técnica de profissionais que desejam atuar com excelência, segurança e reconhecimento no mercado.
            </p>
            <p className="text-stone-400 font-light leading-relaxed italic border-l-2 border-brand-accent pl-4 mt-6">
              "Minha missão é formar profissionais confiantes, capacitadas e valorizadas."
            </p>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Sua Especialização Começa Aqui</h2>
            <p className="text-brand-muted font-light">Garanta seu acesso à formação completa e dê o próximo passo na sua carreira.</p>
          </div>

          <div className="relative max-w-lg mx-auto mt-12">
            {/* THE REQUIRED BADGE */}
            <div className="absolute -top-4 left-6 z-20 bg-brand-bg border border-brand-border px-3.5 py-1.5 rounded-md shadow-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-brand-accent uppercase">ID: TE-DLM-001</span>
            </div>

            {/* THE CARD */}
            <div className="relative bg-white border border-brand-border rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-2">Formação Completa</h3>
                <p className="text-brand-muted text-sm">Técnica Espanhola de Drenagem Linfática Manual</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-xl font-medium text-brand-muted">R$</span>
                <span className="font-serif text-6xl font-medium text-brand-text tracking-tight">497</span>
                <span className="text-xl font-medium text-brand-muted">,00</span>
              </div>

              <div className="h-px w-full bg-brand-border mb-8"></div>

              <ul className="space-y-4 mb-10">
                {[
                  'Acesso completo a todas as videoaulas',
                  'Material didático de apoio em PDF',
                  'Certificado de conclusão incluso',
                  'Suporte direto para dúvidas',
                  'Acesso garantido por 12 meses'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-text font-light">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-brand-accent text-white py-4 rounded-xl text-sm font-medium uppercase tracking-wider hover:bg-brand-accent-hover transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Garantir Minha Vaga
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-muted font-medium uppercase tracking-wider">
                <Shield className="w-4 h-4 text-brand-accent" />
                <span>Compra 100% Segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Garantia */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-border shadow-sm mb-16 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
            <Shield className="w-10 h-10 text-brand-accent" />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-3">Garantia Incondicional de 7 Dias</h3>
            <p className="text-brand-muted font-light leading-relaxed">
              Acesse o curso, assista às aulas e avalie o material. Se por qualquer motivo você achar que a formação não é para você, basta enviar um e-mail dentro de 7 dias e devolveremos 100% do seu investimento. Risco zero.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Como recebo o acesso ao curso?',
              a: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar a plataforma de alunos.'
            },
            {
              q: 'O curso oferece certificado?',
              a: 'Sim! Ao concluir todas as aulas, você poderá emitir seu certificado de conclusão diretamente na plataforma.'
            },
            {
              q: 'Por quanto tempo terei acesso?',
              a: 'Você terá acesso completo ao curso, incluindo todas as atualizações, por 12 meses (1 ano) a partir da data da compra.'
            },
            {
              q: 'O curso serve para quem está começando do zero?',
              a: 'Sim. O curso foi estruturado para ensinar desde os fundamentos até as manobras específicas, sendo ideal tanto para iniciantes quanto para profissionais.'
            }
          ].map((faq, i) => (
            <div key={i} className="border border-brand-border rounded-2xl bg-white overflow-hidden transition-all">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-brand-text pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-muted transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-brand-muted font-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-stone-400 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="font-serif text-2xl text-white mb-6">Sonia Saldanha</div>
          <p className="text-sm font-light mb-8 max-w-md mx-auto">
            Formação técnica de profissionais que desejam atuar com excelência e segurança no mercado da estética.
          </p>
          <div className="h-px w-full max-w-sm mx-auto bg-stone-800 mb-8"></div>
          <p className="text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Sonia Saldanha. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
