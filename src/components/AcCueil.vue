<script setup>
// MGN Créative — Page Services
// Vue 3 <script setup> + Tailwind CSS
//
// Assets Figma (URLs temporaires ~7 jours — remplace-les en production)
const heroImage =
  "https://www.figma.com/api/mcp/asset/65f5b4ce-ceaf-4b6f-bde8-54ea03296df4";
const cardsTexture =
  "https://www.figma.com/api/mcp/asset/89fb1a7a-e523-4d64-bbc8-2a452f1a7665";

// --- Section "Pour les marques" ---
const brandFeatures = [
  {
    n: "01 — Accès privilégié",
    text: "Nous offrons un accès direct à des professionnels de haut niveau et aux géants de l'industrie, garantissant que votre message parvienne aux mains les plus influentes.",
  },
  {
    n: "02 — Intégration harmonisée",
    text: "Les partenariats sont minutieusement sélectionnés pour garantir une résonance organique entre les valeurs de la marque et l'identité des talents, évitant ainsi l'aspect purement transactionnel des agences traditionnelles.",
  },
];

// --- Cartes de formules ---
// theme: 'light' (fond blanc) | 'dark' (fond noir, mise en avant)
const plans = [
  {
    n: "01",
    name: "ESSENTIELLE",
    tagline: "Personal Branding de base",
    theme: "light",
    features: [
      "AUDIT D'IMAGE",
      "STRATÉGIE DE POSITIONNEMENT",
      "OPTIMISATION RÉSEAUX",
    ],
    cta: "CHOISIR CE PACK",
    ctaStyle: "outline",
    featured: false,
  },
  {
    n: "02",
    name: "PREMIUM",
    tagline: "Branding + Production de contenu",
    theme: "dark",
    features: [
      "TOUT LE PACK ESSENTIELLE",
      "2 SESSIONS PHOTO STUDIO / MOIS",
      "CRÉATION DE REELS EDITORIAUX",
      "DIRECTION ARTISTIQUE",
    ],
    cta: "DÉCOUVRIR LE PREMIUM",
    ctaStyle: "gold",
    featured: true,
  },
  {
    n: "03",
    name: "SIGNATURE",
    tagline: "Accompagnement complet",
    theme: "light",
    features: [
      "CONCIERGERIE IMAGE 24/7",
      "RELATIONS PRESSE & AGENCES",
      "PLACEMENT ÉVÉNEMENTIEL VIP",
      "GESTION DE CARRIÈRE TOTALE",
    ],
    cta: "CONTACTER L'AGENCE",
    ctaStyle: "black",
    featured: false,
  },
];

// Réordonné pour l'affichage : Essentielle, Premium (au centre), Signature
const orderedPlans = [plans[0], plans[1], plans[2]];
</script>

