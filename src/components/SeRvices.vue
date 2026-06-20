<template>
  <div class="min-h-screen flex flex-col bg-[#131313] overflow-x-hidden">
    <!-- ─── NAV ─── -->
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
          class="relative text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
          >SERVICES</router-link
        >
        <router-link
          to="/contact"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
          >CONTACT</router-link
        >
      </nav>
    </header>

    <main class="flex flex-col items-center pt-32">
      <!-- ─── HERO ─── -->
      <section class="w-full max-w-[1280px] mx-auto px-5 pt-8">
        <div
          class="flex items-center gap-6 mb-7 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
        >
          <span
            class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] animate-[spinDiamond_4s_ease-in-out_infinite]"
          ></span>
          <span
            class="text-xs tracking-[0.4em] uppercase text-[#e8c176] font-medium font-sans"
            >LUXURY IDENTITY</span
          >
        </div>

        <h1
          class="text-6xl font-bold uppercase tracking-tighter mb-12 text-[#e2e2e2] font-serif leading-none"
        >
          <span
            v-for="(l, i) in 'NOS SERVICES'"
            :key="`t-${i}`"
            class="inline-block opacity-0 animate-[letterReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            :class="l === ' ' ? 'w-4' : ''"
            :style="{ animationDelay: `${i * 50}ms` }"
            >{{ l === " " ? "\u00A0" : l }}</span
          >
        </h1>

        <div class="grid grid-cols-12 gap-6 pb-32 border-b border-[#775a19]/20">
          <div
            class="col-span-12 md:col-span-8 flex items-end opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
            style="animation-delay: 700ms"
          >
            <p
              class="max-w-lg text-lg leading-relaxed text-[#d1c5b4] font-sans"
            >
              MGN Créative hisse votre marque personnelle au niveau
              professionnel. Trois niveaux d'excellence conçus pour l'excellence
              dans le casting de mannequins.
            </p>
          </div>

          <div
            class="col-span-12 md:col-span-4 relative overflow-hidden h-[469px] bg-[#e2e2e2] group opacity-0 animate-[fadeScale_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style="animation-delay: 500ms"
          >
            <img
              :src="heroImgSrc"
              alt="Strategic depth"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div
              class="absolute bottom-6 left-6 text-white transition-transform duration-500 group-hover:-translate-y-1"
            >
              <p class="text-xs tracking-[0.2em] font-bold mb-1 font-sans">
                STRATEGIC DEPTH
              </p>
              <p class="text-2xl font-semibold font-serif">Est. 2024</p>
            </div>
          </div>
        </div>

        <!-- Brands -->
        <div ref="brandsRef" class="grid grid-cols-12 gap-6 pt-16 pb-24">
          <div
            class="col-span-12 md:col-span-4 transition-all duration-1000 ease-out"
            :class="
              visible.brands
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            "
          >
            <p
              class="text-xs tracking-[0.2em] font-bold mb-8 text-[#c5a059] font-sans flex items-center gap-3"
            >
              <span class="w-6 h-px bg-[#c5a059]"></span>
              POUR LES MARQUES
            </p>
            <h2
              class="text-5xl font-semibold uppercase tracking-[2px] leading-tight text-white font-serif"
            >
              CRÉATEUR<br />DE LIENS
            </h2>
          </div>

          <div
            class="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-2"
          >
            <div
              v-for="(brand, idx) in brandFeatures"
              :key="brand.num"
              class="transition-all duration-1000 ease-out"
              :class="
                visible.brands
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              "
              :style="{
                transitionDelay: visible.brands
                  ? `${300 + idx * 200}ms`
                  : '0ms',
              }"
            >
              <p
                class="text-xs tracking-[0.2em] font-bold mb-5 text-[#c5a059] font-sans"
              >
                {{ brand.num }} — {{ brand.label }}
              </p>
              <p class="text-base leading-6 text-[#f5f5dc] font-sans">
                {{ brand.text }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SERVICE CARDS ─── -->
      <section
        class="w-full px-20 py-24 relative"
        :style="{
          backgroundColor: '#3a5a47',
          backgroundImage: `url(${bgTextureSrc})`,
          backgroundSize: '512px 512px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
        }"
      >
        <span
          class="absolute top-10 left-10 w-3 h-3 rotate-45 opacity-40 bg-[#c5a059] animate-pulse"
        ></span>
        <span
          class="absolute bottom-10 right-10 w-3 h-3 rotate-45 opacity-40 bg-[#c5a059] animate-pulse"
        ></span>

        <div
          ref="cardsRef"
          class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <!-- ESSENTIELLE -->
          <div
            class="group bg-white border border-[#e9c176]/20 flex flex-col overflow-hidden shadow-xl transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)]"
            :class="
              visible.cards
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            "
            :style="{ transitionDelay: visible.cards ? '0ms' : '0ms' }"
          >
            <div class="pt-8 px-8">
              <div
                class="w-full h-[436px] border border-[#e9c176]/10 rounded-t-full bg-[#f0ede8] overflow-hidden"
              >
                <img
                  :src="cardEssentielleImg"
                  alt="Essentielle"
                  class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
            </div>
            <div class="p-8 flex flex-col flex-1">
              <div class="mb-6">
                <div
                  class="w-10 h-10 rounded-full border border-[#e8c176] flex items-center justify-center transition-all duration-500 group-hover:bg-[#e8c176] group-hover:rotate-12"
                >
                  <span
                    class="text-sm text-[#e8c176] font-sans transition-colors duration-500 group-hover:text-black"
                    >01</span
                  >
                </div>
              </div>
              <h3
                class="text-3xl font-semibold uppercase tracking-[0.1em] mb-1 text-black font-serif"
              >
                ESSENTIELLE
              </h3>
              <p
                class="italic text-base mb-5 pb-5 border-b border-[#e9c176]/10 text-[#78716c] font-sans"
              >
                Personal Branding de base
              </p>
              <ul class="space-y-4 flex-1">
                <li
                  v-for="item in essentiellItems"
                  :key="item"
                  class="flex items-center gap-4 group/item"
                >
                  <span
                    class="rotate-45 inline-block w-1.5 h-1.5 flex-shrink-0 bg-[#c5a059] transition-transform duration-300 group-hover/item:scale-150"
                  ></span>
                  <span
                    class="text-[10px] tracking-widest uppercase text-[#57534e] font-sans transition-all duration-300 group-hover/item:tracking-[0.2em]"
                    >{{ item }}</span
                  >
                </li>
              </ul>
              <button
                class="mt-20 w-full py-4 border border-[#e9c176] text-base tracking-wide text-[#e8c176] font-sans relative overflow-hidden group/btn transition-colors duration-300 hover:text-black"
              >
                <span class="relative z-10">CHOISIR CE PACK</span>
                <span
                  class="absolute inset-0 bg-[#e9c176] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-400"
                ></span>
              </button>
            </div>
          </div>

          <!-- PREMIUM -->
          <div
            class="group bg-black border border-[#e9c176]/40 flex flex-col overflow-hidden shadow-2xl relative transition-all duration-700 ease-out md:scale-105 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(232,193,118,0.3)] hover:border-[#e8c176]"
            :class="
              visible.cards
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            "
            :style="{ transitionDelay: visible.cards ? '150ms' : '0ms' }"
          >
            <div
              class="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-[#e8c176] animate-[badgeGlow_2.5s_ease-in-out_infinite]"
            >
              <span
                class="text-[9px] tracking-[0.2em] uppercase text-black font-sans"
                >MOST POPULAR</span
              >
            </div>
            <div class="pt-8 px-8">
              <div
                class="w-full h-[436px] border border-[#e9c176]/20 rounded-t-full bg-[#1a1a1a] overflow-hidden"
              >
                <img
                  :src="cardPremiumImg"
                  alt="Premium"
                  class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
            </div>
            <div class="p-8 flex flex-col flex-1">
              <div class="mb-6">
                <div
                  class="w-10 h-10 rounded-full border border-[#e8c176] flex items-center justify-center transition-all duration-500 group-hover:bg-[#e8c176] group-hover:rotate-12"
                >
                  <span
                    class="text-sm text-[#e8c176] font-sans transition-colors duration-500 group-hover:text-black"
                    >02</span
                  >
                </div>
              </div>
              <h3
                class="text-3xl font-semibold uppercase tracking-[0.1em] mb-1 text-[#e8c176] font-serif"
              >
                PREMIUM
              </h3>
              <p
                class="italic text-base mb-5 pb-5 border-b border-[#e9c176]/20 text-[#a8a29e] font-sans"
              >
                Branding + Production de contenu
              </p>
              <ul class="space-y-4 flex-1">
                <li
                  v-for="item in premiumItems"
                  :key="item"
                  class="flex items-center gap-4 group/item"
                >
                  <span
                    class="rotate-45 inline-block w-1.5 h-1.5 flex-shrink-0 bg-[#c5a059] transition-transform duration-300 group-hover/item:scale-150"
                  ></span>
                  <span
                    class="text-[10px] tracking-widest uppercase text-[#d6d3d1] font-sans transition-all duration-300 group-hover/item:tracking-[0.2em]"
                    >{{ item }}</span
                  >
                </li>
              </ul>
              <button
                class="mt-20 w-full py-4 bg-[#e9c176] text-base tracking-wide text-black font-sans relative overflow-hidden group/btn"
              >
                <span class="relative z-10">DÉCOUVRIR LE PREMIUM</span>
                <span
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                ></span>
              </button>
            </div>
          </div>

          <!-- SIGNATURE -->
          <div
            class="group bg-white border border-[#e9c176]/20 flex flex-col overflow-hidden shadow-xl transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)]"
            :class="
              visible.cards
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            "
            :style="{ transitionDelay: visible.cards ? '300ms' : '0ms' }"
          >
            <div class="pt-8 px-8">
              <div
                class="w-full h-[436px] border border-[#e9c176]/10 rounded-t-full bg-[#f0ede8] opacity-80 overflow-hidden"
              >
                <img
                  :src="cardSignatureImg"
                  alt="Signature"
                  class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
            </div>
            <div class="p-8 flex flex-col flex-1">
              <div class="mb-6">
                <div
                  class="w-10 h-10 rounded-full border border-[#e8c176] flex items-center justify-center transition-all duration-500 group-hover:bg-[#e8c176] group-hover:rotate-12"
                >
                  <span
                    class="text-sm text-[#e8c176] font-sans transition-colors duration-500 group-hover:text-black"
                    >03</span
                  >
                </div>
              </div>
              <h3
                class="text-3xl font-semibold uppercase tracking-[0.1em] mb-1 text-black font-serif"
              >
                SIGNATURE
              </h3>
              <p
                class="italic text-base mb-5 pb-5 border-b border-[#e9c176]/10 text-[#78716c] font-sans"
              >
                Accompagnement complet
              </p>
              <ul class="space-y-4 flex-1">
                <li
                  v-for="item in signatureItems"
                  :key="item"
                  class="flex items-center gap-4 group/item"
                >
                  <span
                    class="rotate-45 inline-block w-1.5 h-1.5 flex-shrink-0 bg-[#c5a059] transition-transform duration-300 group-hover/item:scale-150"
                  ></span>
                  <span
                    class="text-[10px] tracking-widest uppercase text-[#57534e] font-sans transition-all duration-300 group-hover/item:tracking-[0.2em]"
                    >{{ item }}</span
                  >
                </li>
              </ul>
              <button
                class="mt-20 w-full py-4 bg-black text-base tracking-wide text-white font-sans relative overflow-hidden group/btn transition-colors duration-300 hover:text-black"
              >
                <span class="relative z-10">CONTACTER L'AGENCE</span>
                <span
                  class="absolute inset-0 bg-[#e9c176] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-400"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── QUOTE ─── -->
      <section class="w-full py-24 px-8 bg-[#131313]">
        <div
          ref="quoteRef"
          class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div
            class="flex-shrink-0 flex justify-center w-96 transition-all duration-1000 ease-out"
            :class="
              visible.quote ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            "
          >
            <div
              class="border border-[#e9c176]/40 w-56 h-80 rounded-t-full bg-[#1f2020] relative overflow-hidden group cursor-pointer"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#e8c176]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>
              <div
                class="absolute inset-x-0 -bottom-full h-full bg-gradient-to-t from-[#e8c176]/20 to-transparent group-hover:bottom-0 transition-all duration-1000"
              ></div>
            </div>
          </div>
          <div
            class="flex-1 transition-all duration-1000 ease-out"
            :class="
              visible.quote
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            "
            style="transition-delay: 200ms"
          >
            <span
              class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] mb-8 animate-[spinDiamond_4s_ease-in-out_infinite]"
            ></span>
            <blockquote
              class="text-5xl leading-tight mb-8 text-[#e2e2e2] font-serif font-normal"
            >
              « Le luxe n'est pas une question de visibilité. C'est une présence
              inoubliable. »
            </blockquote>
            <p
              class="text-xs tracking-[0.4em] uppercase font-medium text-[#e8c176] font-sans"
            >
              — MGN CRÉATIVE
            </p>
          </div>
        </div>
      </section>

      <!-- ─── METHODOLOGY ─── -->
      <section class="w-full max-w-[1280px] mx-auto px-5 py-24">
        <div
          ref="methodHeaderRef"
          class="flex flex-col items-center gap-4 mb-16 transition-all duration-1000 ease-out"
          :class="
            visible.methodHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          "
        >
          <span
            class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] animate-[spinDiamond_4s_ease-in-out_infinite]"
          ></span>
          <h2
            class="text-3xl font-semibold uppercase tracking-[0.5em] text-center text-[#e2e2e2] font-serif"
          >
            NOTRE MÉTHODOLOGIE
          </h2>
        </div>

        <div
          ref="methodGridRef"
          class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]"
        >
          <div
            class="group md:col-span-2 md:row-span-2 relative border border-[#9a8f80]/20 bg-[#1b1c1c] flex flex-col justify-end p-12 overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:border-[#e8c176]/50"
            :class="
              visible.methodGrid
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            "
            :style="{ transitionDelay: visible.methodGrid ? '0ms' : '0ms' }"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent to-[#e8c176]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            ></div>
            <div
              class="absolute top-8 left-8 w-12 h-12 rounded-full border border-[#e9c176]/30 flex items-center justify-center transition-all duration-500 group-hover:border-[#e8c176] group-hover:scale-110"
            >
              <span
                class="text-base text-[#e9c176]/40 font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
                >01</span
              >
            </div>
            <h4
              class="relative text-2xl font-medium uppercase tracking-wide mb-4 text-[#e2e2e2] font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
            >
              AUDIT D'IDENTITÉ
            </h4>
            <p
              class="relative text-base leading-6 max-w-sm text-[#d1c5b4] font-sans"
            >
              Nous analysons votre profil actuel et définissons vos objectifs de
              carrière avec une précision chirurgicale.
            </p>
          </div>

          <div
            class="group md:col-span-2 border border-[#9a8f80]/20 bg-[#2a2a2a] flex items-center gap-8 p-12 cursor-pointer transition-all duration-700 ease-out hover:border-[#e8c176]/50 hover:bg-[#303030]"
            :class="
              visible.methodGrid
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            "
            :style="{ transitionDelay: visible.methodGrid ? '150ms' : '0ms' }"
          >
            <div
              class="w-12 h-12 rounded-full border border-[#e9c176]/30 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-[#e8c176] group-hover:scale-110"
            >
              <span
                class="text-base text-[#e9c176]/30 font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
                >02</span
              >
            </div>
            <div>
              <h4
                class="text-2xl font-medium uppercase tracking-wide mb-2 text-[#e2e2e2] font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
              >
                DESIGN NARRATIF
              </h4>
              <p class="text-base leading-6 text-[#d1c5b4] font-sans">
                Un plan d'action sur mesure pour votre déploiement digital et
                physique.
              </p>
            </div>
          </div>

          <div
            class="group border border-[#9a8f80]/20 bg-black flex flex-col items-center justify-center p-10 cursor-pointer transition-all duration-700 ease-out hover:border-[#e8c176]/50"
            :class="
              visible.methodGrid
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            "
            :style="{ transitionDelay: visible.methodGrid ? '300ms' : '0ms' }"
          >
            <div
              class="w-10 h-10 rounded-full border border-[#e9c176]/30 flex items-center justify-center mb-4 transition-all duration-500 group-hover:border-[#e8c176] group-hover:scale-110 group-hover:rotate-12"
            >
              <span
                class="text-base text-[#e9c176]/30 font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
                >03</span
              >
            </div>
            <p
              class="text-[10px] tracking-[0.2em] uppercase text-center text-[#e8c176] font-medium font-sans"
            >
              Création de contenus
            </p>
          </div>

          <div
            class="group border border-[#e9c176]/30 bg-[#353535] flex flex-col items-center justify-center p-10 cursor-pointer transition-all duration-700 ease-out hover:border-[#e8c176] hover:bg-[#3d3d3d]"
            :class="
              visible.methodGrid
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            "
            :style="{ transitionDelay: visible.methodGrid ? '450ms' : '0ms' }"
          >
            <div
              class="w-10 h-10 rounded-full border border-[#e9c176]/30 flex items-center justify-center mb-4 transition-all duration-500 group-hover:border-[#e8c176] group-hover:scale-110 group-hover:rotate-12"
            >
              <span
                class="text-base text-[#e9c176]/30 font-serif transition-colors duration-500 group-hover:text-[#e8c176]"
                >04</span
              >
            </div>
            <p
              class="text-[10px] tracking-[0.2em] uppercase text-center text-[#e8c176] font-medium font-sans"
            >
              ACCÉLÉRATEUR D'INFLUENCE
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- ─── FOOTER ─── -->
    <footer class="w-full border-t border-[#c5a059]/20 py-16 bg-black">
      <div class="flex flex-col items-center mb-8">
        <img
          :src="logoSrc"
          alt="MGN Créative"
          class="h-20 w-auto mb-2 transition-transform duration-500 hover:scale-110"
        />
        <p
          class="text-2xl tracking-[0.6em] uppercase text-[#c5a059] font-serif font-light"
        >
          AGENCE MGN CREATIVE
        </p>
      </div>
      <div class="flex justify-center gap-16 mb-8">
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
          >POLITIQUE DE<br />CONFIDENTIALITÉ</a
        >
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
          >CONDITIONS<br />D'UTILISATION</a
        >
      </div>
      <div class="flex justify-center mb-6">
        <div class="w-24 h-px bg-[#c5a059]/30"></div>
      </div>
      <p
        class="text-center text-[9px] tracking-[0.2em] uppercase text-[#c5a059]/60 font-sans"
      >
        © 2026 ELITE BRANDING AGENCY. TOUS DROITS RÉSERVÉS.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

const logoSrc = ref(
  "https://www.figma.com/api/mcp/asset/86da0435-0f0f-44b2-bfc8-21ec3283bcb0",
);

// ★ IMAGE DU HAUT modifiée — beauté lumineuse épurée
const heroImgSrc = ref(
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
);

const bgTextureSrc =
  "data:image/jpeg;base64,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";

const cardEssentielleImg = ref(
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=900&fit=crop",
);
const cardPremiumImg = ref(
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop",
);
const cardSignatureImg = ref(
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=900&fit=crop",
);

const essentiellItems = ref([
  "AUDIT D'IMAGE",
  "STRATÉGIE DE POSITIONNEMENT",
  "OPTIMISATION RÉSEAUX",
]);
const premiumItems = ref([
  "TOUT LE PACK ESSENTIELLE",
  "2 SESSIONS PHOTO STUDIO / MOIS",
  "CRÉATION DE REELS ÉDITORIAUX",
  "DIRECTION ARTISTIQUE",
]);
const signatureItems = ref([
  "CONCIERGERIE IMAGE 24/7",
  "RELATIONS PRESSE & AGENCES",
  "PLACEMENT ÉVÉNEMENTIEL VIP",
  "GESTION DE CARRIÈRE TOTALE",
]);

const brandFeatures = ref([
  {
    num: "01",
    label: "ACCÈS PRIVILÉGIÉ",
    text: "Nous offrons un accès direct à des professionnels de haut niveau et aux géants de l'industrie, garantissant que votre message parvienne aux mains les plus influentes",
  },
  {
    num: "02",
    label: "INTÉGRATION HARMONISÉE",
    text: "Les partenariats sont minutieusement sélectionnés pour garantir une résonance organique entre les valeurs de la marque et l'identité des talents, évitant ainsi l'aspect purement transactionnel des agences traditionnelles.",
  },
]);

const scrolled = ref(false);
const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const brandsRef = ref(null);
const cardsRef = ref(null);
const quoteRef = ref(null);
const methodHeaderRef = ref(null);
const methodGridRef = ref(null);
const visible = reactive({
  brands: false,
  cards: false,
  quote: false,
  methodHeader: false,
  methodGrid: false,
});
let observer = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  const refMap = new Map([
    [brandsRef.value, "brands"],
    [cardsRef.value, "cards"],
    [quoteRef.value, "quote"],
    [methodHeaderRef.value, "methodHeader"],
    [methodGridRef.value, "methodGrid"],
  ]);
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const key = refMap.get(entry.target);
        if (entry.isIntersecting && key) {
          visible[key] = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  refMap.forEach((_, el) => {
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (observer) observer.disconnect();
});
</script>

<style>
@keyframes letterReveal {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes spinDiamond {
  0%,
  100% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(225deg) scale(1.3);
  }
}
@keyframes badgeGlow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(232, 193, 118, 0.4);
  }
  50% {
    box-shadow: 0 0 20px 4px rgba(232, 193, 118, 0.6);
  }
}
</style>
