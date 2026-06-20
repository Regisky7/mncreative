<template>
  <div
    class="min-h-screen flex flex-col bg-[#131313] overflow-x-hidden selection:bg-[#e8c176] selection:text-black relative"
  >
    <!-- Grain texture subtil -->
    <div
      class="pointer-events-none fixed inset-0 z-[100] opacity-[0.035] mix-blend-overlay"
      style="
        background-image: url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;120&quot; height=&quot;120&quot;><filter id=&quot;n&quot;><feTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.85&quot; numOctaves=&quot;3&quot;/></filter><rect width=&quot;120&quot; height=&quot;120&quot; filter=&quot;url(%23n)&quot;/></svg>');
      "
    ></div>

    <!-- ─── NAV ─── -->
    <header
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-28 border-b transition-colors duration-700"
      :class="
        scrolled
          ? 'border-[#c5a059]/20 bg-black/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      "
    >
      <img :src="logoSrc" alt="MGN Créative" class="h-24 w-auto" />
      <nav class="hidden md:flex items-center gap-12 font-sans">
        <router-link
          to="/"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors duration-500 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-500 hover:after:w-full"
          >ACCUEIL</router-link
        >
        <router-link
          to="/services"
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors duration-500 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-500 hover:after:w-full"
          >SERVICES</router-link
        >
        <router-link
          to="/contact"
          class="relative text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
          >CONTACT</router-link
        >
      </nav>
    </header>

    <main class="flex flex-col gap-32 pt-40">
      <!-- ─── HERO ─── -->
      <section
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-16 lg:min-h-[600px] relative"
      >
        <!-- Halo doré diffus -->
        <div
          class="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-[#e8c176]/[0.04] rounded-full blur-[120px] pointer-events-none"
        ></div>

        <!-- Title + intro -->
        <div class="lg:col-span-7 flex flex-col gap-8 self-end relative">
          <div
            class="flex items-center gap-6 opacity-0 animate-[fade_1.2s_ease-out_forwards]"
          >
            <span class="rotate-45 inline-block w-2 h-2 bg-[#c5a059]"></span>
            <span
              class="text-[11px] tracking-[0.5em] uppercase text-[#e8c176] font-medium font-sans"
              >Prenons Contact</span
            >
            <span
              class="h-px flex-1 max-w-[120px] bg-gradient-to-r from-[#c5a059]/50 to-transparent origin-left scale-x-0 animate-[drawLine_1.4s_ease-out_0.4s_forwards]"
            ></span>
          </div>
          <h1
            class="font-serif font-bold uppercase text-6xl lg:text-7xl leading-[0.95] tracking-tight opacity-0 animate-[fadeUp_1.2s_ease-out_0.15s_forwards]"
          >
            <span class="text-[#e2e2e2]">CONTACTEZ-</span
            ><span class="text-[#c5a059]">NOUS</span>
          </h1>
          <p
            class="text-[#c8c6c5] font-sans text-lg leading-[1.6] max-w-xl opacity-0 animate-[fadeUp_1.2s_ease-out_0.35s_forwards]"
          >
            Rejoignez l'élite de la mode ou propulsez votre marque vers de
            nouveaux sommets. MGN Créative redéfinit les standards de l'élégance
            et de l'influence.
          </p>
        </div>

        <!-- Model image + quote overlay -->
        <div
          class="lg:col-span-3 lg:col-start-9 relative border border-[#c5a059]/30 overflow-hidden self-end h-[600px] bg-[#1a1a1a] group opacity-0 animate-[fade_1.6s_ease-out_0.3s_forwards]"
        >
          <img
            :src="heroModelSrc"
            alt="Top Modèle"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            loading="lazy"
            @error="handleImgError"
          />
          <!-- Cadre intérieur fin -->
          <div
            class="absolute inset-3 border border-white/15 pointer-events-none z-10"
          ></div>
          <div
            class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 px-6 py-6">
            <p class="font-serif text-[#c5a059] text-base leading-7 italic">
              "Nous ne construisons pas une image,<br />nous construisons un
              statut."
            </p>
          </div>
        </div>
      </section>

      <!-- ─── FORMS SECTION ─── -->
      <section
        ref="formsRef"
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 px-16"
      >
        <!-- TOP MODÈLES — beige -->
        <div
          class="bg-[#e5e2dd] border border-[#c5a059]/20 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] px-12 pt-12 pb-16 relative transition-all duration-[1100ms] ease-out"
          :class="
            visible.forms
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          "
        >
          <!-- Coins ornementaux -->
          <span
            class="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#c5a059]/30"
          ></span>
          <span
            class="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#c5a059]/30"
          ></span>
          <span
            class="absolute top-8 right-8 font-serif text-3xl text-[#c5a059] opacity-25 tracking-wider"
            >01</span
          >

          <header class="mb-12">
            <h2
              class="font-serif font-semibold uppercase text-3xl text-black mb-3"
            >
              Top Modèles
            </h2>
            <div class="w-12 h-px bg-[#c5a059] mb-3"></div>
            <p
              class="font-sans font-bold text-[10px] tracking-[0.4em] text-[#c5a059]"
            >
              RECRUTEMENT EXCLUSIF
            </p>
          </header>

          <form class="flex flex-col gap-9" @submit.prevent="submitModel">
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-black/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Nom Complet</label
              >
              <input
                v-model="modelForm.name"
                type="text"
                placeholder="JEAN DUPONT"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black placeholder:text-black/25 outline-none focus:border-[#c5a059] transition-colors duration-300"
              />
            </div>
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-black/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Email Professionnel</label
              >
              <input
                v-model="modelForm.email"
                type="email"
                placeholder="CONTACT@MODEL.COM"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black placeholder:text-black/25 outline-none focus:border-[#c5a059] transition-colors duration-300"
              />
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div class="group/f flex flex-col gap-1">
                <label
                  class="font-serif text-[11px] text-black/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                  >Taille (cm)</label
                >
                <input
                  v-model="modelForm.height"
                  type="number"
                  class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059] transition-colors duration-300"
                />
              </div>
              <div class="group/f flex flex-col gap-1">
                <label
                  class="font-serif text-[11px] text-black/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                  >Ville</label
                >
                <input
                  v-model="modelForm.city"
                  type="text"
                  class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059] transition-colors duration-300"
                />
              </div>
            </div>
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-black/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Portfolio / Instagram</label
              >
              <input
                v-model="modelForm.portfolio"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059] transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              class="mt-2 bg-black text-[#c5a059] font-sans font-medium text-xs tracking-[0.4em] py-5 relative overflow-hidden group/btn"
            >
              <span
                class="relative z-10 group-hover/btn:text-black transition-colors duration-500"
                >SOUMETTRE CANDIDATURE</span
              >
              <span
                class="absolute inset-0 bg-[#c5a059] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"
              ></span>
            </button>
          </form>
        </div>

        <!-- MARQUES — black/gold -->
        <div
          class="bg-black border border-[#c5a059]/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] px-12 pt-12 pb-12 relative transition-all duration-[1100ms] ease-out"
          :class="
            visible.forms
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          "
          style="transition-delay: 150ms"
        >
          <span
            class="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#e8c176]/40"
          ></span>
          <span
            class="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#e8c176]/40"
          ></span>
          <span
            class="absolute top-8 right-8 font-serif text-3xl text-[#c5a059] opacity-25 tracking-wider"
            >02</span
          >

          <header class="mb-12">
            <h2
              class="font-serif font-semibold uppercase text-3xl text-[#c5a059] mb-3"
            >
              Marques
            </h2>
            <div class="w-12 h-px bg-[#c5a059] mb-3"></div>
            <p class="font-sans text-[10px] tracking-[0.4em] text-white">
              DEMANDE DE COLLABORATION
            </p>
          </header>

          <form class="flex flex-col gap-9" @submit.prevent="submitBrand">
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-[#c5a059]/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Nom de l'Entreprise</label
              >
              <input
                v-model="brandForm.company"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] transition-colors duration-300"
              />
            </div>
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-[#c5a059]/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Type de Projet</label
              >
              <select
                v-model="brandForm.projectType"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] appearance-none cursor-pointer transition-colors duration-300"
                style="
                  background-image: url('data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;12&quot; height=&quot;12&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;%23c5a059&quot;><path d=&quot;M7 10l5 5 5-5z&quot;/></svg>');
                  background-repeat: no-repeat;
                  background-position: right 8px center;
                "
              >
                <option value="campagne" class="bg-black">
                  Campagne Publicitaire
                </option>
                <option value="defile" class="bg-black">Défilé</option>
                <option value="lookbook" class="bg-black">
                  Lookbook / Catalogue
                </option>
                <option value="ambassadeur" class="bg-black">
                  Ambassadeur / Égérie
                </option>
              </select>
            </div>
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-[#c5a059]/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Budget Estimé</label
              >
              <input
                v-model="brandForm.budget"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] transition-colors duration-300"
              />
            </div>
            <div class="group/f flex flex-col gap-1">
              <label
                class="font-serif text-[11px] text-[#c5a059]/70 group-focus-within/f:text-[#c5a059] transition-colors duration-300"
                >Brief du Projet</label
              >
              <textarea
                v-model="brandForm.brief"
                rows="3"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] resize-none transition-colors duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              class="mt-2 bg-[#c5a059] text-black font-sans font-medium text-xs tracking-[0.4em] py-5 relative overflow-hidden group/btn"
            >
              <span class="relative z-10">DEMANDER UN DEVIS</span>
              <span
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
              ></span>
            </button>
          </form>
        </div>
      </section>

      <!-- ─── AGENCY DETAILS ─── -->
      <section
        ref="detailsRef"
        class="border-t border-[#c5a059]/30 grid grid-cols-1 md:grid-cols-3 gap-16 pt-20 px-16"
      >
        <div
          v-for="(block, idx) in detailBlocks"
          :key="block.title"
          class="transition-all duration-[1100ms] ease-out"
          :class="
            visible.details
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          "
          :style="{
            transitionDelay: visible.details ? `${idx * 120}ms` : '0ms',
          }"
        >
          <h3
            class="font-serif uppercase text-sm tracking-widest text-[#c5a059] mb-6 flex items-center gap-3"
          >
            <span class="h-px w-6 bg-[#c5a059]/50"></span>
            {{ block.title }}
          </h3>
          <div v-if="block.type === 'lines'" class="space-y-1">
            <p
              v-for="line in block.lines"
              :key="line"
              class="font-serif text-[#e2e2e2] text-base leading-8 tracking-wide"
            >
              {{ line }}
            </p>
          </div>
          <div v-else class="flex flex-wrap gap-4">
            <a
              v-for="social in block.items"
              :key="social"
              href="#"
              class="border border-[#c5a059]/30 px-6 py-2 text-[10px] tracking-widest uppercase text-[#a8a29e] font-sans hover:text-[#c5a059] hover:border-[#c5a059] transition-colors duration-500"
              >{{ social }}</a
            >
          </div>
        </div>
      </section>

      <!-- ─── VILLES (marquee discret) ─── -->
      <section
        class="border-t border-b border-[#c5a059]/10 py-20 flex items-center justify-center bg-black overflow-hidden"
      >
        <p
          class="font-serif text-2xl tracking-[0.6em] text-[#c5a059]/80 whitespace-nowrap flex items-center gap-8"
        >
          <span>PARIS</span><span class="text-[#e8c176] text-base">✦</span>
          <span>LONDON</span><span class="text-[#e8c176] text-base">✦</span>
          <span>MILAN</span><span class="text-[#e8c176] text-base">✦</span>
          <span>NEW YORK</span>
        </p>
      </section>
    </main>

    <!-- ─── FOOTER ─── -->
    <footer class="w-full border-t border-[#c5a059]/20 py-24 bg-black">
      <div class="flex flex-col items-center mb-8">
        <img :src="logoSrc" alt="MGN Créative" class="h-20 w-auto mb-2" />
        <p
          class="text-2xl tracking-[0.4em] uppercase text-[#c5a059] font-serif font-light"
        >
          Agence MGN Creative
        </p>
      </div>
      <div class="flex justify-center gap-16 mb-8">
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors duration-500"
          >Politique de<br />Confidentialité</a
        >
        <a
          href="#"
          class="text-[10px] tracking-[0.2em] uppercase text-center leading-relaxed text-[#78716c] hover:text-[#e8c176] font-sans transition-colors duration-500"
          >Conditions<br />d'Utilisation</a
        >
      </div>
      <div class="flex justify-center mb-6">
        <div class="w-24 h-px bg-[#c5a059]/30"></div>
      </div>
      <p
        class="text-center text-[9px] tracking-[0.2em] uppercase text-[#c5a059]/60 font-sans"
      >
        © 2026 Elite Branding Agency. Tous droits réservés.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

