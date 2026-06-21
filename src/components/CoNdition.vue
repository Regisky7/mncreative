<template>
  <div
    class="relative min-h-screen flex flex-col bg-[#131313] overflow-x-hidden text-[#e2e2e2]"
  >
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="grain"></div>
    <header
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-28 border-b transition-all duration-500"
      :class="
        scrolled
          ? 'border-[#c5a059]/30 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50'
          : 'border-[#c5a059]/20 bg-black/95 backdrop-blur-md'
      "
    >
      <img
        :src="logoSrc"
        alt="MGN Créative"
        class="h-24 w-auto transition-transform duration-700 hover:scale-110 hover:rotate-3"
      />
      <nav class="hidden md:flex items-center gap-12 font-sans">
        <router-link
          to="/"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
          >ACCUEIL</router-link
        >
        <router-link
          to="/services"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
          >SERVICES</router-link
        >
        <router-link
          to="/contact"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
          >CONTACT</router-link
        >
      </nav>
    </header>

    <main class="flex flex-col items-center pt-32 w-full">
      <div class="w-full">
        <section class="relative w-full overflow-hidden">
          <div
            class="pointer-events-none absolute -top-44 -right-44 w-[620px] h-[620px] rounded-full"
            style="
              background: radial-gradient(
                circle,
                rgba(197, 160, 89, 0.16),
                transparent 60%
              );
              filter: blur(50px);
            "
          ></div>
          <div
            class="pointer-events-none absolute top-24 -left-44 w-[520px] h-[520px] rounded-full"
            style="
              background: radial-gradient(
                circle,
                rgba(232, 193, 118, 0.08),
                transparent 60%
              );
              filter: blur(50px);
            "
          ></div>
          <div class="relative w-full max-w-[1280px] mx-auto px-5 pt-10 pb-16">
            <div class="flex items-center gap-4 mb-8">
              <span
                class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] animate-[spinDiamond_4s_ease-in-out_infinite]"
              ></span>
              <span
                class="font-sans text-[11px] tracking-[0.45em] uppercase text-[#e8c176]"
                >Légal — Conditions</span
              >
              <span
                class="h-px w-16 bg-gradient-to-r from-[#c5a059] to-transparent"
              ></span>
            </div>
            <h1
              class="title-gold font-serif text-6xl md:text-8xl font-bold uppercase tracking-tight leading-[0.92] mb-8"
            >
              Conditions d'utilisation
            </h1>
            <p
              class="max-w-2xl text-lg text-[#d1c5b4] font-sans leading-relaxed mb-10"
            >
              Les présentes conditions encadrent l'accès et l'usage du site de
              l'Agence MGN Créative ainsi que l'ensemble de ses services de
              personal branding et de représentation de talents.
            </p>
            <div class="flex flex-wrap items-center gap-6">
              <p
                class="font-sans text-[11px] tracking-[0.2em] uppercase text-[#78716c]"
              >
                Dernière mise à jour :
                <span class="text-[#c5a059]">21 juin 2026</span>
              </p>
              <router-link
                to="/"
                class="font-sans text-[11px] tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors border-b border-[#c5a059]/30 pb-1"
                >← Retour à l'accueil</router-link
              >
            </div>
          </div>
          <div class="rule-grad max-w-[1280px] mx-auto"></div>
        </section>

        <section class="w-full max-w-[1280px] mx-auto px-5 py-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside class="lg:col-span-3">
              <div class="lg:sticky lg:top-32">
                <div class="flex items-center justify-between mb-6">
                  <p
                    class="font-sans text-[10px] tracking-[0.3em] uppercase text-[#c5a059] flex items-center gap-2"
                  >
                    <span
                      class="rotate-45 inline-block w-1.5 h-1.5 bg-[#c5a059]"
                    ></span>
                    Sommaire
                  </p>
                  <span class="font-serif text-[11px] text-[#c5a059]/40"
                    >13</span
                  >
                </div>
                <nav class="relative flex flex-col">
                  <span
                    class="absolute left-[3px] top-3 bottom-3 w-px bg-[#c5a059]/12"
                  ></span>
                  <a
                    href=""
                    :class="activeId === 't1' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >01</span
                    >
                    <span>Présentation de la Société</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't2' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >02</span
                    >
                    <span>Accès au site</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't3' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >03</span
                    >
                    <span>Propriété intellectuelle</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't4' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >04</span
                    >
                    <span>Utilisation acceptable</span>
                  </a>
                  <a
                    href=""
                    :class="activeId === 't5' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >05</span
                    >
                    <span>Description des services</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't6' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >06</span
                    >
                    <span>Candidatures, RDV & collaborations</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't7' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >07</span
                    >
                    <span>Droits à l'image</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't8' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >08</span
                    >
                    <span>Limitation de responsabilité</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't9' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >09</span
                    >
                    <span>Liens hypertextes</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't10' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >10</span
                    >
                    <span>Données personnelles</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't11' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >11</span
                    >
                    <span>Droit applicable & juridiction</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't12' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >12</span
                    >
                    <span>Modifications</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 't13' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >13</span
                    >
                    <span>Contact</span>
                  </a>
                </nav>
              </div>
            </aside>
            <div class="lg:col-span-9 space-y-16">
              <section id="t1" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">01</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 01</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Présentation de la Société
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Les présentes Conditions Générales d'Utilisation (CGU)
                    régissent l'accès et l'utilisation du site de l'Agence MGN
                    Créative ainsi que l'ensemble des services proposés. En
                    accédant à ce site, vous acceptez sans réserve les présentes
                    conditions. Si vous ne les acceptez pas, veuillez ne pas
                    utiliser ce site.
                  </p>
                  <dl
                    class="border border-[#c5a059]/15 divide-y divide-[#c5a059]/10"
                  >
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Raison sociale
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        Agence MGN Créative
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Forme juridique
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        [forme juridique — à compléter]
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Siège social
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        Cotonou, République du Bénin [à compléter]
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Email
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        contact@mgncreative.com
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Téléphone
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        [numéro — à compléter]
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
              <section id="t2" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">02</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 02</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Accès au site
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    L'accès au site est libre et gratuit. MGN Créative se
                    réserve le droit de modifier, suspendre ou interrompre tout
                    ou partie du site, à tout moment et sans préavis, notamment
                    pour des raisons de maintenance ou de mise à jour.
                  </p>
                  <p>
                    Vous êtes responsable de la compatibilité de votre matériel
                    et de votre connexion internet avec l'utilisation du site.
                  </p>
                </div>
              </section>
              <section id="t3" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">03</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 03</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Propriété intellectuelle
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    L'ensemble des éléments du site (textes, graphismes,
                    logotypes, images, vidéos, identités visuelles, code, bases
                    de données) sont la propriété exclusive de MGN Créative ou
                    de ses partenaires et sont protégés par les lois relatives à
                    la propriété intellectuelle.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification ou
                    exploitation, totale ou partielle, est interdite sans
                    autorisation écrite préalable de l'Agence. Toute violation
                    pourra faire l'objet de poursuites.
                  </p>
                </div>
              </section>
              <section id="t4" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">04</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 04</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Utilisation acceptable
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>En utilisant ce site, vous vous engagez à :</p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Ne pas l'utiliser à des fins illicites ou contraires
                        aux présentes CGU.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Ne pas tenter d'accéder à des zones ou systèmes non
                        autorisés.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Ne pas transmettre de contenu malveillant, frauduleux
                        ou portant atteinte aux droits de tiers.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Ne pas perturber le fonctionnement normal du
                        site.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Fournir des informations exactes et complètes,
                        notamment dans les formulaires et réservations.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Respecter les droits de propriété intellectuelle de
                        l'Agence et de ses partenaires.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="t5" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">05</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 05</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Description des services
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    MGN Créative propose des services de personal branding et de
                    représentation de talents, notamment :
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <span
                        class="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-3">
                        Essentielle
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Audit d'image</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Stratégie de positionnement</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Optimisation des réseaux</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <span
                        class="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-3">
                        Premium
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Sessions photo studio</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Création de contenus éditoriaux</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Direction artistique</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <span
                        class="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-3">
                        Signature
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Conciergerie image</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Relations presse & agences</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Gestion de carrière</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <span
                        class="absolute -bottom-1 -right-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-3">
                        Marques
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Casting et représentation de mannequins</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Campagnes, défilés, événements VIP</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Les conditions propres à chaque prestation font l'objet d'un
                    devis et/ou d'un contrat distinct. En cas de contradiction,
                    les termes du contrat prévalent sur les présentes CGU.
                  </p>
                </div>
              </section>
              <section id="t6" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">06</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 06</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Candidatures, rendez-vous & collaborations
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >La soumission d'une candidature mannequin ou d'une
                        demande de marque
                        <strong class="text-[#e2e2e2]"
                          >ne constitue ni un engagement ni une garantie</strong
                        >
                        de représentation, de sélection ou de collaboration de
                        la part de l'Agence.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Les rendez-vous réservés via le calendrier en ligne
                        sont des
                        <strong class="text-[#e2e2e2]">demandes</strong>
                        confirmées par l'Agence ; un créneau peut être
                        réattribué en l'absence de confirmation.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Vous vous engagez à fournir des informations exactes ;
                        toute information erronée pourra entraîner l'annulation
                        de la demande.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="t7" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">07</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 07</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Droits à l'image
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Toute exploitation de l'image d'un talent (book, réseaux,
                    campagnes) est encadrée par une autorisation écrite
                    distincte précisant durée, supports et territoire. Aucune
                    image transmise via le site ne sera exploitée sans cet
                    accord. Les usages relatifs aux mineurs requièrent
                    l'autorisation d'un représentant légal.
                  </p>
                </div>
              </section>
              <section id="t8" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">08</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 08</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Limitation de responsabilité
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    MGN Créative s'efforce de maintenir le site accessible et à
                    jour mais ne garantit pas l'absence d'interruptions ou
                    d'erreurs. L'Agence ne saurait être tenue responsable :
                  </p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Des interruptions temporaires liées à la maintenance ou
                        à des incidents techniques.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >De l'utilisation faite du site par les visiteurs.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Des dommages indirects résultant de l'utilisation ou de
                        l'impossibilité d'utiliser le site.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Du contenu de sites tiers accessibles via des liens
                        hypertextes.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Des pertes de données résultant d'une utilisation
                        inappropriée du site.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="t9" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">09</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 09</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Liens hypertextes
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Le site peut contenir des liens vers des sites tiers,
                    fournis à titre informatif. MGN Créative n'exerce aucun
                    contrôle sur ces sites et décline toute responsabilité quant
                    à leur contenu, leurs pratiques ou leur disponibilité. Tout
                    lien vers notre site doit faire l'objet d'une autorisation
                    préalable.
                  </p>
                </div>
              </section>
              <section id="t10" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">10</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 10</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Protection des données personnelles
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    La collecte et le traitement de vos données sont régis par
                    notre
                    <router-link
                      to="/confidentialite"
                      class="text-[#c5a059] underline decoration-[#c5a059]/40 underline-offset-4 hover:text-[#e8c176] hover:decoration-[#e8c176] transition-colors"
                      >Politique de confidentialité</router-link
                    >, qui fait partie intégrante des présentes CGU. En
                    soumettant vos informations via nos formulaires ou le
                    calendrier de rendez-vous, vous acceptez le traitement de
                    vos données conformément à ladite politique.
                  </p>
                </div>
              </section>
              <section id="t11" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">11</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 11</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Droit applicable & juridiction
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Les présentes CGU sont soumises au droit de la République du
                    Bénin. Tout litige relatif à leur interprétation ou
                    exécution relève de la compétence exclusive des tribunaux
                    compétents de Cotonou.
                  </p>
                  <p>
                    Avant tout recours judiciaire, les parties s'engagent à
                    rechercher une résolution amiable dans un délai de 30 jours
                    suivant la notification du litige.
                  </p>
                  <div
                    class="relative border border-[#c5a059]/25 bg-[#c5a059]/[0.05] pl-7 pr-6 py-5 text-[#e2e2e2] overflow-hidden"
                  >
                    <span
                      class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#e8c176] to-[#c5a059]"
                    ></span>
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] mb-3"
                    ></span>
                    <p>
                      Si votre entité légale est établie hors du Bénin, adaptez
                      le droit applicable et la juridiction compétente à votre
                      pays d'immatriculation.
                    </p>
                  </div>
                </div>
              </section>
              <section id="t12" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">12</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 12</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Modifications des CGU
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    MGN Créative se réserve le droit de modifier les présentes
                    CGU à tout moment. Les modifications entrent en vigueur dès
                    leur publication. La poursuite de l'utilisation du site
                    après publication vaut acceptation des nouvelles conditions.
                  </p>
                </div>
              </section>
              <section id="t13" data-spy class="reveal scroll-mt-32 relative">
                <div class="relative mb-7">
                  <span class="ghost-num" aria-hidden="true">13</span>
                  <div class="relative flex items-center gap-3">
                    <span
                      class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] flex-shrink-0"
                    ></span>
                    <span
                      class="font-sans text-[11px] tracking-[0.35em] text-[#c5a059] uppercase"
                      >Section 13</span
                    >
                  </div>
                  <h2
                    class="relative font-serif text-[30px] md:text-[40px] text-[#e2e2e2] uppercase tracking-wide leading-[1.05] mt-3"
                  >
                    Contact
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>Pour toute question relative aux présentes conditions :</p>
                  <dl
                    class="border border-[#c5a059]/15 divide-y divide-[#c5a059]/10"
                  >
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Email
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        contact@mgncreative.com
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Téléphone
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        [numéro — à compléter]
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Adresse
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        Cotonou, République du Bénin [à compléter]
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="w-full border-t border-[#c5a059]/20 py-16 bg-black">
      <div class="flex flex-col items-center mb-8">
        <img :src="logoSrc" alt="MGN Créative" class="h-20 w-auto mb-2" />
        <p
          class="text-2xl tracking-[0.6em] uppercase text-[#c5a059] font-serif font-light"
        >
          AGENCE MGN CREATIVE
        </p>
      </div>
      <div class="flex justify-center gap-16 mb-8">
        <router-link
          to="/politique-de-confidentialite"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
          >POLITIQUE DE<br />CONFIDENTIALITÉ</router-link
        ><router-link
          to="/conditions-d-utilisation"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
          >CONDITIONS<br />D'UTILISATION</router-link
        >
      </div>
      <div class="flex justify-center mb-6">
        <div class="w-24 h-px bg-[#c5a059]/30"></div>
      </div>
      <p
        class="text-center text-[9px] tracking-[0.2em] uppercase text-[#c5a059]/60 font-sans"
      >
        © 2026 AGENCE MGN CRÉATIVE. TOUS DROITS RÉSERVÉS.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const logoSrc = ref(
  // Logo MGN Créative (asset Figma temporaire ~7 j). Remplace par ton asset local.
  "https://www.figma.com/api/mcp/asset/86da0435-0f0f-44b2-bfc8-21ec3283bcb0",
);

