<script setup>
import { RouterLink, useRoute } from 'vue-router'
import brightSparkLogo from '../assets/Images/BrightSpark_Logo.png'

const route = useRoute()

const phoneDisplay = '(123) 456-7890'
const phoneLink = 'tel:1234567890'
</script>

<template>
  <header
    class="w-full sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800/70"
  >
    <div
      class="max-page-width flex flex-wrap items-center gap-3 py-4"
    >
      <!-- 1. BRAND (logo + name, clickable to Home) -->
      <RouterLink
        to="/"
        class="flex items-center gap-3 order-1 flex-shrink-0"
      >
        <img
          :src="brightSparkLogo"
          alt="BrightSpark Electrical Services logo"
          class="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        />
        <!-- Brand text, always visible -->
        <div class="leading-tight">
          <p class="font-semibold text-white text-sm sm:text-base">
            BrightSpark
          </p>
          <p class="text-[10px] sm:text-xs tracking-wide text-slate-300">
            ELECTRICAL SERVICES
          </p>
        </div>
      </RouterLink>

      <!-- 2. BUTTONS (right-hand side) -->
      <div
        class="flex items-center gap-3 ml-auto order-2 md:order-3 flex-shrink-0"
      >
        <!-- Phone button (mobile-call enabled) -->
        <a
          :href="phoneLink"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-amber-500/50 hover:from-amber-300 hover:to-orange-400 transition"
        >
          <span class="text-base">📞</span>
          <span>{{ phoneDisplay }}</span>
        </a>

        <!-- Contact Us CTA -->
        <RouterLink
          to="/contact"
          class="inline-flex items-center rounded-full border border-amber-300 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-amber-100 hover:bg-amber-400/10 transition"
        >
          Contact Us
        </RouterLink>
      </div>

      <!-- 3. NAV (below on mobile, inline between logo & buttons on desktop) -->
      <nav
        class="order-3 md:order-2 w-full md:w-auto flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base font-semibold tracking-wide"
      >
        <!-- HOME -->
        <div class="flex flex-col items-center">
          <RouterLink
            :to="{ name: 'home' }"
            class="uppercase transition"
            :class="
              route.name === 'home'
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
            "
          >
            Home
          </RouterLink>
          <span
            v-if="route.name === 'home'"
            class="mt-1 h-0.5 w-8 md:w-10 rounded-full bg-amber-400"
          ></span>
        </div>

        <!-- SERVICES -->
        <div class="flex flex-col items-center">
          <RouterLink
            :to="{ name: 'services' }"
            class="uppercase transition"
            :class="
              route.name === 'services'
                ? 'text-amber-400'
                : 'text-slate-300 hover:text-white'
            "
          >
            Services
          </RouterLink>
          <span
            v-if="route.name === 'services'"
            class="mt-1 h-0.5 w-8 md:w-10 rounded-full bg-amber-400"
          ></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>