const logoSrc = ref(
  "https://www.figma.com/api/mcp/asset/bdc81bd5-505a-494d-a3f7-b555596510b2",
);
// Total look couture sur fond neutre — remplace par ta photo de marque dans /src/assets/
const heroModelSrc = ref(
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1200&fit=crop",
);

function handleImgError(e) {
  e.target.src =
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop";
}

const modelForm = reactive({
  name: "",
  email: "",
  height: "",
  city: "",
  portfolio: "",
});
const brandForm = reactive({
  company: "",
  projectType: "campagne",
  budget: "",
  brief: "",
});

const detailBlocks = ref([
  {
    title: "Siège Social",
    type: "lines",
    lines: ["8 Avenue Montaigne", "75008 Paris, France"],
  },
  {
    title: "Contact Direct",
    type: "lines",
    lines: ["contact@mgncreative.com", "+33 (0)1 44 56 78 90"],
  },
  {
    title: "Suivez-Nous",
    type: "socials",
    items: ["Instagram", "LinkedIn", "Vogue"],
  },
]);

function submitModel() {
  console.log("Candidature :", modelForm);
}
function submitBrand() {
  console.log("Devis :", brandForm);
}

// ─── Scroll + reveals ───
const scrolled = ref(false);
const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const formsRef = ref(null);
const detailsRef = ref(null);
const visible = reactive({ forms: false, details: false });
let observer = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  const refMap = new Map([
    [formsRef.value, "forms"],
    [detailsRef.value, "details"],
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
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes drawLine {
  to {
    transform: scaleX(1);
  }
}
</style>