const scrolled = ref(false);
const activeId = ref("");
const progress = ref(0);
const onScroll = () => {
  scrolled.value = window.scrollY > 50;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
};

let revealObs = null;
let spyObs = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  spyObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activeId.value = e.target.id;
      });
    },
    { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));
  document.querySelectorAll("[data-spy]").forEach((el) => spyObs.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (revealObs) revealObs.disconnect();
  if (spyObs) spyObs.disconnect();
});
</script>

<style>
@keyframes spinDiamond {
  0%,
  100% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(225deg) scale(1.3);
  }
}
@keyframes goldShimmer {
  to {
    background-position: 200% center;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.in {
  opacity: 1;
  transform: none;
}

/* Titre or scintillant */
.title-gold {
  background-image: linear-gradient(
    110deg,
    #f3d9a0 0%,
    #e8c176 28%,
    #b8893f 52%,
    #e8c176 76%,
    #f6e0ab 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: goldShimmer 7s linear infinite;
}

/* Chiffre fantôme en filigrane */
.ghost-num {
  position: absolute;
  right: -0.01em;
  top: -0.42em;
  font-family: "Noto Serif", Georgia, serif;
  font-weight: 700;
  font-size: clamp(96px, 13vw, 176px);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(197, 160, 89, 0.1);
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* Filet dégradé */
.rule-grad {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(197, 160, 89, 0.6),
    transparent
  );
}

/* Sommaire */
.toc-link.toc-active {
  color: #e8c176;
  transform: translateX(4px);
}
.toc-link.toc-active .toc-num {
  color: #e8c176;
}
.toc-link.toc-active .toc-dot {
  background: #e8c176;
  border-color: #e8c176;
  box-shadow: 0 0 9px rgba(232, 193, 118, 0.7);
}
.toc-link:hover .toc-dot {
  border-color: #e8c176;
}

/* Grain */
.grain {
  position: fixed;
  inset: 0;
  z-index: 31;
  pointer-events: none;
  opacity: 0.045;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Barre de progression de lecture */
.progress-track {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 60;
  background: transparent;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #b8893f, #e8c176, #c5a059);
  box-shadow: 0 0 10px rgba(232, 193, 118, 0.5);
  transition: width 0.12s linear;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
  }
  .title-gold {
    animation: none;
  }
}
</style>
