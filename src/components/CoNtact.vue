<template>
  <div
    class="relative min-h-screen flex flex-col bg-[#131313] overflow-x-hidden text-[#e2e2e2]"
  >
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
          class="relative text-xs tracking-[0.2em] uppercase text-[#d6d3d1] hover:text-[#e8c176] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#e8c176] after:transition-all after:duration-300 hover:after:w-full"
          >SERVICES</router-link
        >
        <router-link
          to="/contact"
          class="relative text-xs tracking-[0.2em] uppercase border-b border-[#c5a059] text-[#c5a059] pb-1"
          >CONTACT</router-link
        >
      </nav>
    </header>

    <main class="flex flex-col items-center pt-32">
      <!-- ─── HERO ─── -->
      <section class="w-full max-w-[1280px] mx-auto px-5 pt-8">
        <div class="grid grid-cols-12 gap-6 pb-20">
          <div class="col-span-12 md:col-span-8">
            <h1
              class="text-6xl font-bold uppercase tracking-tighter mb-10 text-[#e2e2e2] font-serif leading-none"
              style="perspective: 800px"
            >
              <span
                v-for="(l, i) in 'CONTACTEZ-NOUS'"
                :key="`t-${i}`"
                class="inline-block opacity-0 animate-[letterReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                :class="l === ' ' ? 'w-4' : ''"
                :style="{ animationDelay: `${i * 45}ms` }"
                >{{ l === " " ? "\u00A0" : l }}</span
              >
            </h1>
            <p
              class="max-w-xl text-lg leading-relaxed text-[#d1c5b4] font-sans opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
              style="animation-delay: 700ms"
            >
              Rejoignez l'élite de la mode ou propulsez votre marque vers de
              nouveaux sommets. MGN Créative redéfinit les standards de
              l'élégance et de l'influence.
            </p>
          </div>

          <div
            class="col-span-12 md:col-span-4 relative overflow-hidden h-[360px] group opacity-0 animate-[fadeScale_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style="animation-delay: 500ms"
          >
            <img
              :src="heroImgSrc"
              alt=""
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <blockquote
              class="absolute bottom-6 left-6 right-6 text-white font-serif text-lg leading-snug"
            >
              « Nous ne construisons pas une image, nous construisons un statut.
              »
            </blockquote>
          </div>
        </div>
        <div class="border-b border-[#775a19]/25"></div>
      </section>

      <!-- ─── TWO FORMS ─── -->
      <section class="w-full max-w-[1280px] mx-auto px-5 py-24">
        <div ref="formsRef" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Top Modèles (beige) -->
          <div
            class="relative bg-[#e5e2dd] border border-[#c5a059]/20 p-12 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-1000 ease-out"
            :class="
              visible.forms
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            "
          >
            <span
              class="absolute top-8 right-8 font-serif text-3xl text-[#c5a059]/30"
              >01</span
            >
            <h2 class="font-serif text-3xl font-semibold uppercase text-black">
              Top Modèles
            </h2>
            <div class="w-12 h-px bg-[#c5a059] mt-4 mb-2"></div>
            <p
              class="font-sans text-[10px] font-bold tracking-[0.4em] text-[#c5a059] mb-10"
            >
              RECRUTEMENT EXCLUSIF
            </p>

            <form class="space-y-8" @submit.prevent="submitModele">
              <div>
                <label class="block font-serif text-[11px] text-black mb-2"
                  >Nom Complet</label
                >
                <input
                  v-model="modele.nom"
                  type="text"
                  placeholder="JEAN DUPONT"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-black font-sans text-base outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/30"
                />
              </div>
              <div>
                <label class="block font-serif text-[11px] text-black mb-2"
                  >Email Professionnel</label
                >
                <input
                  v-model="modele.email"
                  type="email"
                  placeholder="CONTACT@MODEL.COM"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-black font-sans text-base outline-none focus:border-[#c5a059] transition-colors placeholder:text-black/30"
                />
              </div>
              <div class="grid grid-cols-2 gap-8">
                <div>
                  <label class="block font-serif text-[11px] text-black mb-2"
                    >Taille (cm)</label
                  >
                  <input
                    v-model="modele.taille"
                    type="text"
                    class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-black font-sans text-base outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>
                <div>
                  <label class="block font-serif text-[11px] text-black mb-2"
                    >Ville</label
                  >
                  <input
                    v-model="modele.ville"
                    type="text"
                    class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-black font-sans text-base outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label class="block font-serif text-[11px] text-black mb-2"
                  >Portfolio / Instagram</label
                >
                <input
                  v-model="modele.portfolio"
                  type="text"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-black font-sans text-base outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>
              <button
                type="submit"
                class="w-full py-5 bg-black text-[#c5a059] font-sans text-xs tracking-[0.4em] uppercase relative overflow-hidden group/btn transition-colors duration-300 hover:text-black"
              >
                <span class="relative z-10">Soumettre Candidature</span>
                <span
                  class="absolute inset-0 bg-[#c5a059] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"
                ></span>
              </button>
            </form>
          </div>

          <!-- Marques (black/gold) -->
          <div
            class="relative bg-black border border-[#c5a059]/40 p-12 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out"
            :class="
              visible.forms
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            "
            :style="{ transitionDelay: visible.forms ? '120ms' : '0ms' }"
          >
            <span
              class="absolute top-8 right-8 font-serif text-3xl text-[#c5a059]/30"
              >02</span
            >
            <h2
              class="font-serif text-3xl font-semibold uppercase text-[#c5a059]"
            >
              Marques
            </h2>
            <div class="w-12 h-px bg-[#c5a059] mt-4 mb-2"></div>
            <p
              class="font-sans text-[10px] font-bold tracking-[0.4em] text-white/80 mb-10"
            >
              DEMANDE DE COLLABORATION
            </p>

            <form class="space-y-8" @submit.prevent="submitMarque">
              <div>
                <label class="block font-serif text-[11px] text-[#c5a059] mb-2"
                  >Nom de l'Entreprise</label
                >
                <input
                  v-model="marque.entreprise"
                  type="text"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>
              <div>
                <label class="block font-serif text-[11px] text-[#c5a059] mb-2"
                  >Type de Projet</label
                >
                <div class="relative">
                  <select
                    v-model="marque.type"
                    class="w-full appearance-none bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 pl-3 pr-10 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                  >
                    <option v-for="t in projetTypes" :key="t" class="bg-black">
                      {{ t }}
                    </option>
                  </select>
                  <span
                    class="pointer-events-none absolute right-2 top-2 text-[#c5a059]"
                    >▾</span
                  >
                </div>
              </div>
              <div>
                <label class="block font-serif text-[11px] text-[#c5a059] mb-2"
                  >Budget Estimé</label
                >
                <input
                  v-model="marque.budget"
                  type="text"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>
              <div>
                <label class="block font-serif text-[11px] text-[#c5a059] mb-2"
                  >Brief du Projet</label
                >
                <textarea
                  v-model="marque.brief"
                  rows="3"
                  class="w-full bg-transparent border-b border-[#c5a059]/40 pb-3 pt-2 px-3 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full py-5 bg-[#c5a059] text-black font-sans text-xs tracking-[0.4em] uppercase relative overflow-hidden group/btn"
              >
                <span class="relative z-10">Demander un Devis</span>
                <span
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                ></span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- ─── ★ CALENDRIER RENDEZ-VOUS ─── -->
      <section
        class="w-full py-24 px-5 bg-[#0d0d0d] border-y border-[#c5a059]/15"
      >
        <div class="max-w-[1280px] mx-auto">
          <div
            ref="rdvHeaderRef"
            class="flex flex-col items-center gap-4 mb-16 text-center transition-all duration-1000 ease-out"
            :class="
              visible.rdvHeader
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            <span
              class="rotate-45 inline-block w-2 h-2 bg-[#c5a059] animate-[spinDiamond_4s_ease-in-out_infinite]"
            ></span>
            <h2
              class="text-3xl font-semibold uppercase tracking-[0.5em] text-[#e2e2e2] font-serif"
            >
              Prendre Rendez-vous
            </h2>
            <p class="max-w-md text-sm text-[#d1c5b4] font-sans tracking-wide">
              Réservez un créneau privilégié avec nos directeurs artistiques.
              Sélectionnez une date, choisissez votre heure, confirmez.
            </p>
          </div>

          <div ref="rdvRef" class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <!-- Calendar -->
            <div
              class="lg:col-span-7 bg-[#161616] border border-[#c5a059]/20 p-8 transition-all duration-1000 ease-out"
              :class="
                visible.rdv
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              "
            >
              <div class="flex items-center justify-between mb-8">
                <button
                  type="button"
                  @click="prevMonth"
                  :disabled="isCurrentOrFutureMonthBlocked"
                  class="w-10 h-10 flex items-center justify-center border border-[#c5a059]/30 text-[#c5a059] transition-all duration-300 hover:border-[#e8c176] hover:bg-[#c5a059]/10 disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  ‹
                </button>
                <h3
                  class="font-serif text-xl uppercase tracking-[0.25em] text-[#e8c176]"
                >
                  {{ monthLabel }}
                </h3>
                <button
                  type="button"
                  @click="nextMonth"
                  class="w-10 h-10 flex items-center justify-center border border-[#c5a059]/30 text-[#c5a059] transition-all duration-300 hover:border-[#e8c176] hover:bg-[#c5a059]/10"
                >
                  ›
                </button>
              </div>

              <div class="grid grid-cols-7 gap-2 mb-3">
                <div
                  v-for="d in dayNames"
                  :key="d"
                  class="text-center font-sans text-[10px] tracking-[0.2em] text-[#c5a059]/60 uppercase py-2"
                >
                  {{ d }}
                </div>
              </div>

              <div class="grid grid-cols-7 gap-2">
                <template v-for="cell in calendarDays" :key="cell.key">
                  <div v-if="cell.blank"></div>
                  <button
                    v-else
                    type="button"
                    @click="selectDay(cell)"
                    :disabled="cell.disabled"
                    class="relative aspect-square flex items-center justify-center font-sans text-sm border transition-all duration-300"
                    :class="[
                      cell.disabled
                        ? 'border-transparent text-[#444] cursor-not-allowed line-through decoration-[#333]'
                        : 'cursor-pointer',
                      selectedDate === cell.dateStr
                        ? 'bg-[#c5a059] text-black border-[#c5a059] font-semibold scale-105'
                        : !cell.disabled
                          ? 'border-[#c5a059]/15 text-[#d6d3d1] hover:border-[#e8c176] hover:text-[#e8c176] hover:-translate-y-0.5'
                          : '',
                    ]"
                  >
                    {{ cell.day }}
                    <span
                      v-if="cell.isToday && selectedDate !== cell.dateStr"
                      class="absolute bottom-1 w-1 h-1 rounded-full bg-[#e8c176]"
                    ></span>
                    <span
                      v-if="cell.hasRdv"
                      class="absolute top-1 right-1 w-1.5 h-1.5 rotate-45 bg-[#e8c176]"
                    ></span>
                  </button>
                </template>
              </div>

              <p
                class="mt-6 font-sans text-[10px] tracking-[0.15em] text-[#78716c] uppercase flex items-center gap-3 flex-wrap"
              >
                <span class="flex items-center gap-1.5"
                  ><span class="w-1.5 h-1.5 rounded-full bg-[#e8c176]"></span>
                  Aujourd'hui</span
                >
                <span class="flex items-center gap-1.5"
                  ><span class="w-1.5 h-1.5 rotate-45 bg-[#e8c176]"></span> RDV
                  soumis</span
                >
                <span class="text-[#444]"
                  >— Dimanche &amp; dates passées indisponibles</span
                >
              </p>
            </div>

            <!-- Slots + form -->
            <div
              class="lg:col-span-5 flex flex-col transition-all duration-1000 ease-out"
              :class="
                visible.rdv
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              "
              :style="{ transitionDelay: visible.rdv ? '120ms' : '0ms' }"
            >
              <div
                v-if="!selectedDate"
                class="flex-1 flex flex-col items-center justify-center text-center border border-dashed border-[#c5a059]/20 p-10 min-h-[300px]"
              >
                <span
                  class="rotate-45 inline-block w-3 h-3 bg-[#c5a059]/40 mb-5"
                ></span>
                <p class="font-serif text-lg text-[#a8a29e]">
                  Sélectionnez une date<br />dans le calendrier
                </p>
              </div>

              <div v-else class="flex flex-col gap-6">
                <div>
                  <p
                    class="font-sans text-[10px] tracking-[0.3em] text-[#c5a059] uppercase mb-1"
                  >
                    Date choisie
                  </p>
                  <p class="font-serif text-xl text-[#e8c176]">
                    {{ selectedDateLabel }}
                  </p>
                </div>

                <div>
                  <p
                    class="font-sans text-[10px] tracking-[0.3em] text-[#c5a059] uppercase mb-3"
                  >
                    Créneaux disponibles
                  </p>
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      v-for="(s, i) in slots"
                      :key="s"
                      type="button"
                      @click="selectSlot(s)"
                      :disabled="isSlotTaken(s)"
                      class="py-3 font-sans text-sm border transition-all duration-300 animate-[slotPop_0.4s_ease-out_backwards]"
                      :style="{ animationDelay: `${i * 50}ms` }"
                      :class="[
                        isSlotTaken(s)
                          ? 'border-[#333] text-[#444] line-through cursor-not-allowed'
                          : selectedSlot === s
                            ? 'bg-[#c5a059] text-black border-[#c5a059] font-semibold'
                            : 'border-[#c5a059]/25 text-[#d6d3d1] hover:border-[#e8c176] hover:text-[#e8c176]',
                      ]"
                    >
                      {{ s }}
                    </button>
                  </div>
                </div>

                <div class="space-y-5 pt-2 border-t border-[#c5a059]/15">
                  <div>
                    <label
                      class="block font-serif text-[11px] text-[#c5a059] mb-2 mt-4"
                      >Votre Nom</label
                    >
                    <input
                      v-model="rdv.nom"
                      type="text"
                      placeholder="JEAN DUPONT"
                      class="w-full bg-transparent border-b border-[#c5a059]/40 pb-2 pt-1 px-2 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label
                      class="block font-serif text-[11px] text-[#c5a059] mb-2"
                      >Email</label
                    >
                    <input
                      v-model="rdv.email"
                      type="email"
                      placeholder="CONTACT@EXEMPLE.COM"
                      class="w-full bg-transparent border-b border-[#c5a059]/40 pb-2 pt-1 px-2 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label
                      class="block font-serif text-[11px] text-[#c5a059] mb-2"
                      >Type de Rendez-vous</label
                    >
                    <div class="relative">
                      <select
                        v-model="rdv.type"
                        class="w-full appearance-none bg-transparent border-b border-[#c5a059]/40 pb-2 pt-1 pl-2 pr-10 text-white font-sans text-base outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                      >
                        <option v-for="t in rdvTypes" :key="t" class="bg-black">
                          {{ t }}
                        </option>
                      </select>
                      <span
                        class="pointer-events-none absolute right-2 top-1 text-[#c5a059]"
                        >▾</span
                      >
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  @click="submitRdv"
                  :disabled="!canSubmit"
                  class="w-full py-5 font-sans text-xs tracking-[0.4em] uppercase relative overflow-hidden transition-all duration-300"
                  :class="
                    canSubmit
                      ? 'bg-[#c5a059] text-black cursor-pointer hover:bg-[#e8c176]'
                      : 'bg-[#222] text-[#555] cursor-not-allowed'
                  "
                >
                  Confirmer le Rendez-vous
                </button>
              </div>
            </div>
          </div>

          <!-- Submitted appointments -->
          <div v-if="sortedAppointments.length" class="mt-16">
            <div class="flex items-center gap-3 mb-6">
              <span class="w-6 h-px bg-[#c5a059]"></span>
              <p
                class="font-sans text-[10px] tracking-[0.3em] text-[#c5a059] uppercase"
              >
                Vos rendez-vous soumis ({{ sortedAppointments.length }})
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="a in sortedAppointments"
                :key="a.id"
                class="group flex items-center justify-between gap-4 bg-[#161616] border border-[#c5a059]/20 p-5 transition-all duration-300 hover:border-[#c5a059]/50"
              >
                <div class="flex items-center gap-5">
                  <div
                    class="flex flex-col items-center justify-center w-16 h-16 bg-[#c5a059]/10 border border-[#c5a059]/30 flex-shrink-0"
                  >
                    <span
                      class="font-serif text-xl text-[#e8c176] leading-none"
                      >{{ a.slot }}</span
                    >
                  </div>
                  <div>
                    <p class="font-serif text-base text-[#e2e2e2]">
                      {{ a.label }}
                    </p>
                    <p
                      class="font-sans text-[11px] tracking-wide text-[#c5a059] mt-1"
                    >
                      {{ a.type }}
                    </p>
                    <p class="font-sans text-[11px] text-[#78716c] mt-0.5">
                      {{ a.nom }} · {{ a.email }}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="removeRdv(a.id)"
                  class="w-8 h-8 flex items-center justify-center text-[#78716c] hover:text-[#e8c176] hover:border hover:border-[#c5a059]/40 transition-all duration-300 flex-shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── AGENCY DETAILS ─── -->
      <section class="w-full max-w-[1280px] mx-auto px-5 py-24">
        <div
          ref="detailsRef"
          class="grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ease-out"
          :class="
            visible.details
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          "
        >
          <div>
            <h3 class="font-serif italic text-base text-[#c5a059] mb-5">
              Siège Social
            </h3>
            <p class="font-serif text-2xl leading-snug text-[#e2e2e2]">
              8 Avenue Montaigne<br />75008 Paris, France
            </p>
          </div>
          <div>
            <h3 class="font-serif italic text-base text-[#c5a059] mb-5">
              Contact Direct
            </h3>
            <p class="font-serif text-xl text-[#e2e2e2]">
              contact@mgncreative.com
            </p>
            <p class="font-serif text-xl text-[#e2e2e2] mt-2">
              +33 (0)1 44 56 78 90
            </p>
          </div>
          <div>
            <h3 class="font-serif italic text-base text-[#c5a059] mb-5">
              Suivez-Nous
            </h3>
            <div
              class="flex gap-6 font-sans text-xs tracking-[0.2em] uppercase"
            >
              <a
                href="#"
                class="text-[#d6d3d1] hover:text-[#e8c176] transition-colors border-b border-[#c5a059]/30 pb-1"
                >Instagram</a
              >
              <a
                href="#"
                class="text-[#d6d3d1] hover:text-[#e8c176] transition-colors border-b border-[#c5a059]/30 pb-1"
                >LinkedIn</a
              >
              <a
                href="#"
                class="text-[#d6d3d1] hover:text-[#e8c176] transition-colors border-b border-[#c5a059]/30 pb-1"
                >TikTok</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- ─── MAP BAND ─── -->
      <section class="w-full py-16 bg-[#0d0d0d] border-t border-[#c5a059]/15">
        <p
          class="text-center font-sans text-sm tracking-[0.6em] uppercase text-[#c5a059]"
        >
          PARIS • LONDON • MILAN • NEW YORK
        </p>
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

    <!-- ─── TOAST ─── -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-5 scale-95"
      leave-active-class="transition duration-300 ease-in"
      leave-to-class="opacity-0 translate-y-5"
    >
      <div
        v-if="toast"
        class="fixed bottom-8 right-8 z-[60] bg-black border border-[#c5a059] px-6 py-4 shadow-2xl shadow-black/60 max-w-sm"
      >
        <div class="flex items-start gap-3">
          <span
            class="rotate-45 inline-block w-2 h-2 bg-[#e8c176] mt-1.5 flex-shrink-0"
          ></span>
          <p class="font-sans text-sm text-[#e2e2e2] leading-snug">
            {{ toast }}
          </p>
        </div>
      </div>
    </Transition>

    <!-- ─── ★ FIL QUI SERPENTE — couche décorative pleine page ─── -->
    <div
      class="absolute inset-0 w-full h-full pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        class="serpentine w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          id="threadPath"
          class="thread-line"
          pathLength="1"
          d="M8,14 C8,70 92,80 92,150 C92,230 8,240 8,320 C8,400 92,410 92,490 C92,570 8,580 8,660 C8,740 92,750 92,830 C92,900 50,950 50,1000"
          fill="none"
          stroke="#c5a059"
          stroke-width="1.4"
          stroke-linecap="round"
          vector-effect="non-scaling-stroke"
          :style="{ strokeDasharray: 1, strokeDashoffset: 1 - threadProgress }"
        />
        <circle
          class="thread-glint"
          r="0.5"
          fill="#fff6e0"
          vector-effect="non-scaling-stroke"
        >
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#threadPath" />
          </animateMotion>
        </circle>
      </svg>
    </div>

    <!-- Pelote (départ du fil) -->
    <div class="absolute z-40 pointer-events-none" style="left: 3%; top: 128px">
      <svg class="pelote" width="64" height="64" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#c5a059"
          stroke-width="1.2"
          opacity=".55"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="26"
          ry="11"
          fill="none"
          stroke="#c5a059"
          stroke-width="1"
          opacity=".5"
          transform="rotate(28 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="26"
          ry="11"
          fill="none"
          stroke="#c5a059"
          stroke-width="1"
          opacity=".5"
          transform="rotate(-28 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="11"
          ry="26"
          fill="none"
          stroke="#c5a059"
          stroke-width="1"
          opacity=".45"
          transform="rotate(12 32 32)"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="26"
          ry="17"
          fill="none"
          stroke="#c5a059"
          stroke-width="1"
          opacity=".4"
          transform="rotate(72 32 32)"
        />
        <circle cx="32" cy="32" r="4" fill="#e8c176" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

