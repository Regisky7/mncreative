<template>
  <div class="min-h-screen flex flex-col bg-[#131313] overflow-x-hidden">
    <!-- ─── TOP NAV ─── -->
    <header
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-28 border-b transition-all duration-500"
      :class="
        scrolled
          ? 'border-[#c5a059]/30 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50'
          : 'border-transparent bg-black/40 backdrop-blur-sm'
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
          class="relative text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
        >
          ACCUEIL
        </router-link>
        <router-link
          to="/services"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
        >
          SERVICES
        </router-link>
        <router-link
          to="/contact"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
        >
          CONTACT
        </router-link>
      </nav>
    </header>

    <main class="flex flex-col">
      <!-- ─── HERO ─── -->
      <section
        ref="heroRef"
        @mousemove="handleHeroMouse"
        @mouseleave="resetHeroMouse"
        class="relative min-h-[1100px] flex flex-col items-center justify-center pt-72 pb-48 overflow-hidden"
      >
        <!-- Background model avec parallax -->
        <div
          class="absolute inset-0 opacity-40 overflow-hidden pointer-events-none"
        >
          <img
            :src="heroModelSrc"
            alt=""
            class="w-full h-[160%] object-cover absolute left-0 -top-[30%] transition-transform duration-[800ms] ease-out will-change-transform"
            :style="{
              transform: `translate3d(${parallax.x}px, ${parallax.y - 30}px, 0) scale(1.1)`,
            }"
          />
        </div>

        <!-- Gradient overlays -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
        ></div>

        <!-- Particules dorées flottantes (animation Tailwind arbitraire) -->
        <div
          v-for="i in 12"
          :key="`p-${i}`"
          class="absolute w-1 h-1 bg-[#e8c176] rounded-full opacity-60 pointer-events-none animate-[floatParticle_10s_ease-in-out_infinite]"
          :style="particleStyle(i)"
        ></div>

        <!-- Arche du bas avec pulse Tailwind built-in -->
        <div
          class="absolute -bottom-24 left-0 right-0 flex justify-center pointer-events-none"
        >
          <div
            class="border-l border-r border-t border-[#e8c176] w-24 h-48 rounded-t-full opacity-30 animate-pulse"
          ></div>
        </div>

        <!-- Content -->
        <div
          class="relative z-10 max-w-[1536px] w-full px-16 flex flex-col items-center"
        >
          <!-- Titre lettre par lettre -->
          <h1
            class="text-white text-center font-serif font-normal mb-4"
            style="
              font-size: clamp(80px, 12vw, 230px);
              line-height: 1;
              letter-spacing: -0.05em;
            "
          >
            <span class="block">
              <span
                v-for="(l, i) in 'MGN'"
                :key="`m-${i}`"
                class="inline-block opacity-0 animate-[letterReveal_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                :style="{ animationDelay: `${i * 80}ms` }"
                >{{ l }}</span
              >
            </span>
            <span class="block">
              <span
                class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e8c176] to-white bg-[length:200%_100%] opacity-0 animate-[shimmerReveal_0.9s_cubic-bezier(0.16,1,0.3,1)_0.24s_forwards,shimmer_4s_linear_1.2s_infinite]"
                >CRÉATIVE</span
              >
            </span>
          </h1>

          <!-- Tagline -->
          <p
            class="text-[#e8c176]/90 text-center font-serif text-base tracking-wide mb-12 max-w-3xl opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
            style="animation-delay: 900ms"
          >
            AGENCE DE PERSONAL BRANDING POUR TOP MODÈLES, PROMOTEURS &amp;
            MARQUES
          </p>

          <!-- CTA group -->
          <div
            class="flex flex-col sm:flex-row gap-6 opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
            style="animation-delay: 1100ms"
          >
            <button
              class="group relative bg-[#e9c176] text-[#4e3700] font-sans text-lg px-12 py-5 overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span class="relative z-10">DEVENIR INCONTOURNABLE</span>
              <span
                class="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              ></span>
              <span
                class="absolute inset-0 bg-[#e9c176] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100"
              ></span>
            </button>
            <button
              class="group relative border border-[#e9c176] text-[#e8c176] font-sans text-lg px-12 py-5 overflow-hidden transition-all duration-300 hover:text-black hover:scale-105"
            >
              <span class="relative z-10">NOTRE PORTFOLIO</span>
              <span
                class="absolute inset-0 bg-[#e9c176] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              ></span>
            </button>
          </div>
        </div>

        <!-- Scroll hint avec bounce Tailwind built-in -->
        <div
          class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce"
        >
          <span class="text-[#e8c176] text-[10px] tracking-[0.3em] uppercase"
            >Scroll</span
          >
          <div
            class="w-px h-12 bg-gradient-to-b from-[#e8c176] to-transparent"
          ></div>
        </div>
      </section>

      <!-- ─── MARQUE TAGLINE ─── -->
      <section
        class="w-full bg-black border-y border-[#c5a059]/20 py-6 overflow-hidden"
      >
        <div
          class="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]"
        >
          <div
            v-for="i in 2"
            :key="`mq-${i}`"
            class="flex items-center shrink-0"
          >
            <template
              v-for="(word, idx) in marqueeWords"
              :key="`mw-${i}-${idx}`"
            >
              <span
                class="font-serif text-2xl text-[#c5a059] mx-12 tracking-widest uppercase"
                >{{ word }}</span
              >
              <span class="text-[#e8c176] text-3xl">✦</span>
            </template>
          </div>
        </div>
      </section>

      <!-- ─── 4 PILIERS ─── -->
      <section class="w-full bg-[#131313] px-12 md:px-48 py-32 relative">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-[#e8c176]/5 rounded-full blur-3xl pointer-events-none"
        ></div>

        <div class="max-w-[1536px] mx-auto relative">
          <!-- Header reveal -->
          <div
            ref="pillarsHeaderRef"
            class="flex flex-col md:flex-row justify-between items-end gap-8 pb-12 border-b border-[#4e4639] transition-all duration-1000 ease-out"
            :class="
              visible.pillarsHeader
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            "
          >
            <div class="max-w-xl">
              <p
                class="text-[#e8c176] font-sans text-base mb-4 flex items-center gap-3"
              >
                <span class="w-8 h-px bg-[#e8c176]"></span>
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
            ref="pillarsGridRef"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
          >
            <div
              v-for="(pillar, idx) in pillars"
              :key="pillar.num"
              class="group relative border border-[#4e4639] p-8 flex flex-col gap-4 cursor-pointer overflow-hidden transition-all duration-700 ease-out hover:-translate-y-3 hover:border-[#e8c176]/60 hover:shadow-[0_25px_60px_-20px_rgba(232,193,118,0.4)]"
              :class="[
                pillar.dark ? 'bg-black' : 'bg-transparent',
                visible.pillarsGrid
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12',
              ]"
              :style="{
                transitionDelay: visible.pillarsGrid ? `${idx * 100}ms` : '0ms',
              }"
            >
              <!-- Gold sweep on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#e8c176]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              ></div>

              <!-- Top accent bar -->
              <div
                class="absolute top-0 left-0 h-[2px] bg-[#e8c176] w-0 group-hover:w-full transition-all duration-700"
              ></div>

              <!-- Number circle -->
              <div
                class="relative w-12 h-12 rounded-full border border-[#e8c176] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#e8c176] group-hover:rotate-12"
              >
                <span
                  class="text-[#e8c176] font-serif text-base transition-colors duration-500 group-hover:text-black"
                  >{{ pillar.num }}</span
                >
              </div>

              <h3
                class="relative text-white font-serif uppercase text-xl pt-2 transition-colors duration-500 group-hover:text-[#e8c176]"
              >
                {{ pillar.title }}
              </h3>
              <p class="relative text-[#c8c6c5] font-sans text-base leading-6">
                {{ pillar.text }}
              </p>

              <!-- Arrow -->
              <div
                class="relative mt-2 flex items-center gap-2 text-[#e8c176] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
              >
                <span class="text-xs tracking-widest uppercase">Découvrir</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── EDITORIAL FEATURE ─── -->
      <section
        class="w-full bg-[#0e0e0e] px-12 md:px-64 py-32 relative overflow-hidden"
      >
        <div
          class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"
        ></div>

        <div
          ref="editorialRef"
          class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[700px] relative"
        >
          <!-- Arch image -->
          <div
            class="lg:col-span-7 border border-[#c5a059]/30 rounded-t-[500px] overflow-hidden flex items-center justify-center order-2 lg:order-1 group cursor-pointer transition-all duration-1000 ease-out"
            :class="
              visible.editorial
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            "
          >
            <div class="w-full h-full overflow-hidden">
              <img
                :src="editorialImgSrc"
                alt="Signature brand"
                class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <!-- Text col -->
          <div
            class="lg:col-span-5 flex flex-col gap-8 self-center pl-0 lg:pl-12 order-1 lg:order-2 transition-all duration-1000 ease-out"
            :class="
              visible.editorial
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            "
            style="transition-delay: 200ms"
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
              class="text-[#c8c6c5] font-sans text-base md:text-lg leading-relaxed italic"
            >
              "Dans un monde complètement digitalisé, votre image est votre
              meilleur atout. Nous bâtissons des gourous du digital."
            </p>

            <ul class="space-y-4">
              <li
                v-for="feature in manifestoFeatures"
                :key="feature"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-6 h-6 rounded-full bg-[#e8c176]/10 border border-[#e8c176] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#e8c176] group-hover:scale-110"
                >
                  <svg
                    class="w-3 h-3 text-[#e8c176] group-hover:text-black transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    />
                  </svg>
                </div>
                <span
                  class="text-white font-sans text-base group-hover:tracking-wider transition-all duration-300"
                  >{{ feature }}</span
                >
              </li>
            </ul>

            <router-link
              to="/contact"
              class="group relative bg-white text-black font-sans text-base px-10 py-4 self-start overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span class="relative z-10 flex items-center gap-3">
                RÉSERVER UN AUDIT
                <span
                  class="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >→</span
                >
              </span>
              <span
                class="absolute inset-0 bg-[#e9c176] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              ></span>
            </router-link>
          </div>
        </div>
      </section>

      <!-- ─── OFFRE SIGNATURE ─── -->
      <section class="w-full bg-[#131313] px-6 md:px-32 lg:px-[512px] py-32">
        <div
          ref="signatureRef"
          class="bg-black border border-[#e8c176] max-w-4xl mx-auto p-12 md:p-20 flex flex-col items-center text-center gap-4 relative overflow-hidden group transition-all duration-1000 ease-out"
          :class="
            visible.signature ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          "
        >
          <!-- Glow on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#e8c176]/20 via-transparent to-[#e8c176]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
          ></div>

          <!-- Corner accents -->
          <span
            class="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#e8c176]/40"
          ></span>
          <span
            class="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#e8c176]/40"
          ></span>
          <span
            class="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#e8c176]/40"
          ></span>
          <span
            class="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#e8c176]/40"
          ></span>

          <p
            class="relative text-[#e8c176] font-sans text-base tracking-[0.2em] uppercase"
          >
            L'OFFRE SIGNATURE
          </p>
          <h2 class="relative text-white font-serif text-3xl md:text-4xl">
            LE CERCLE DES ÉLITES
          </h2>
          <p
            class="relative text-[#c8c6c5] font-sans text-base md:text-lg pt-4 max-w-2xl"
          >
            Un accompagnement VIP complet sur 12 mois pour redéfinir
            intégralement votre trajectoire de carrière et vos revenus.
          </p>

          <!-- Tags avec animate-pulse Tailwind + delays staggered -->
          <div class="relative flex flex-wrap gap-8 justify-center py-8">
            <span
              v-for="(tag, i) in offerTags"
              :key="tag"
              class="border border-[#4e4639] text-[#e2e2e2] font-sans text-xs px-6 py-2 transition-all duration-500 hover:border-[#e8c176] hover:text-[#e8c176] hover:scale-110 cursor-default animate-pulse"
              :style="{ animationDelay: `${i * 300}ms` }"
            >
              {{ tag }}
            </span>
          </div>

          <router-link
            to="/contact"
            class="relative group/btn bg-[#e9c176] text-black font-sans text-xl tracking-[0.1em] px-16 py-6 overflow-hidden transition-transform duration-300 hover:scale-110 shadow-lg shadow-[#e8c176]/20 hover:shadow-2xl hover:shadow-[#e8c176]/40"
          >
            <span class="relative z-10">DEMANDER L'ACCÈS</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
            ></span>
          </router-link>
        </div>
      </section>
    </main>

    <!-- ─── FOOTER ─── -->
    <footer class="w-full border-t border-[#c5a059]/20 py-24 bg-black relative">
      <div class="flex flex-col items-center mb-8">
        <img
          :src="logoSrc"
          alt="MGN Créative"
          class="h-20 w-auto mb-2 transition-transform duration-500 hover:scale-110"
        />
        <p
          class="text-2xl tracking-[0.4em] uppercase text-[#c5a059] font-serif font-light"
        >
          AGENCE MGN CREATIVE
        </p>
      </div>

      <div class="flex justify-center gap-16 mb-8">
        <router-link
          to="/politique-de-confidentialite"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
        >
          POLITIQUE DE<br />CONFIDENTIALITÉ
        </router-link>
        <router-link
          to="/conditions-d-utilisation"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors"
        >
          CONDITIONS<br />D'UTILISATION
        </router-link>
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
  "https://www.figma.com/api/mcp/asset/6a970d4e-5705-4f6b-b8be-a8b1e8e21661",
);
const heroModelSrc = ref(
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&h=1200&fit=crop",
);
const editorialImgSrc = ref(
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=1200&fit=crop",
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
const manifestoFeatures = ref([
  "CURATION DE TALENT EXCLUSIVE",
  "STRATÉGIE DE HAUT NIVEAU",
]);
const marqueeWords = ref([
  "LUXURY",
  "ELITE",
  "INFLUENCE",
  "PRESTIGE",
  "EXCELLENCE",
]);

// ─── Nav scroll detection ───
const scrolled = ref(false);
const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// ─── Parallax souris hero ───
const heroRef = ref(null);
const parallax = reactive({ x: 0, y: 0 });
const handleHeroMouse = (e) => {
  if (!heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  const cx = (e.clientX - rect.left) / rect.width - 0.5;
  const cy = (e.clientY - rect.top) / rect.height - 0.5;
  parallax.x = cx * -40;
  parallax.y = cy * -40;
};
const resetHeroMouse = () => {
  parallax.x = 0;
  parallax.y = 0;
};

// ─── Particules style ───
const particleStyle = (i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  animationDuration: `${8 + (i % 5)}s`,
  animationDelay: `${i * 0.4}s`,
});

// ─── Reveal au scroll via refs réactives + classes Tailwind ───
const pillarsHeaderRef = ref(null);
const pillarsGridRef = ref(null);
const editorialRef = ref(null);
const signatureRef = ref(null);

const visible = reactive({
  pillarsHeader: false,
  pillarsGrid: false,
  editorial: false,
  signature: false,
});

let observer = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });

  const refMap = new Map([
    [pillarsHeaderRef.value, "pillarsHeader"],
    [pillarsGridRef.value, "pillarsGrid"],
    [editorialRef.value, "editorial"],
    [signatureRef.value, "signature"],
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
/* Uniquement les @keyframes - impossibles à exprimer en utility class.
   Tout le reste (transitions, hover, transform, opacity, delays) passe par Tailwind. */
@keyframes letterReveal {
  0% {
    opacity: 0;
    transform: translateY(60px) rotateX(-90deg);
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
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
/* Révèle CRÉATIVE (monte + apparaît) sans rotateX qui casserait le bg-clip-text */
@keyframes shimmerReveal {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes floatParticle {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  50% {
    transform: translate(20px, -40px);
    opacity: 0.8;
  }
}
</style>