<template>
  <main
    class="flex flex-col items-center gap-32 pt-32 pb-32 w-full bg-[#131313] text-white font-body"
  >
    <!-- ===================== Hero + Marques ===================== -->
    <section class="w-full max-w-[1280px] px-6 flex flex-col gap-4">
      <!-- diamond accent -->
      <span class="block size-2 rotate-45 bg-[#c5a059]" aria-hidden="true" />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-32">
        <!-- Texte hero -->
        <div class="lg:col-span-8 flex flex-col">
          <div class="flex items-center gap-6 mb-4">
            <span class="size-2 rotate-45 bg-[#c5a059]" aria-hidden="true" />
            <span class="text-xs font-medium tracking-[0.4em] text-[#e8c176]"
              >LUXURY IDENTITY</span
            >
          </div>

          <h1
            class="font-headline font-bold uppercase text-[#e2e2e2] text-5xl leading-tight tracking-tight"
          >
            NOS SERVICES
          </h1>

          <p class="max-w-md pt-4 text-lg leading-relaxed text-[#d1c5b4]">
            MGN Créative hisse votre marque personnelle au niveau professionnel.
            Trois niveaux d'excellence conçus pour le casting de mannequins.
          </p>
        </div>

        <!-- Image hero (Strategic depth) -->
        <div
          class="lg:col-span-4 relative h-[469px] overflow-hidden bg-[#e2e2e2]"
        >
          <img
            :src="heroImage"
            alt="Strategic depth"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute bottom-6 left-6 flex flex-col gap-1 text-white">
            <span
              class="text-xs font-bold tracking-[0.2em]"
              style="font-family: Manrope, sans-serif"
              >STRATEGIC DEPTH</span
            >
            <span class="text-2xl font-headline font-semibold">Est. 2024</span>
          </div>
        </div>
      </div>

      <!-- Section "Pour les marques" -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-16 border-t border-[#775a19]/20"
      >
        <div class="lg:col-span-4 flex flex-col gap-4">
          <h2
            class="text-xs font-bold tracking-[0.2em] text-[#c5a059]"
            style="font-family: Manrope, sans-serif"
          >
            POUR LES MARQUES
          </h2>
          <h3
            class="font-headline font-semibold text-white text-4xl tracking-wide leading-tight"
          >
            CRÉATEUR DE LIENS
          </h3>
        </div>

        <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            v-for="f in brandFeatures"
            :key="f.n"
            class="flex flex-col gap-4"
          >
            <span
              class="text-xs font-bold tracking-[0.2em] text-[#c5a059]"
              style="font-family: Manrope, sans-serif"
            >
              {{ f.n }}
            </span>
            <p
              class="text-base leading-6 text-[#f5f5dc]"
              style="font-family: Manrope, sans-serif"
            >
              {{ f.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== Cartes de formules ===================== -->
    <section
      class="relative w-full px-6 lg:px-32 py-24 bg-[#f2efe9] bg-top bg-no-repeat"
      :style="{ backgroundImage: `url('${cardsTexture}')` }"
    >
      <!-- accents flottants -->
      <span
        class="absolute left-9 top-10 size-3 bg-[#c5a059] opacity-20"
        aria-hidden="true"
      />
      <span
        class="absolute right-9 bottom-10 size-3 rotate-45 bg-[#c5a059] opacity-20"
        aria-hidden="true"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1280px] mx-auto"
      >
        <article
          v-for="plan in orderedPlans"
          :key="plan.name"
          class="relative flex flex-col overflow-hidden border"
          :class="
            plan.theme === 'dark'
              ? 'bg-black border-[#e9c176]/40 shadow-2xl'
              : 'bg-white border-[#e9c176]/20 shadow-xl'
          "
        >
          <!-- Badge "Most popular" -->
          <span
            v-if="plan.featured"
            class="absolute left-1/2 -translate-x-1/2 top-6 z-10 px-4 py-1 bg-[#e8c176] text-black text-[9px] tracking-[0.2em]"
            >MOST POPULAR</span
          >

          <!-- Image (arch) -->
          <div class="px-8 pt-8">
            <div
              class="h-[200px] rounded-t-full border overflow-hidden"
              :class="
                plan.theme === 'dark'
                  ? 'border-[#e9c176]/20'
                  : 'border-[#e9c176]/10'
              "
            />
          </div>

          <!-- Corps -->
          <div class="flex flex-col p-8">
            <!-- numéro -->
            <div
              class="flex items-center justify-center size-10 rounded-full border border-[#e8c176] mb-6"
            >
              <span class="text-sm text-[#e8c176]">{{ plan.n }}</span>
            </div>

            <h3
              class="font-headline font-semibold uppercase text-[32px] tracking-wide leading-tight"
              :class="plan.theme === 'dark' ? 'text-[#e8c176]' : 'text-black'"
            >
              {{ plan.name }}
            </h3>

            <p
              class="italic pb-4 mt-2 border-b"
              :class="
                plan.theme === 'dark'
                  ? 'text-[#a8a29e] border-[#e9c176]/20'
                  : 'text-[#78716c] border-[#e9c176]/10'
              "
            >
              {{ plan.tagline }}
            </p>

            <ul class="flex flex-col gap-4 pt-6">
              <li
                v-for="feat in plan.features"
                :key="feat"
                class="flex items-center gap-3"
              >
                <span
                  class="size-1.5 rotate-45 bg-[#c5a059] shrink-0"
                  aria-hidden="true"
                />
                <span
                  class="text-[10px] tracking-wide"
                  :class="
                    plan.theme === 'dark' ? 'text-[#d6d3d1]' : 'text-[#57534e]'
                  "
                  >{{ feat }}</span
                >
              </li>
            </ul>

            <!-- CTA -->
            <button
              class="mt-12 w-full py-4 text-center text-base transition-opacity hover:opacity-90"
              :class="{
                'border border-[#e9c176] text-[#e8c176]':
                  plan.ctaStyle === 'outline',
                'bg-[#e9c176] text-black': plan.ctaStyle === 'gold',
                'bg-black text-white': plan.ctaStyle === 'black',
              }"
            >
              {{ plan.cta }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- ===================== Citation ===================== -->
    <section class="w-full px-6 lg:px-48 py-24">
      <div
        class="flex flex-col md:flex-row gap-6 items-center max-w-[1152px] mx-auto"
      >
        <!-- silhouette (arch) -->
        <div
          class="shrink-0 w-56 h-80 rounded-t-full p-2 border border-[#e9c176]/40 bg-[#1f2020]"
        />

        <div class="flex flex-col gap-6 flex-1">
          <span class="size-2 rotate-45 bg-[#c5a059]" aria-hidden="true" />
          <blockquote
            class="font-headline text-[#e2e2e2] text-5xl leading-tight"
          >
            « Le luxe n'est pas une question de visibilité. C'est une présence
            inoubliable. »
          </blockquote>
          <p class="text-xs font-medium tracking-[0.4em] text-[#e8c176]">
            — MGN CRÉATIVE
          </p>
        </div>
      </div>
    </section>

    <!-- ===================== Méthodologie (Bento) ===================== -->
    <section class="w-full max-w-[1280px] px-6 flex flex-col gap-16">
      <div class="flex flex-col items-center gap-3">
        <span class="size-2 rotate-45 bg-[#c5a059]" aria-hidden="true" />
        <h2
          class="font-headline font-semibold uppercase text-[#e2e2e2] text-3xl tracking-[0.2em] text-center"
        >
          NOTRE MÉTHODOLOGIE
        </h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]"
      >
        <!-- 01 — Audit d'identité (grande tuile gauche) -->
        <div
          class="md:col-span-2 md:row-span-2 relative flex flex-col justify-end p-12 bg-[#1b1c1c] border border-[#9a8f80]/20 overflow-hidden"
        >
          <span
            class="absolute left-8 top-8 flex items-center justify-center size-12 rounded-full border border-[#e9c176]/30 text-[#e9c176]/40"
            >01</span
          >
          <h4
            class="font-headline font-medium uppercase text-[#e2e2e2] text-2xl leading-snug mb-4"
          >
            AUDIT D'IDENTITÉ
          </h4>
          <p class="max-w-sm text-[#d1c5b4] leading-6">
            Nous analysons votre profil actuel et définissons vos objectifs de
            carrière avec une précision chirurgicale.
          </p>
        </div>

        <!-- 02 — Design narratif (tuile large haut-droite) -->
        <div
          class="md:col-span-2 flex items-center gap-8 p-12 bg-[#2a2a2a] border border-[#9a8f80]/20"
        >
          <span
            class="shrink-0 flex items-center justify-center size-12 rounded-full border border-[#e9c176]/30 text-[#e9c176]/30"
            >02</span
          >
          <div class="flex flex-col gap-2">
            <h4
              class="font-headline font-medium uppercase text-[#e2e2e2] text-2xl leading-snug"
            >
              DESIGN NARRATIF
            </h4>
            <p class="text-[#d1c5b4] leading-6">
              Un plan d'action sur mesure pour votre déploiement digital et
              physique.
            </p>
          </div>
        </div>

        <!-- 03 — Création de contenus -->
        <div
          class="relative flex flex-col items-center justify-center p-10 bg-black border border-[#9a8f80]/20"
        >
          <span
            class="flex items-center justify-center size-10 rounded-full border border-[#e9c176]/30 text-[#e9c176]/30 mb-4"
            >03</span
          >
          <p
            class="text-xs font-medium tracking-[0.2em] uppercase text-[#e8c176] text-center"
          >
            Création de contenus
          </p>
        </div>

        <!-- 04 — Accélérateur d'influence -->
        <div
          class="relative flex flex-col items-center justify-center p-10 bg-[#353535] border border-[#e9c176]/30"
        >
          <span
            class="flex items-center justify-center size-10 rounded-full border border-[#e9c176]/30 text-[#e9c176]/30 mb-4"
            >04</span
          >
          <p
            class="text-xs font-medium tracking-[0.2em] uppercase text-[#e8c176] text-center"
          >
            ACCÉLÉRATEUR D'INFLUENCE
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