/* ─── ASSETS ─── */
const logoSrc = ref(
  "https://www.figma.com/api/mcp/asset/86da0435-0f0f-44b2-bfc8-21ec3283bcb0",
);
const heroImgSrc = ref(
  // Photo issue de la maquette Figma (lien temporaire ~7 jours).
  // → Remplace par ton asset local, ex: new URL('@/assets/hero-mannequin.jpg', import.meta.url).href
  "https://www.figma.com/api/mcp/asset/5bc24a71-1bc5-4a45-acb5-edbab163e876",
);

/* ─── FORMULAIRES ─── */
const modele = reactive({
  nom: "",
  email: "",
  taille: "",
  ville: "",
  portfolio: "",
});
const marque = reactive({
  entreprise: "",
  type: "Campagne Publicitaire",
  budget: "",
  brief: "",
});
const projetTypes = [
  "Campagne Publicitaire",
  "Défilé / Fashion Show",
  "Shooting Éditorial",
  "Ambassadeur de Marque",
  "Événement VIP",
];

const submitModele = () => {
  // TODO: brancher sur l'API / WhatsApp Business CRM
  console.log("Candidature modèle:", { ...modele });
};
const submitMarque = () => {
  // TODO: brancher sur l'API / WhatsApp Business CRM
  console.log("Demande marque:", { ...marque });
};

