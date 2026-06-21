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
                >Légal — Confidentialité</span
              >
              <span
                class="h-px w-16 bg-gradient-to-r from-[#c5a059] to-transparent"
              ></span>
            </div>
            <h1
              class="title-gold font-serif text-6xl md:text-8xl font-bold uppercase tracking-tight leading-[0.92] mb-8"
            >
              Politique de confidentialité
            </h1>
            <p
              class="max-w-2xl text-lg text-[#d1c5b4] font-sans leading-relaxed mb-10"
            >
              Cette politique décrit comment l'Agence MGN Créative collecte,
              utilise et protège vos données personnelles lorsque vous naviguez
              sur notre site, soumettez une candidature, sollicitez une
              collaboration ou réservez un rendez-vous.
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
                    >11</span
                  >
                </div>
                <nav class="relative flex flex-col">
                  <span
                    class="absolute left-[3px] top-3 bottom-3 w-px bg-[#c5a059]/12"
                  ></span>
                  <a
                    href="#p"
                    :class="activeId === 'p1' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >01</span
                    >
                    <span>Responsable du traitement</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p2' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >02</span
                    >
                    <span>Données collectées</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p3' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >03</span
                    >
                    <span>Finalités du traitement</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p4' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >04</span
                    >
                    <span>Base légale</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p5' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >05</span
                    >
                    <span>Durée de conservation</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p6' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >06</span
                    >
                    <span>Droits à l'image & portfolios</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p7' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >07</span
                    >
                    <span>Partage des données</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p8' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >08</span
                    >
                    <span>Vos droits</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p9' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >09</span
                    >
                    <span>Cookies</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p10' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >10</span
                    >
                    <span>Sécurité des données</span>
                  </a>
                  <a
                    href="#"
                    :class="activeId === 'p11' ? 'toc-active' : ''"
                    class="toc-link group relative flex items-center gap-3 pl-6 py-2 text-[13px] text-[#a8a29e] hover:text-[#e8c176] transition-all duration-300"
                  >
                    <span
                      class="toc-dot absolute left-0 rotate-45 w-1.5 h-1.5 border border-[#c5a059]/50 transition-all duration-300"
                    ></span>
                    <span
                      class="toc-num font-serif text-[11px] text-[#c5a059]/50 w-5 flex-shrink-0 transition-colors"
                      >11</span
                    >
                    <span>Contact & réclamations</span>
                  </a>
                </nav>
              </div>
            </aside>
            <div class="lg:col-span-9 space-y-16">
              <section id="p1" data-spy class="reveal scroll-mt-32 relative">
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
                    Responsable du traitement
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    La présente politique décrit la manière dont l'Agence MGN
                    Créative (ci-après « MGN Créative », « nous » ou « l'Agence
                    ») collecte, utilise, conserve et protège les informations
                    personnelles des visiteurs de son site, des mannequins
                    candidats et des marques partenaires. En utilisant nos
                    services, vous acceptez les termes de la présente politique.
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
                        Cotonou, République du Bénin [adresse complète à
                        compléter]
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
              <section id="p2" data-spy class="reveal scroll-mt-32 relative">
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
                    Données collectées
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Selon votre interaction avec nous, nous sommes susceptibles
                    de collecter les catégories de données suivantes :
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
                        Candidature mannequin
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Nom et prénom</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Adresse email et téléphone</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Taille, mensurations, ville</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span
                            >Portfolio, lien Instagram et photographies</span
                          >
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
                        Demande de marque
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Nom de l'entreprise</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Type de projet et budget estimé</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Brief et contenu de la demande</span>
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
                        Prise de rendez-vous
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Date et créneau réservés</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Type de rendez-vous</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Nom et email du demandeur</span>
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
                        Navigation & technique
                      </p>
                      <ul class="space-y-2 text-[14px] text-[#d1c5b4]">
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Adresse IP, type de navigateur</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Pages visitées et durée</span>
                        </li>
                        <li class="flex gap-2.5">
                          <span
                            class="rotate-45 w-1 h-1 bg-[#c5a059] mt-[7px] flex-shrink-0"
                          ></span
                          ><span>Cookies de session et préférences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section id="p3" data-spy class="reveal scroll-mt-32 relative">
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
                    Finalités du traitement
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Vos données sont traitées pour les finalités suivantes :
                  </p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Gestion des candidatures</strong
                        >
                        : étudier les profils des mannequins soumis via le
                        formulaire dédié.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Demandes de collaboration</strong
                        >
                        : traiter et répondre aux sollicitations des
                        marques.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Prise de rendez-vous</strong
                        >
                        : organiser et confirmer les rendez-vous réservés en
                        ligne.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Prestation de services</strong
                        >
                        : exécuter les missions de branding, casting, production
                        et accompagnement confiées.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Amélioration du site</strong
                        >
                        : analyser l'usage du site pour en améliorer la
                        qualité.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]">Communication</strong> :
                        vous envoyer des informations sur nos offres, uniquement
                        avec votre consentement.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="p4" data-spy class="reveal scroll-mt-32 relative">
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
                    Base légale du traitement
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
                        >Votre
                        <strong class="text-[#e2e2e2]">consentement</strong>,
                        pour les communications commerciales et l'usage de vos
                        images.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >L'<strong class="text-[#e2e2e2]"
                          >exécution d'un contrat</strong
                        >, pour la réalisation de nos prestations.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Nos
                        <strong class="text-[#e2e2e2]"
                          >intérêts légitimes</strong
                        >, pour l'amélioration de nos services et la sécurité du
                        site.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Le respect d'<strong class="text-[#e2e2e2]"
                          >obligations légales</strong
                        >, pour la conservation de certains documents.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="p5" data-spy class="reveal scroll-mt-32 relative">
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
                    Durée de conservation
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Vos données sont conservées pour la durée strictement
                    nécessaire aux finalités poursuivies :
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
                        Données de contact
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        3 ans à compter du dernier échange
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Candidatures mannequins
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        2 ans à compter de la soumission (sauf engagement)
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Données clients / contrats
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        La durée de la relation + 10 ans (obligations légales)
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Données de navigation
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        13 mois maximum
                      </dd>
                    </div>
                    <div
                      class="group grid grid-cols-1 sm:grid-cols-[210px_1fr] transition-colors duration-300 hover:bg-[#c5a059]/[0.04]"
                    >
                      <dt
                        class="bg-[#161616] px-5 py-3.5 font-sans text-[11px] tracking-[0.2em] uppercase text-[#c5a059] border-l-2 border-transparent group-hover:border-[#c5a059] transition-colors"
                      >
                        Données de facturation
                      </dt>
                      <dd class="px-5 py-3.5 text-[#e2e2e2]">
                        10 ans (obligation légale)
                      </dd>
                    </div>
                  </dl>
                </div>
              </section>
              <section id="p6" data-spy class="reveal scroll-mt-32 relative">
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
                    Droits à l'image & portfolios
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    En tant qu'agence de mannequinat et de personal branding,
                    nous sommes amenés à traiter des photographies et contenus
                    représentant des personnes.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Toute utilisation de votre image (book, réseaux,
                        supports de campagne) fait l'objet d'une
                        <strong class="text-[#e2e2e2]"
                          >autorisation écrite préalable</strong
                        >
                        précisant la durée, les supports et le territoire.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Vous pouvez à tout moment retirer votre consentement
                        pour les usages futurs, sans effet rétroactif sur les
                        supports déjà diffusés.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Les portfolios soumis ne sont consultés que par les
                        personnes habilitées au sein de l'Agence et ne sont
                        jamais cédés sans accord.</span
                      >
                    </li>
                  </ul>
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
                      Pour les mineurs, toute soumission de portfolio et toute
                      exploitation d'image requièrent l'autorisation d'un
                      représentant légal.
                    </p>
                  </div>
                </div>
              </section>
              <section id="p7" data-spy class="reveal scroll-mt-32 relative">
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
                    Partage des données
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Nous ne vendons ni ne louons vos données à des tiers. Elles
                    peuvent être partagées uniquement :
                  </p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Avec nos prestataires techniques (hébergement,
                        messagerie, outils de réservation) liés par une
                        obligation de confidentialité.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Avec des marques ou partenaires impliqués dans un
                        projet vous concernant, avec votre accord.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        >Avec les autorités compétentes sur réquisition
                        légale.</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
              <section id="p8" data-spy class="reveal scroll-mt-32 relative">
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
                    Vos droits
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Conformément à la réglementation applicable en matière de
                    protection des données, vous disposez des droits suivants :
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit d'accès
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Obtenir une copie des données vous concernant.
                      </p>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit de rectification
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Corriger des données inexactes ou incomplètes.
                      </p>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit d'effacement
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Demander la suppression de vos données.
                      </p>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit d'opposition
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Vous opposer à un traitement de vos données.
                      </p>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit à la portabilité
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Recevoir vos données dans un format structuré.
                      </p>
                    </div>
                    <div
                      class="group relative border border-[#c5a059]/15 p-6 transition-all duration-500 hover:border-[#c5a059]/45 hover:-translate-y-1 hover:shadow-[0_22px_55px_-22px_rgba(197,160,89,0.4)]"
                    >
                      <span
                        class="absolute -top-1 -left-1 w-2 h-2 rotate-45 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></span>
                      <p class="font-serif text-[#e8c176] text-lg mb-1.5">
                        Droit de limitation
                      </p>
                      <p class="text-[14px] text-[#d1c5b4]">
                        Limiter le traitement dans certains cas.
                      </p>
                    </div>
                  </div>
                  <p>
                    Pour exercer ces droits, écrivez-nous à
                    <a
                      class="text-[#c5a059] underline decoration-[#c5a059]/40 underline-offset-4 hover:text-[#e8c176] hover:decoration-[#e8c176] transition-colors"
                      href="mailto:contact@mgncreative.com"
                      >contact@mgncreative.com</a
                    >.
                  </p>
                </div>
              </section>
              <section id="p9" data-spy class="reveal scroll-mt-32 relative">
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
                    Cookies
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Notre site peut utiliser des cookies pour améliorer votre
                    navigation. Un cookie est un petit fichier texte déposé sur
                    votre terminal lors de votre visite.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Cookies essentiels</strong
                        >
                        : nécessaires au fonctionnement du site (session,
                        sécurité).</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Cookies analytiques</strong
                        >
                        : mesure d'audience anonymisée.</span
                      >
                    </li>
                    <li class="flex gap-3">
                      <span
                        class="rotate-45 w-1.5 h-1.5 bg-[#c5a059] mt-[7px] flex-shrink-0"
                      ></span
                      ><span
                        ><strong class="text-[#e2e2e2]"
                          >Cookies de préférences</strong
                        >
                        : mémorisation de vos choix de navigation.</span
                      >
                    </li>
                  </ul>
                  <p>
                    Vous pouvez configurer votre navigateur pour refuser les
                    cookies ; certaines fonctionnalités pourraient alors être
                    affectées.
                  </p>
                </div>
              </section>
              <section id="p10" data-spy class="reveal scroll-mt-32 relative">
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
                    Sécurité des données
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Nous mettons en œuvre des mesures techniques et
                    organisationnelles appropriées — chiffrement, contrôles
                    d'accès, sensibilisation de nos collaborateurs — afin de
                    protéger vos données contre tout accès non autorisé,
                    divulgation, altération ou destruction. En cas de violation
                    susceptible d'engendrer un risque pour vos droits, nous vous
                    en informerons dans les meilleurs délais.
                  </p>
                </div>
              </section>
              <section id="p11" data-spy class="reveal scroll-mt-32 relative">
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
                    Contact & réclamations
                  </h2>
                  <div class="rule-grad mt-5"></div>
                </div>
                <div
                  class="sec-body space-y-4 text-[#d1c5b4] font-sans leading-relaxed text-[15px]"
                >
                  <p>
                    Pour toute question relative à cette politique ou pour
                    exercer vos droits :
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
                  <p>
                    Si vous estimez que vos droits ne sont pas respectés, vous
                    pouvez saisir l'autorité de protection des données
                    compétente dans votre pays.
                  </p>
                  <p>
                    Voir aussi nos
                    <router-link
                      to="/conditions-d-utilisation"
                      class="text-[#c5a059] underline decoration-[#c5a059]/40 underline-offset-4 hover:text-[#e8c176] hover:decoration-[#e8c176] transition-colors"
                      >Conditions d'utilisation</router-link
                    >.
                  </p>
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
