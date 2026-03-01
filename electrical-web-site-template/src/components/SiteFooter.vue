<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/Images/BrightSpark_Logo.png'

// Social logos
import facebookLogo from '../assets/Images/Social_Logos/Facebook_Logo.jpg'
import instagramLogo from '../assets/Images/Social_Logos/Instagram_Logo.jpg'
import twitterLogo from '../assets/Images/Social_Logos/Twitter_Logo_X.jpg'

// Standardised phone (same as rest of site)
const phoneDisplay = '(123) 456-7890'
const phoneLink = 'tel:1234567890'
</script>

<template>
  <footer class="bg-slate-950 text-slate-100 pt-12 pb-6">
    <div
      class="max-page-width grid gap-10 md:grid-cols-[2.4fr,1.4fr,1.1fr,1.4fr]"
    >
      <!-- BRAND / BLURB + PHONE BUTTON -->
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <!-- Logo + name -->
          <div class="flex items-center gap-3">
            <img
              :src="logo"
              alt="BrightSpark Electrical Services logo"
              class="h-9 sm:h-11 md:h-12 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            />
            <div class="leading-tight">
              <p class="font-semibold text-sm sm:text-base">
                BrightSpark
              </p>
              <p class="text-[10px] sm:text-xs tracking-wide text-slate-300">
                ELECTRICAL SERVICES
              </p>
            </div>
          </div>

          <!-- Phone button (same style as navbar) -->
          <a
            :href="phoneLink"
            class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/50 hover:from-amber-300 hover:to-orange-400 transition"
          >
            <span class="text-base">📞</span>
            <span>{{ phoneDisplay }}</span>
          </a>
        </div>

        <p class="text-sm text-slate-400 max-w-xs">
          Professional electrical services across Sydney. From small home
          jobs to large installations, our licensed and insured team
          delivers safe, reliable work every time.
        </p>

        <span
          class="inline-flex items-center justify-center rounded-full border border-amber-400 px-3 py-1 text-[11px] font-semibold text-amber-300"
        >
          24/7 Emergency Service Available
        </span>
      </div>

      <!-- SERVICE AREAS -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold text-slate-200">Service Areas</h3>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>Sydney CBD</li>
          <li>Inner West</li>
          <li>Eastern Suburbs</li>
          <li>Lower North Shore</li>
          <li>Western Sydney</li>
          <li>South West Sydney</li>
          <li>Northern Beaches</li>
          <li>Sutherland Shire</li>
        </ul>
      </div>

      <!-- QUICK LINKS -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold text-slate-200">Quick Links</h3>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>
            <RouterLink to="/" class="hover:text-white transition-colors">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/services" class="hover:text-white transition-colors">
              Services
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-white transition-colors">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- CONTACT + HOURS + SOCIAL -->
      <div class="space-y-4">
        <!-- Contact -->
        <div class="space-y-2">
          <h3 class="text-sm font-semibold text-slate-200">Contact Us</h3>
          <ul class="space-y-1 text-sm text-slate-400">
            <li>Phone: {{ phoneDisplay }}</li>
            <li>Email: info@brightsparkelectrical.com</li>
            <li>Sydney, NSW</li>
          </ul>
        </div>

        <!-- Hours -->
        <div class="space-y-2">
          <h4 class="text-sm font-semibold text-slate-200">Business Hours</h4>
          <ul class="space-y-1 text-sm text-slate-400">
            <li>Mon – Fri: 7:00 AM – 7:00 PM</li>
            <li>Sat – Sun: 7:30 AM – 1:00 PM</li>
          </ul>
        </div>

        <!-- Follow & Like Us -->
        <div class="space-y-2 pt-1">
          <h4 class="text-sm font-semibold text-slate-200">
            Follow &amp; Like Us
          </h4>
          <div class="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition overflow-hidden"
            >
              <img
                :src="instagramLogo"
                alt="Instagram logo"
                class="h-6 w-6 object-contain"
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition overflow-hidden"
            >
              <img
                :src="facebookLogo"
                alt="Facebook logo"
                class="h-6 w-6 object-contain"
              />
            </a>

            <a
              href="#"
              aria-label="Twitter / X"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition overflow-hidden"
            >
              <img
                :src="twitterLogo"
                alt="Twitter logo"
                class="h-6 w-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- TRADEMARK STRIP -->
    <div class="mt-8 border-t border-slate-800 pt-4">
      <div
        class="max-page-width flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500"
      >
        <p>© 2026 BrightSpark™ Electrical Services. All rights reserved.</p>
        <p>BrightSpark™ is a trademark of BrightSpark Electrical Services.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>