/* ─── CALENDRIER RENDEZ-VOUS ─── */
const today = new Date();
today.setHours(0, 0, 0, 0);

const viewYear = ref(today.getFullYear());
const viewMonth = ref(today.getMonth());
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const selectedDate = ref(null); // 'YYYY-MM-DD'
const selectedSlot = ref(null);
const slots = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

const rdv = reactive({ nom: "", email: "", type: "Casting modèle" });
const rdvTypes = [
  "Casting modèle",
  "Consultation marque",
  "Rendez-vous découverte",
  "Direction artistique",
];

const appointments = reactive([]);
const toast = ref(null);

const pad = (n) => String(n).padStart(2, "0");
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;

const isCurrentOrFutureMonthBlocked = computed(
  () =>
    viewYear.value === today.getFullYear() &&
    viewMonth.value <= today.getMonth(),
);

const calendarDays = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1);
  const startIdx = (first.getDay() + 6) % 7; // semaine commençant lundi
  const daysInMonth = new Date(
    viewYear.value,
    viewMonth.value + 1,
    0,
  ).getDate();
  const cells = [];
  for (let i = 0; i < startIdx; i++) cells.push({ blank: true, key: `b${i}` });
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(viewYear.value, viewMonth.value, d);
    const isPast = date < today;
    const isSunday = date.getDay() === 0;
    const dateStr = iso(viewYear.value, viewMonth.value, d);
    cells.push({
      blank: false,
      key: dateStr,
      day: d,
      dateStr,
      disabled: isPast || isSunday,
      isToday: date.getTime() === today.getTime(),
      hasRdv: appointments.some((a) => a.date === dateStr),
    });
  }
  return cells;
});

