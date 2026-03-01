<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

import heroImage from '../assets/Images/Hero_Image.jpg'
import tools1 from '../assets/Images/Tools_1.jpg'
import tools2 from '../assets/Images/Tools_2.jpg'
import tools3 from '../assets/Images/Tools_3.jpg'

// Our Services images
import level2Img from '../assets/Images/OurServices/LEVEL2_Logo.jpg'
import emergencyImg from '../assets/Images/OurServices/Emergency_Logo.jpg'
import lightingPowerImg from '../assets/Images/OurServices/Lighting&Power_Logo.jpg'
import smokeAlarmImg from '../assets/Images/OurServices/Smoke_Alarm_Logo.jpg'
import switchboardImg from '../assets/Images/OurServices/SwitchBoard_Upgrades_Logo.jpg'
import ceilingFanImg from '../assets/Images/OurServices/Ceiling_Fan_Logo.jpg'


/**
 * Carousel items for "Our Services"
 */
const services = [
  { title: 'Level 2', image: level2Img },
  { title: 'Emergency', image: emergencyImg },
  { title: 'Lighting & Power', image: lightingPowerImg },
  { title: 'Smoke Alarms', image: smokeAlarmImg },
  { title: 'Switchboard Upgrades', image: switchboardImg },
  { title: 'Ceiling Fans', image: ceilingFanImg },
]

// current slide index
const currentIndex = ref(0)

// auto-rotate control
const isPaused = ref(false)
let intervalId = null
let interactionTimeoutId = null

const totalSlides = services.length

const goTo = (index) => {
  if (index < 0) {
    currentIndex.value = totalSlides - 1
  } else if (index >= totalSlides) {
    currentIndex.value = 0
  } else {
    currentIndex.value = index
  }
}

/**
 * When user interacts (hover or click arrows) we pause auto-rotation
 * for a while so it doesn't fight them.
 */
const registerUserInteraction = () => {
  isPaused.value = true

  if (interactionTimeoutId !== null) {
    clearTimeout(interactionTimeoutId)
  }

  // resume auto-rotate after 12s of no interaction
  interactionTimeoutId = window.setTimeout(() => {
    isPaused.value = false
  }, 12000)
}

const next = () => {
  registerUserInteraction()
  goTo(currentIndex.value + 1)
}

const prev = () => {
  registerUserInteraction()
  goTo(currentIndex.value - 1)
}

/**
 * Auto-rotate every 5 seconds (only when not paused)
 */
const startAutoRotate = () => {
  if (intervalId !== null) return

  intervalId = window.setInterval(() => {
    if (!isPaused.value) {
      goTo(currentIndex.value + 1)
    }
  }, 5000)
}

const stopAutoRotate = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const handleMouseEnter = () => {
  registerUserInteraction()
}

const handleMouseLeave = () => {
  // when mouse leaves, allow timer to resume naturally
  isPaused.value = false
}

onMounted(() => {
  startAutoRotate()
})

onBeforeUnmount(() => {
  stopAutoRotate()
  if (interactionTimeoutId !== null) {
    clearTimeout(interactionTimeoutId)
  }
})
</script>

