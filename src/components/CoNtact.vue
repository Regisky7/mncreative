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
          class="text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors"
          >ACCUEIL</a
        >
        <a
          href="#"
          class="text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors"
          >SERVICES</a
        >
        <a
          href="#"
          class="text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
          >CONTACT</a
        >
      </nav>
    </header>

    <main class="flex flex-col gap-32 pt-32">
      <!-- ─── HERO ─── -->
      <section
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 px-16 lg:h-[600px]"
      >
        <!-- Title + intro -->
        <div class="lg:col-span-7 flex flex-col gap-8 self-end">
          <h1
            class="font-serif font-bold uppercase text-5xl lg:text-6xl leading-tight tracking-tight"
          >
            <span class="text-[#e2e2e2]">CONTACTEZ-</span
            ><span class="text-[#c5a059]">NOUS</span>
          </h1>
          <p class="text-[#c8c6c5] font-sans text-lg leading-[1.6] max-w-xl">
            Rejoignez l'élite de la mode ou propulsez votre marque vers de
            nouveaux sommets. MGN Créative redéfinit les standards de l'élégance
            et de l'influence.
          </p>
        </div>

        <!-- Model image + quote overlay -->
        <div
          class="lg:col-span-3 lg:col-start-9 relative border border-[#c5a059]/30 overflow-hidden self-end h-[600px] bg-[#1a1a1a]"
        >
          <img
            :src="heroModelSrc"
            alt="Top Modèle"
            class="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            @error="handleImgError"
          />
          <!-- Gradient overlay pour lisibilité citation -->
          <div
            class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 to-transparent"
          ></div>
          <!-- Quote -->
          <div class="absolute bottom-0 left-0 right-0 px-6 py-6">
            <p class="font-serif text-[#c5a059] text-base leading-7 italic">
              "Nous ne construisons pas une image,<br />nous construisons un
              statut."
            </p>
          </div>
        </div>
      </section>

      <!-- ─── FORMS SECTION ─── -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-24 px-16">
        <!-- TOP MODÈLES — beige -->
        <div
          class="bg-[#e5e2dd] border border-[#c5a059]/20 shadow-2xl px-12 pt-12 pb-24 relative"
        >
          <span
            class="absolute top-8 right-8 font-serif text-2xl text-[#c5a059] opacity-30 tracking-wider"
            >01</span
          >

          <header class="mb-12">
            <h2
              class="font-serif font-semibold uppercase text-3xl text-black mb-2"
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

          <form class="flex flex-col gap-10" @submit.prevent="submitModel">
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-black"
                >Nom Complet</label
              >
              <input
                v-model="modelForm.name"
                type="text"
                placeholder="JEAN DUPONT"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black placeholder:text-black/30 outline-none focus:border-[#c5a059]"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-black"
                >Email Professionnel</label
              >
              <input
                v-model="modelForm.email"
                type="email"
                placeholder="CONTACT@MODEL.COM"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black placeholder:text-black/30 outline-none focus:border-[#c5a059]"
              />
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div class="flex flex-col gap-1">
                <label class="font-serif text-[11px] text-black"
                  >Taille (cm)</label
                >
                <input
                  v-model="modelForm.height"
                  type="number"
                  class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059]"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-serif text-[11px] text-black">Ville</label>
                <input
                  v-model="modelForm.city"
                  type="text"
                  class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-black"
                >Portfolio / Instagram</label
              >
              <input
                v-model="modelForm.portfolio"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-black outline-none focus:border-[#c5a059]"
              />
            </div>
            <button
              type="submit"
              class="bg-black text-[#c5a059] font-sans font-medium text-xs tracking-[0.4em] py-5 hover:opacity-90 transition-opacity"
            >
              SOUMETTRE CANDIDATURE
            </button>
          </form>
        </div>

        <!-- MARQUES — black/gold -->
        <div
          class="bg-black border border-[#c5a059]/40 shadow-2xl px-12 pt-12 pb-12 relative"
        >
          <span
            class="absolute top-8 right-8 font-serif text-2xl text-[#c5a059] opacity-30 tracking-wider"
            >02</span
          >

          <header class="mb-12">
            <h2
              class="font-serif font-semibold uppercase text-3xl text-[#c5a059] mb-2"
            >
              Marques
            </h2>
            <div class="w-12 h-px bg-[#c5a059] mb-3"></div>
            <p class="font-sans text-[10px] tracking-[0.4em] text-white">
              DEMANDE DE COLLABORATION
            </p>
          </header>

          <form class="flex flex-col gap-10" @submit.prevent="submitBrand">
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-[#c5a059]"
                >Nom de l'Entreprise</label
              >
              <input
                v-model="brandForm.company"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059]"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-[#c5a059]"
                >Type de Projet</label
              >
              <select
                v-model="brandForm.projectType"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] appearance-none cursor-pointer"
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
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-[#c5a059]"
                >Budget Estimé</label
              >
              <input
                v-model="brandForm.budget"
                type="text"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059]"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="font-serif text-[11px] text-[#c5a059]"
                >Brief du Projet</label
              >
              <textarea
                v-model="brandForm.brief"
                rows="3"
                class="bg-transparent border-b border-[#c5a059]/40 px-3 py-3 text-base text-white outline-none focus:border-[#c5a059] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#c5a059] text-black font-sans font-medium text-xs tracking-[0.4em] py-5 hover:opacity-90 transition-opacity"
            >
              DEMANDER UN DEVIS
            </button>
          </form>
        </div>
      </section>

      <!-- ─── AGENCY DETAILS ─── -->
      <section
        class="border-t border-[#c5a059]/30 grid grid-cols-1 md:grid-cols-3 gap-16 pt-20 px-16"
      >
        <div>
          <h3
            class="font-serif uppercase text-sm tracking-widest text-[#c5a059] mb-6"
          >
            Siège Social
          </h3>
          <p
            class="font-serif text-[#e2e2e2] text-base leading-9 tracking-wide"
          >
            8 Avenue Montaigne<br />
            75008 Paris, France
          </p>
        </div>
        <div>
          <h3
            class="font-serif uppercase text-sm tracking-widest text-[#c5a059] mb-6"
          >
            Contact Direct
          </h3>
          <div class="space-y-2">
            <p class="font-serif text-[#e2e2e2] text-base leading-7">
              contact@mgncreative.com
            </p>
            <p class="font-serif text-[#e2e2e2] text-base leading-7">
              +33 (0)1 44 56 78 90
            </p>
          </div>
        </div>
        <div>
          <h3
            class="font-serif uppercase text-sm tracking-widest text-[#c5a059] mb-6"
          >
            Suivez-Nous
          </h3>
          <div class="flex flex-wrap gap-4">
            <a
              v-for="social in socials"
              :key="social"
              href="#"
              class="border border-[#c5a059]/30 px-6 py-2 text-[10px] tracking-widest uppercase text-[#a8a29e] font-sans hover:text-[#c5a059] hover:border-[#c5a059] transition-colors"
            >
              {{ social }}
            </a>
          </div>
        </div>
      </section>

      <!-- ─── MAP VISUAL ─── -->
      <section
        class="border-t border-b border-[#c5a059]/10 h-72 flex items-center justify-center bg-black opacity-90 overflow-hidden"
      >
        <p
          class="font-sans font-medium text-xl tracking-[0.6em] text-[#c5a059] whitespace-nowrap"
        >
          PARIS &nbsp;•&nbsp; LONDON &nbsp;•&nbsp; MILAN &nbsp;•&nbsp; NEW YORK
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
import { ref, reactive } from "vue";

// Assets — remplace heroModelSrc par ta photo locale dans /src/assets/
const logoSrc = ref(
  "https://www.figma.com/api/mcp/asset/bdc81bd5-505a-494d-a3f7-b555596510b2",
);

// Placeholder mannequin haute couture (Unsplash, portrait vertical)
// À remplacer par ta photo dans /src/assets/contact-model.jpg
const heroModelSrc = ref(
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop&crop=top",
);

// Fallback si l'image ne charge pas
function handleImgError(e) {
  e.target.src =
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=1200&fit=crop";
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
const socials = ref(["Instagram", "LinkedIn", "Vogue"]);

function submitModel() {
  console.log("Candidature :", modelForm);
}
function submitBrand() {
  console.log("Devis :", brandForm);
}
</script>