const monthLabel = computed(
  () => `${monthNames[viewMonth.value]} ${viewYear.value}`,
);

const prevMonth = () => {
  if (isCurrentOrFutureMonthBlocked.value) return;
  if (viewMonth.value === 0) {
    viewMonth.value = 11;
    viewYear.value--;
  } else viewMonth.value--;
};
const nextMonth = () => {
  if (viewMonth.value === 11) {
    viewMonth.value = 0;
    viewYear.value++;
  } else viewMonth.value++;
};

const selectDay = (cell) => {
  if (cell.disabled) return;
  selectedDate.value = cell.dateStr;
  selectedSlot.value = null;
};

const isSlotTaken = (slot) =>
  appointments.some((a) => a.date === selectedDate.value && a.slot === slot);

const selectSlot = (slot) => {
  if (isSlotTaken(slot)) return;
  selectedSlot.value = slot;
};

const selectedDateLabel = computed(() => {
  if (!selectedDate.value) return "";
  const [y, m, d] = selectedDate.value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const wd = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ][date.getDay()];
  return `${wd} ${d} ${monthNames[m - 1]} ${y}`;
});

const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const canSubmit = computed(
  () =>
    selectedDate.value &&
    selectedSlot.value &&
    rdv.nom.trim() &&
    emailOk(rdv.email) &&
    rdv.type,
);

