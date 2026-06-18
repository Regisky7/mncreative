<template>
  <div class="min-h-screen flex flex-col bg-[#131313]">
    <!-- ─── TOP NAV ─── -->
    <header
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-28 border-b border-[#c5a059]/20 bg-black/95 backdrop-blur-md"
    >
      <img :src="logoSrc" alt="MGN Créative" class="h-24 w-auto" />
      <nav class="hidden md:flex items-center gap-12 font-sans">
        <a
          href="#"
          class="text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
          >ACCUEIL</a
        >
        <a
          href="#"
          class="text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors"
          >SERVICES</a
        >
        <a
          href="#"
          class="text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors"
          >CONTACT</a
        >
      </nav>
    </header>

    <main class="flex flex-col">
      <!-- ─── HERO ─── -->
      <section
        class="relative min-h-[1200px] flex flex-col items-center justify-center pt-72 pb-48 overflow-hidden"
      >
        <!-- Background model -->
        <div
          class="absolute inset-0 opacity-40 overflow-hidden pointer-events-none"
        >
          <img
            :src="heroModelSrc"
            alt=""
            class="w-full h-[160%] object-cover absolute left-0 -top-[30%]"
          />
        </div>
        <!-- Black overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Arch motif bottom -->
        <div
          class="absolute -bottom-24 left-0 right-0 flex justify-center pointer-events-none"
        >
          <div
            class="border-l border-r border-t border-[#e8c176] w-24 h-48 rounded-t-full opacity-30"
          ></div>
        </div>

        <!-- Content -->
        <div
          class="relative z-10 max-w-[1536px] w-full px-16 flex flex-col items-center"
        >
          <h1
            class="text-white text-center font-serif font-normal mb-4"
            style="
              font-size: clamp(80px, 12vw, 230px);
              line-height: 1;
              letter-spacing: -0.05em;
            "
          >
            <span class="block">MGN</span>
            <span class="block">CRÉATIVE</span>
          </h1>

          <p
            class="text-[#e8c176]/90 text-center font-serif text-base tracking-wide mb-12 max-w-3xl"
          >
            AGENCE DE PERSONAL BRANDING POUR TOP MODÈLES, PROMOTEURS &amp;
            MARQUES
          </p>

          <div class="flex flex-col sm:flex-row gap-6">
            <button
              class="bg-[#e9c176] text-[#4e3700] font-sans text-lg px-12 py-5 hover:opacity-90 transition-opacity"
            >
              DEVENIR INCONTOURNABLE
            </button>
            <button
              class="border border-[#e9c176] text-[#e8c176] font-sans text-lg px-12 py-5 hover:bg-[#e9c176]/10 transition-colors"
            >
              NOTRE PORTFOLIO
            </button>
          </div>
        </div>
      </section>

      <!-- ─── 4 PILIERS ─── -->
      <section class="w-full bg-[#131313] px-12 md:px-48 py-32">
        <div class="max-w-[1536px] mx-auto">
          <!-- Header row -->
          <div
            class="flex flex-col md:flex-row justify-between items-end gap-8 pb-12 border-b border-[#4e4639]"
          >
            <div class="max-w-xl">
              <p class="text-[#e8c176] font-sans text-base mb-4">
                NOTRE MÉTHODOLOGIE
              </p>
              <h2 class="text-white font-serif text-5xl leading-tight">
                4 PILIERS DE SERVICE
              </h2>
            </div>
            <p
              class="text-[#c8c6c5] font-sans text-base md:text-right max-w-sm"
            >
              Une approche holistique pour transformer votre image en un atout
              médiatique et commercial.
            </p>
          </div>

          <!-- Cards grid -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
          >
            <div
              v-for="pillar in pillars"
              :key="pillar.num"
              class="border border-[#4e4639] p-8 flex flex-col gap-4"
              :class="pillar.dark ? 'bg-black' : 'bg-transparent'"
            >
              <div
                class="w-12 h-12 rounded-full border border-[#e8c176] flex items-center justify-center"
              >
                <span class="text-[#e8c176] font-serif text-base">{{
                  pillar.num
                }}</span>
              </div>
              <h3 class="text-white font-serif uppercase text-xl pt-2">
                {{ pillar.title }}
              </h3>
              <p class="text-[#c8c6c5] font-sans text-base leading-6">
                {{ pillar.text }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── EDITORIAL FEATURE ─── -->
      <section class="w-full bg-[#0e0e0e] px-12 md:px-64 py-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[700px]">
          <!-- Arch image -->
          <div
            class="lg:col-span-7 border border-[#c5a059]/30 rounded-t-[500px] overflow-hidden flex items-center justify-center order-2 lg:order-1"
          >
            <img
              :src="editorialImgSrc"
              alt="Signature brand"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Text col -->
          <div
            class="lg:col-span-5 flex flex-col gap-8 self-center pl-0 lg:pl-12 order-1 lg:order-2"
          >
            <p
              class="text-[#e8c176] font-sans text-base pb-2 border-b border-[#e8c176]/30 self-start"
            >
              MANIFESTE
            </p>
            <h2
              class="text-white font-serif text-3xl md:text-4xl leading-tight uppercase"
            >
              L'EXCELLENCE N'EST PAS UNE OPTION, C'EST VOTRE STANDARD.
            </h2>
            <p
              class="text-[#c8c6c5] font-sans text-base md:text-lg leading-relaxed"
            >
              "Dans un monde complètement digitalisé, votre image est votre
              meilleur atout. Nous bâtissons des gourous du digital."
            </p>

            <ul class="space-y-4">
              <li class="flex items-center gap-4">
                <svg
                  class="w-6 h-6 text-[#e8c176] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span class="text-white font-sans text-base"
                  >CURATION DE TALENT EXCLUSIVE</span
                >
              </li>
              <li class="flex items-center gap-4">
                <svg
                  class="w-6 h-6 text-[#e8c176] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span class="text-white font-sans text-base"
                  >STRATÉGIE DE HAUT NIVEAU</span
                >
              </li>
            </ul>

            <button
              class="bg-white text-black font-sans text-base px-10 py-4 self-start hover:bg-[#e9c176] transition-colors"
            >
              RÉSERVER UN AUDIT
            </button>
          </div>
        </div>
      </section>

      <!-- ─── OFFRE SIGNATURE ─── -->
      <section class="w-full bg-[#131313] px-6 md:px-32 lg:px-[512px] py-32">
        <div
          class="bg-black border border-[#e8c176] max-w-4xl mx-auto p-12 md:p-20 flex flex-col items-center text-center gap-4 relative"
        >
          <p
            class="text-[#e8c176] font-sans text-base tracking-[0.2em] uppercase"
          >
            L'OFFRE SIGNATURE
          </p>
          <h2 class="text-white font-serif text-3xl md:text-4xl">
            LE CERCLE DES ÉLITES
          </h2>
          <p
            class="text-[#c8c6c5] font-sans text-base md:text-lg pt-4 max-w-2xl"
          >
            Un accompagnement VIP complet sur 12 mois pour redéfinir
            intégralement votre trajectoire de carrière et vos revenus.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-8 justify-center py-8">
            <span
              v-for="tag in offerTags"
              :key="tag"
              class="border border-[#4e4639] text-[#e2e2e2] font-sans text-xs px-6 py-2"
            >
              {{ tag }}
            </span>
          </div>

          <button
            class="bg-[#e9c176] text-black font-sans text-xl tracking-[0.1em] px-16 py-6 hover:opacity-90 transition-opacity"
          >
            DEMANDER L'ACCÈS
          </button>
        </div>
      </section>
    </main>

    <!-- ─── FOOTER ─── -->
    <footer class="w-full border-t border-[#c5a059]/20 py-24 bg-black relative">
      <div class="flex flex-col items-center mb-8">
        <img :src="logoSrc" alt="MGN Créative" class="h-20 w-auto mb-2" />
        <p
          class="text-2xl tracking-[0.4em] uppercase text-[#c5a059] font-serif font-light"
        >
          AGENCE MGN CREATIVE
        </p>
      </div>

      <div class="flex justify-center gap-16 mb-8">
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
        >
          POLITIQUE DE<br />CONFIDENTIALITÉ
        </a>
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
        >
          CONDITIONS<br />D'UTILISATION
        </a>
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
import { ref } from "vue";

// Assets Figma (valables 7 jours — à remplacer par tes fichiers locaux)
const logoSrc = ref(
  "https://www.figma.com/api/mcp/asset/6a970d4e-5705-4f6b-b8be-a8b1e8e21661",
);
const heroModelSrc = ref(
  "https://www.figma.com/api/mcp/asset/b701d884-99f5-4473-8e27-2eafba03de4b",
);
const editorialImgSrc = ref(
  "https://www.figma.com/api/mcp/asset/3bb0e64d-3f79-42e7-a770-547aceddb82e",
);

const pillars = ref([
  {
    num: "01",
    title: "Identité Visuelle",
    text: "Direction artistique sur-mesure, et shooting éditoriaux.",
    dark: false,
  },
  {
    num: "02",
    title: "Social Scaling",
    text: "Stratégie de croissance organique et gestion de réputation pour dominer votre niche.",
    dark: true,
  },
  {
    num: "03",
    title: "Monétisation",
    text: "Partenariats de marques premium et création d'offres exclusives pour votre audience.",
    dark: false,
  },
  {
    num: "04",
    title: "Legacy Design",
    text: "Positionnement à long terme pour passer de modèle à icône culturelle intemporelle.",
    dark: false,
  },
]);

const offerTags = ref(["IMMERSION 48H", "RÉSEAU PRIVÉ", "AGENCE DÉDIÉE"]);
</script>
