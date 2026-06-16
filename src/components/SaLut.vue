<script setup>
// MGN Créative — Landing page (Accueil)
// Vue 3 <script setup> + Tailwind CSS
//
// Assets Figma (URLs temporaires : valides ~7 jours, à remplacer par tes propres images)
const heroBg =
  "https://www.figma.com/api/mcp/asset/674276fb-7c6c-46f8-8398-01765c83c143";
const brandViz =
  "https://www.figma.com/api/mcp/asset/9908efd9-fbcc-44f0-8d09-ebe8d70ceaf8";
const logo =
  "https://www.figma.com/api/mcp/asset/fd32a8ca-ce87-4880-bb1a-c8f232fd2a37";

const navLinks = [
  { label: "Accueil", href: "#", active: true },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const pillars = [
  {
    n: "01",
    title: "Identité Visuelle",
    desc: "Direction artistique sur-mesure et shootings éditoriaux.",
  },
  {
    n: "02",
    title: "Social Scaling",
    desc: "Stratégie de croissance organique et gestion de réputation pour dominer votre niche.",
  },
  {
    n: "03",
    title: "Monétisation",
    desc: "Partenariats de marques premium et création d'offres exclusives pour votre audience.",
  },
  {
    n: "04",
    title: "Legacy Design",
    desc: "Positionnement à long terme pour passer de modèle à icône culturelle intemporelle.",
  },
];

const manifestPoints = [
  "Curation de talent exclusive",
  "Stratégie de haut niveau",
];

const signatureTags = ["Immersion 48h", "Réseau privé", "Agence dédiée"];
</script>

<template>
  <div class="relative flex flex-col w-full bg-[#131313] text-white font-body">
    <!-- ===================== Top Nav ===================== -->
    <header
      class="fixed inset-x-0 top-0 z-50 flex items-center justify-between h-28 px-8 backdrop-blur-md bg-black/95 border-b border-[#c5a059]/20"
    >
      <a href="#" class="flex items-center">
        <img
          :src="logo"
          alt="MGN Créative"
          class="h-12 w-auto object-contain"
        />
      </a>

      <nav class="hidden md:flex items-center gap-12">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#c5a059]"
          :class="
            link.active
              ? 'text-[#c5a059] border-b border-[#c5a059] pb-1'
              : 'text-[#d6d3d1]'
          "
        >
          {{ link.label }}
        </a>
      </nav>
    </header>

    <main class="flex flex-col w-full">
      <!-- ===================== Hero ===================== -->
      <section
        class="relative flex flex-col items-center justify-center min-h-[1200px] pt-72 pb-48 overflow-hidden"
      >
        <!-- Background model image -->
        <div class="absolute inset-0 opacity-40 pointer-events-none">
          <img
            :src="heroBg"
            alt=""
            class="absolute left-0 top-[-30%] w-full h-[160%] object-cover"
          />
        </div>

        <!-- Arch motif (bottom) -->
        <div class="absolute bottom-[-96px] inset-x-0 flex justify-center">
          <div
            class="h-48 w-24 rounded-t-full opacity-30 border border-b-0 border-[#e8c176]"
          />
        </div>

        <div
          class="relative z-10 flex flex-col items-center w-full max-w-[1536px] px-16"
        >
          <h1
            class="mix-blend-difference text-center font-headline font-normal text-white text-[clamp(4rem,14vw,230px)] leading-none tracking-tight"
          >
            <span class="block">MGN</span>
            <span class="block">CRÉATIVE</span>
          </h1>

          <p
            class="mt-4 mb-8 text-center text-base text-[#e8c176]/90 font-headline"
          >
            AGENCE DE PERSONAL BRANDING POUR TOP MODÈLES, PROMOTEURS &amp;
            MARQUES
          </p>

          <div class="flex flex-wrap gap-6 justify-center pt-8">
            <button
              class="px-12 py-5 bg-[#e9c176] text-[#4e3700] text-lg transition-opacity hover:opacity-90"
            >
              DEVENIR INCONTOURNABLE
            </button>
            <button
              class="px-12 py-5 border border-[#e9c176] text-[#e8c176] text-lg transition-colors hover:bg-[#e9c176]/10"
            >
              NOTRE PORTFOLIO
            </button>
          </div>
        </div>
      </section>

      <!-- ===================== 4 Piliers ===================== -->
      <section id="services" class="w-full bg-[#131313] px-12 lg:px-48 py-32">
        <div class="mx-auto w-full max-w-[1536px] px-16 flex flex-col gap-24">
          <!-- Header -->
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-[#4e4639]"
          >
            <div class="max-w-xl flex flex-col gap-4">
              <span class="text-base text-[#e8c176]">NOTRE MÉTHODOLOGIE</span>
              <h2 class="font-headline text-white text-xl">
                4 PILIERS DE SERVICE
              </h2>
            </div>
            <p class="max-w-sm text-[#c8c6c5] md:text-right">
              Une approche holistique pour transformer votre image en un atout
              médiatique et commercial.
            </p>
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article
              v-for="(p, i) in pillars"
              :key="p.n"
              class="flex flex-col gap-4 p-8 border border-[#4e4639]"
              :class="i === 1 ? 'bg-black' : ''"
            >
              <div
                class="flex items-center justify-center size-12 rounded-full border border-[#e8c176]"
              >
                <span class="font-headline text-[#e8c176]">{{ p.n }}</span>
              </div>
              <h3 class="font-headline uppercase text-white">{{ p.title }}</h3>
              <p class="text-[#c8c6c5] leading-6">{{ p.desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ===================== Manifeste (Editorial) ===================== -->
      <section class="w-full bg-[#0e0e0e] px-12 lg:px-64 py-32">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Image (arch container) -->
          <div
            class="order-2 lg:order-1 lg:col-span-7 h-[700px] overflow-hidden rounded-t-[500px] border border-[#c5a059]/30"
          >
            <img
              :src="brandViz"
              alt="Signature brand visualization"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Text -->
          <div
            class="order-1 lg:order-2 lg:col-span-5 flex flex-col gap-8 lg:pl-12"
          >
            <span
              class="self-start pb-2 text-[#e8c176] border-b border-[#e9c176]/30"
              >MANIFESTE</span
            >

            <h2 class="font-headline text-white text-2xl leading-snug">
              L'EXCELLENCE N'EST PAS UNE OPTION, C'EST VOTRE STANDARD.
            </h2>

            <p class="text-[#c8c6c5] leading-relaxed">
              « Dans un monde complètement digitalisé, votre image est votre
              meilleur atout. Nous bâtissons des gourous du digital. »
            </p>

            <ul class="flex flex-col gap-4">
              <li
                v-for="point in manifestPoints"
                :key="point"
                class="flex items-center gap-4"
              >
                <span
                  class="inline-flex items-center justify-center size-6 text-[#e8c176]"
                  aria-hidden="true"
                  >✓</span
                >
                <span class="uppercase text-white text-sm tracking-wide">{{
                  point
                }}</span>
              </li>
            </ul>

            <button
              class="self-start px-10 py-4 bg-white text-black transition-colors hover:bg-[#e9c176]"
            >
              RÉSERVER UN AUDIT
            </button>
          </div>
        </div>
      </section>

      <!-- ===================== Offre Signature ===================== -->
      <section
        id="contact"
        class="w-full bg-[#131313] px-6 lg:px-32 py-32 flex justify-center"
      >
        <div
          class="relative w-full max-w-[896px] flex flex-col items-center gap-4 p-12 lg:p-20 bg-black border border-[#e8c176] overflow-hidden"
        >
          <img
            :src="logo"
            alt=""
            class="absolute right-0 top-0 h-24 w-auto object-contain opacity-90"
          />

          <span class="text-center text-[#e8c176] tracking-[0.1em] uppercase"
            >L'offre signature</span
          >

          <h2 class="font-headline text-center text-white text-2xl">
            LE CERCLE DES ÉLITES
          </h2>

          <p class="max-w-2xl pt-4 text-center text-[#c8c6c5]">
            Un accompagnement VIP complet sur 12 mois pour redéfinir
            intégralement votre trajectoire de carrière et vos revenus.
          </p>

          <div class="flex flex-wrap gap-8 justify-center py-8">
            <span
              v-for="tag in signatureTags"
              :key="tag"
              class="px-6 py-2 text-xs uppercase text-[#e2e2e2] border border-[#4e4639]"
              >{{ tag }}</span
            >
          </div>

          <button
            class="px-16 py-6 bg-[#e9c176] text-black text-xl tracking-[0.1em] transition-opacity hover:opacity-90"
          >
            DEMANDER L'ACCÈS
          </button>
        </div>
      </section>
    </main>

    <!-- ===================== Footer ===================== -->
    <footer
      class="relative w-full bg-black border-t border-[#c5a059]/20 pt-24 pb-16"
    >
      <img
        :src="logo"
        alt="MGN Créative"
        class="absolute left-1/2 -translate-x-1/2 top-[-36px] h-[57px] w-auto object-contain"
      />

      <div class="flex flex-col items-center gap-8 text-center">
        <p
          class="font-headline font-light uppercase text-[#c5a059] text-2xl tracking-[0.3em]"
        >
          Agence MGN Creative
        </p>

        <nav class="flex flex-wrap gap-12 justify-center">
          <a
            href="#"
            class="text-[10px] uppercase tracking-[0.2em] text-[#78716c] hover:text-[#c5a059]"
          >
            Politique de confidentialité
          </a>
          <a
            href="#"
            class="text-[10px] uppercase tracking-[0.2em] text-[#78716c] hover:text-[#c5a059]"
          >
            Conditions d'utilisation
          </a>
        </nav>

        <div class="h-px w-24 bg-[#c5a059]/30" />

        <p class="text-[9px] uppercase tracking-[0.2em] text-[#c5a059]/60">
          © 2026 Elite Branding Agency. Tous droits réservés.
        </p>
      </div>

      <!-- Back to top -->
      <a
        href="#"
        class="absolute right-12 bottom-12 inline-flex items-center justify-center p-2 opacity-40 border border-[#c5a059]/40 transition-opacity hover:opacity-100"
        aria-label="Retour en haut"
      >
        <span aria-hidden="true" class="text-[#c5a059]">↑</span>
      </a>
    </footer>
  </div>
</template>
