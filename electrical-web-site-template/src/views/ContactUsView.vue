<script setup>
import heroImage from '../assets/Images/Hero_Image.jpg'

// simple local state (no backend yet)
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = () => {
  // For now just log – you can later hook this up to email / backend.
  console.log('Contact form submitted:', { ...form })
  alert('Thank you for contacting BrightSpark. We will get back to you shortly.')

  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<template>
  <div>
    <!-- TOP BANNER (similar styling to HomeView hero) -->
    <section
      class="relative text-white overflow-hidden bg-center bg-cover"
      :style="`background-image: url(${heroImage});`"
    >
      <div
        class="relative max-page-width section-padding flex flex-col gap-4"
      >
        <div
          class="bg-black/65 sm:bg-black/55 rounded-2xl px-5 sm:px-6 lg:px-8 py-6 space-y-3 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur-[2px]"
        >
          <p class="text-xs sm:text-sm uppercase tracking-[0.2em] text-amber-300">
            Get in touch
          </p>
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
            Contact BrightSpark Electrical
          </h1>
          <p class="text-sm sm:text-base text-slate-100/95 max-w-xl">
            Have a question, need a quote, or require urgent assistance?
            Send us a message and our licensed electricians will be in touch.
          </p>
        </div>
      </div>
    </section>

    <!-- MAIN CONTACT SECTION -->
    <section class="section-padding bg-white">
      <div
        class="max-page-width grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start"
      >
        <!-- LEFT COLUMN: DETAILS -->
        <div class="space-y-6 text-slate-800">
          <!-- Phone -->
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
            >
              📱
            </div>
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-500">
                Phone
              </p>
              <p class="font-semibold text-slate-900 text-sm sm:text-base">
                0437 358 342
              </p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
            >
              ✉️
            </div>
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p class="font-semibold text-slate-900 text-sm sm:text-base">
                info@brightsparkelectrical.com
              </p>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
            >
              📍
            </div>
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-500">
                Location
              </p>
              <p class="font-medium text-slate-900 text-sm sm:text-base">
                Sydney, NSW
              </p>
            </div>
          </div>

          <!-- Hours -->
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
            >
              ⏰
            </div>
            <div class="space-y-1 text-sm sm:text-base">
              <p class="text-xs uppercase tracking-wide text-slate-500">
                Opening Hours
              </p>
              <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
              <p>Saturday – Sunday: 7:30 AM – 1:00 PM</p>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-500 pt-2">
            For urgent electrical emergencies outside these hours,
            please call our 24/7 number above.
          </p>
        </div>

        <!-- RIGHT COLUMN: FORM CARD -->
        <div
          class="bg-white rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-slate-100 px-5 sm:px-7 lg:px-9 py-7 sm:py-8"
        >
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Names -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-1.5">
                <label
                  for="firstName"
                  class="text-xs font-medium uppercase tracking-wide text-slate-600"
                >
                  First Name <span class="text-amber-500">*</span>
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>

              <div class="space-y-1.5">
                <label
                  for="lastName"
                  class="text-xs font-medium uppercase tracking-wide text-slate-600"
                >
                  Last Name <span class="text-amber-500">*</span>
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>
            </div>

            <!-- Email + Phone -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-1.5">
                <label
                  for="email"
                  class="text-xs font-medium uppercase tracking-wide text-slate-600"
                >
                  Email <span class="text-amber-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>

              <div class="space-y-1.5">
                <label
                  for="phone"
                  class="text-xs font-medium uppercase tracking-wide text-slate-600"
                >
                  Phone <span class="text-amber-500">*</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="space-y-1.5">
              <label
                for="message"
                class="text-xs font-medium uppercase tracking-wide text-slate-600"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              ></textarea>
            </div>

            <!-- Fake reCAPTCHA placeholder -->
            <div
              class="mt-2 h-16 w-full max-w-xs bg-slate-100 border border-slate-300 rounded-md flex items-center justify-center text-[10px] text-slate-500"
            >
              reCAPTCHA placeholder
            </div>

            <!-- Submit button -->
            <div class="pt-2">
              <button
                type="submit"
                class="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-10 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/50 hover:from-amber-300 hover:to-orange-400 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>