<template>
  <div>
    <!-- HERO SECTION (unchanged) -->
    <section
      class="relative text-white overflow-hidden bg-center bg-cover"
      :style="`background-image: url(${heroImage});`"
    >
      <div
        class="relative max-page-width section-padding flex flex-col lg:flex-row items-center gap-12"
      >
        <div class="max-w-xl w-full">
          <div
            class="bg-black/65 rounded-2xl p-6 lg:p-7 space-y-4 shadow-xl backdrop-blur-sm"
          >
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Expert Electrical
              <span
                class="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent"
              >
                Solutions
              </span>
            </h1>

            <p class="text-sm sm:text-base text-slate-100">
              Powering homes and businesses with reliable, professional electrical services.
            </p>

            <p class="font-semibold text-amber-200">
              Available 24/7 for emergencies.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                class="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-slate-900"
              >
                📞 Call Now
              </button>

              <RouterLink
                to="/services"
                class="rounded-full border border-slate-100 px-6 py-3 font-semibold"
              >
                Our Services →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===============================
     OUR SERVICES SECTION
    ================================= -->
    <section class="section-padding bg-slate-50">
    <div class="max-page-width space-y-10 text-center">
        <div class="space-y-3">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Our Services
        </h2>

        <!-- NEW PROFESSIONAL DESCRIPTION -->
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive residential and commercial electrical services
            across Sydney, delivered with precision, compliance, and safety at the forefront.
            From urgent call-outs to large-scale upgrades, our team ensures every project is
            completed to the highest standard.
        </p>
        </div>

        <!-- ROTATING CAROUSEL -->
        <div
        class="relative max-w-4xl mx-auto"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @focusin="handleMouseEnter"
        @focusout="handleMouseLeave"
        >
        <div
            class="rounded-3xl overflow-hidden shadow-xl bg-white relative"
        >
            <!-- slide image -->
            <img
            :src="services[currentIndex].image"
            :alt="services[currentIndex].title"
            class="w-full h-[300px] sm:h-[400px] object-cover transition-all duration-500"
            />

            <!-- bottom label bar -->
            <div
            class="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur
                    px-5 py-4 flex items-center justify-between"
            >
            <h3 class="text-lg sm:text-xl font-semibold text-slate-900">
                {{ services[currentIndex].title }}
            </h3>
            <span class="text-2xl text-slate-700">&rarr;</span>
            </div>
        </div>

        <!-- NAVIGATION BUTTONS -->
        <button
            type="button"
            @click="prev"
            @touchstart.prevent="prev"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full
                shadow-md p-2 text-xl hover:bg-slate-100 transition"
            aria-label="Previous service"
        >
            ‹
        </button>

        <button
            type="button"
            @click="next"
            @touchstart.prevent="next"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full
                shadow-md p-2 text-xl hover:bg-slate-100 transition"
            aria-label="Next service"
        >
            ›
        </button>
        </div>
    </div>
    </section>

    <!-- ===============================
        WHY CHOOSE BRIGHTSPARK
        MATCHED TO SERVICES STYLE
    ================================= -->
    <section class="section-padding bg-white">
    <div
        class="max-page-width flex flex-col lg:flex-row gap-12 items-center"
    >
        <!-- LEFT: Heading + bullets -->
        <div class="flex-1 space-y-6">
        <!-- Heading row with gradient icon (same palette as services) -->
        <div class="flex items-center gap-4">
            <div>
            <h2
                class="text-2xl sm:text-3xl lg:text-4xl font-extrabold
                    tracking-tight text-slate-900"
            >
                Why Choose BrightSpark?
            </h2>
            <p class="mt-1 text-sm sm:text-base text-slate-500">
                With over 15 years of experience, we deliver exceptional workmanship
                with a commitment to safety, transparency, and long-term reliability.
            </p>
            </div>
        </div>

        <!-- Bullet list with hover-lift ticks -->
        <ul class="mt-4 space-y-3 text-sm sm:text-base text-slate-700">
            <!-- Each li is a "group" so the icon can react to hover -->
            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>Licensed and fully insured electricians</span>
            </li>

            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>Upfront, transparent pricing</span>
            </li>

            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>24/7 emergency service availability</span>
            </li>

            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>Quality workmanship guarantee</span>
            </li>

            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>Latest tools and techniques</span>
            </li>

            <li class="group flex gap-3 items-start">
            <div
                class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-xs font-bold
                    shadow-[0_14px_30px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
                ✓
            </div>
            <span>Excellent customer service</span>
            </li>
        </ul>
        </div>

        <!-- RIGHT IMAGES (FIXED – ALL SHOW ON MOBILE) -->
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-3xl overflow-hidden shadow-lg">
            <img :src="tools1" class="w-full h-56 object-cover" />
          </div>

          <div class="rounded-3xl overflow-hidden shadow-lg">
            <img :src="tools2" class="w-full h-56 object-cover" />
          </div>

          <!-- THIS WAS HIDDEN BEFORE – NOW ALWAYS VISIBLE -->
          <div class="sm:col-span-2 rounded-3xl overflow-hidden shadow-lg">
            <img :src="tools3" class="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
button {
  transition: all 0.2s ease;
}
button:hover {
  transform: scale(1.05);
}
</style>