const submitRdv = () => {
  if (!canSubmit.value) return;
  appointments.push({
    id: Date.now(),
    date: selectedDate.value,
    slot: selectedSlot.value,
    nom: rdv.nom.trim(),
    email: rdv.email.trim(),
    type: rdv.type,
    label: selectedDateLabel.value,
  });
  // TODO: brancher sur l'API / WhatsApp Business CRM
  toast.value = `Rendez-vous confirmé — ${selectedDateLabel.value} à ${selectedSlot.value}`;
  selectedSlot.value = null;
  rdv.nom = "";
  rdv.email = "";
  setTimeout(() => {
    toast.value = null;
  }, 4200);
};

const removeRdv = (id) => {
  const i = appointments.findIndex((a) => a.id === id);
  if (i !== -1) appointments.splice(i, 1);
};

const sortedAppointments = computed(() =>
  [...appointments].sort((a, b) =>
    (a.date + a.slot).localeCompare(b.date + b.slot),
  ),
);

/* ─── NAV + SCROLL REVEALS ─── */
const scrolled = ref(false);
const threadProgress = ref(0);
const onScroll = () => {
  scrolled.value = window.scrollY > 50;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  threadProgress.value =
    max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
};

const formsRef = ref(null);
const rdvHeaderRef = ref(null);
const rdvRef = ref(null);
const detailsRef = ref(null);
const visible = reactive({
  forms: false,
  rdvHeader: false,
  rdv: false,
  details: false,
});
let observer = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const refMap = new Map([
    [formsRef.value, "forms"],
    [rdvHeaderRef.value, "rdvHeader"],
    [rdvRef.value, "rdv"],
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
    { threshold: 0.12 },
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
@keyframes slotPop {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Fil qui serpente + pelote ── */
@keyframes spoolSpin {
  to {
    transform: rotate(360deg);
  }
}
.serpentine {
  opacity: 0.32;
  mix-blend-mode: screen;
}
.thread-line {
  transition: stroke-dashoffset 0.12s linear;
  filter: drop-shadow(0 0 2px rgba(197, 160, 89, 0.5));
}
.thread-glint {
  filter: drop-shadow(0 0 3px rgba(232, 193, 118, 0.95));
}
.pelote {
  transform-box: fill-box;
  transform-origin: center;
  animation: spoolSpin 16s linear infinite;
  filter: drop-shadow(0 0 3px rgba(197, 160, 89, 0.35));
}
@media (prefers-reduced-motion: reduce) {
  .pelote {
    animation: none;
  }
}
</style>
