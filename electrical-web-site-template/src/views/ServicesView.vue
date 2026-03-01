<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <!-- HERO: Our Electrical Services -->
    <section class="relative overflow-hidden bg-[#050814] text-white">
    <!-- Radial glow on the right, dark navy base -->
    <div
        class="pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(circle_at_80%_0,_rgba(249,115,22,0.65)_0,_rgba(5,8,20,1)_55%,_rgba(5,8,20,1)_100%)]"
    ></div>

    <div
        class="max-page-width py-20 sm:py-24 lg:py-28
            text-center flex flex-col items-center gap-5"
    >
        <!-- Main heading -->
        <h1
        class="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold leading-tight
                tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]"
        >
        Our Electrical
        <span
            class="block mt-1
                bg-gradient-to-r from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                bg-clip-text text-transparent"
        >
            Services
        </span>
        </h1>

        <!-- Subheading -->
        <p
        class="max-w-3xl text-sm sm:text-base lg:text-lg
                text-slate-200/95"
        >
        Comprehensive electrical solutions for residential and commercial needs.
        </p>

        <!-- Emphasis line -->
        <p
        class="text-sm sm:text-base lg:text-lg font-semibold
                text-[#ffb020] mt-1"
        >
        Professional, reliable, and always on time.
        </p>
    </div>
    </section>

    <!-- RESIDENTIAL SERVICES -->
    <section class="section-padding bg-white">
    <div class="max-page-width space-y-10">
        <!-- Heading row -->
        <div class="flex items-center gap-4">
        <!-- Big gradient icon -->
        <div
            class="flex h-16 w-16 items-center justify-center rounded-[1.5rem]
                bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                text-white text-3xl
                shadow-[0_24px_60px_rgba(249,115,22,0.55)]"
        >
            <span class="mt-0.5">🏠</span>
        </div>

        <div>
            <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold
                    tracking-tight text-slate-900"
            >
            Residential Services
            </h2>
            <p class="mt-1 text-sm sm:text-base text-slate-500">
            Expert electrical solutions for your home.
            </p>
        </div>
        </div>

        <!-- Cards -->
        <div class="grid gap-6 md:grid-cols-3">
        <!-- Lighting Solutions -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <!-- small gradient icon that tilts -->
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">💡</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Lighting Solutions
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Professional lighting installation and design for your home.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Indoor &amp; outdoor lighting</li>
            <li>LED upgrades</li>
            <li>Dimmer switches</li>
            <li>Recessed lighting</li>
            </ul>
        </article>

        <!-- Panel Upgrades -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">⚙️</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Panel Upgrades
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Modern electrical panels for improved safety and capacity.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Service upgrades</li>
            <li>Circuit breaker replacement</li>
            <li>Fuse box updates</li>
            <li>Capacity expansion</li>
            </ul>
        </article>

        <!-- Outlets & Wiring -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">⚡</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Outlets &amp; Wiring
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Safe and reliable outlet installation and rewiring services.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>GFCI outlets</li>
            <li>USB outlets</li>
            <li>Whole-house rewiring</li>
            <li>Outlet relocation</li>
            </ul>
        </article>
        </div>
    </div>
    </section>

   <!-- COMMERCIAL SERVICES -->
    <section class="section-padding bg-white">
    <div class="max-page-width space-y-10">
        <!-- Heading row -->
        <div class="flex items-center gap-4">
        <div
            class="flex h-16 w-16 items-center justify-center rounded-[1.5rem]
                bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                text-white text-3xl
                shadow-[0_24px_60px_rgba(249,115,22,0.55)]"
        >
            <span class="mt-0.5">🏢</span>
        </div>

        <div>
            <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold
                    tracking-tight text-slate-900"
            >
            Commercial Services
            </h2>
            <p class="mt-1 text-sm sm:text-base text-slate-500">
            Professional electrical work for business and industrial sites.
            </p>
        </div>
        </div>

        <!-- Cards -->
        <div class="grid gap-6 md:grid-cols-3">
        <!-- Commercial Electrical -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">🧰</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Commercial Electrical
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            End-to-end electrical systems for offices, retail and warehouses.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Office &amp; shop fit-outs</li>
            <li>Retail &amp; hospitality installs</li>
            <li>Warehouse &amp; high-bay lighting</li>
            <li>Power distribution boards</li>
            </ul>
        </article>

        <!-- Data & Networking -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">📡</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Data &amp; Networking
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Reliable low-voltage cabling and network infrastructure.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Cat5e / Cat6 structured cabling</li>
            <li>Server &amp; comms racks</li>
            <li>Fibre optic runs</li>
            <li>Wi-Fi &amp; access points</li>
            </ul>
        </article>

        <!-- HVAC Electrical -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">🌡️</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            HVAC Electrical
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Electrical services for heating, cooling and mechanical plants.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>System power &amp; controls</li>
            <li>Thermostats &amp; sensors</li>
            <li>Controls wiring upgrades</li>
            <li>Ongoing maintenance</li>
            </ul>
        </article>
        </div>
    </div>
    </section>

    <!-- SPECIALIZED SERVICES -->
    <section class="section-padding bg-slate-50">
    <div class="max-page-width space-y-10">
        <!-- Heading row -->
        <div class="flex items-center gap-4">
        <div
            class="flex h-16 w-16 items-center justify-center rounded-[1.5rem]
                bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                text-white text-3xl
                shadow-[0_24px_60px_rgba(249,115,22,0.55)]"
        >
            <span class="mt-0.5">🛡️</span>
        </div>

        <div>
            <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold
                    tracking-tight text-slate-900"
            >
            Specialized Services
            </h2>
            <p class="mt-1 text-sm sm:text-base text-slate-500">
            Additional expertise for safety, reliability and backup power.
            </p>
        </div>
        </div>

        <!-- Cards -->
        <div class="grid gap-6 md:grid-cols-3">
        <!-- Safety Inspections -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">✅</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Safety Inspections
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Detailed electrical safety checks for homes, strata and workplaces.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Compliance &amp; safety reports</li>
            <li>Pre-purchase inspections</li>
            <li>Risk assessments</li>
            <li>Thermal imaging (on request)</li>
            </ul>
        </article>

        <!-- Repairs & Maintenance -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">🔧</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Repairs &amp; Maintenance
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Fast fault-finding and scheduled maintenance to keep you running.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Troubleshooting &amp; diagnostics</li>
            <li>Emergency call-outs</li>
            <li>Preventative maintenance plans</li>
            <li>System testing &amp; tagging</li>
            </ul>
        </article>

        <!-- Generator Services -->
        <article
            class="group bg-white rounded-[32px] border border-slate-100
                px-7 py-8 space-y-4
                shadow-[0_22px_55px_rgba(15,23,42,0.10)]
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
        >
            <div
            class="inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#ffc94a] via-[#ff9f1c] to-[#ff6a00]
                    text-white text-2xl
                    shadow-[0_18px_40px_rgba(249,115,22,0.55)]
                    transform transition-transform duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:translate-x-1
                    group-hover:rotate-[8deg]"
            >
            <span class="mt-0.5">🔋</span>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
            Generator Services
            </h3>

            <p class="text-sm sm:text-base text-slate-500">
            Backup power solutions for homes, businesses and critical systems.
            </p>

            <ul
            class="mt-3 space-y-1.5 text-sm text-slate-600 list-disc pl-5
                    marker:text-[#ff9f1c]"
            >
            <li>Generator sizing &amp; supply</li>
            <li>Transfer switch setup</li>
            <li>Servicing &amp; maintenance</li>
            <li>Emergency power changeover</li>
            </ul>
        </article>
        </div>
    </div>
    </section>

    <!-- OUR PROCESS -->
    <section class="section-padding bg-slate-50">
    <div class="max-page-width text-center space-y-12">
        <!-- Heading -->
        <div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Our Process
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-500">
            Simple, transparent, and hassle-free service from start to finish.
        </p>
        </div>

        <!-- Steps -->
        <div class="grid gap-10 md:grid-cols-4 max-w-5xl mx-auto">
        <!-- STEP 1 -->
        <div class="flex flex-col items-center text-center gap-4 group">
            <!-- Number pill with hover lift -->
            <div
            class="relative flex items-center justify-center h-28 w-28 rounded-[26px]
                    bg-gradient-to-b from-amber-400 to-orange-500
                    shadow-[0_24px_55px_rgba(248,181,0,0.45)]
                    transition-transform duration-200 ease-out
                    group-hover:-translate-y-2 group-hover:shadow-[0_32px_70px_rgba(248,181,0,0.6)]"
            >
            <div
                class="absolute inset-[6px] rounded-[22px]
                    bg-gradient-to-b from-[#ffe9bf] via-[#ffb547] to-[#ff8a1a]"
            ></div>
            <span
                class="relative text-3xl font-extrabold text-white
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
            >
                01
            </span>
            </div>

            <div class="space-y-2">
            <h3 class="text-lg font-semibold text-slate-900">Contact Us</h3>
            <p class="text-sm text-slate-500 max-w-xs">
                Call for a free Quote.
            </p>
            </div>
        </div>

        <!-- STEP 2 -->
        <div class="flex flex-col items-center text-center gap-4 group">
            <div
            class="relative flex items-center justify-center h-28 w-28 rounded-[26px]
                    bg-gradient-to-b from-amber-400 to-orange-500
                    shadow-[0_24px_55px_rgba(248,181,0,0.45)]
                    transition-transform duration-200 ease-out
                    group-hover:-translate-y-2 group-hover:shadow-[0_32px_70px_rgba(248,181,0,0.6)]"
            >
            <div
                class="absolute inset-[6px] rounded-[22px]
                    bg-gradient-to-b from-[#ffe9bf] via-[#ffb547] to-[#ff8a1a]"
            ></div>
            <span
                class="relative text-3xl font-extrabold text-white
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
            >
                02
            </span>
            </div>

            <div class="space-y-2">
            <h3 class="text-lg font-semibold text-slate-900">Assessment</h3>
            <p class="text-sm text-slate-500 max-w-xs">
                We evaluate your needs and provide a detailed quote.
            </p>
            </div>
        </div>

        <!-- STEP 3 -->
        <div class="flex flex-col items-center text-center gap-4 group">
            <div
            class="relative flex items-center justify-center h-28 w-28 rounded-[26px]
                    bg-gradient-to-b from-amber-400 to-orange-500
                    shadow-[0_24px_55px_rgba(248,181,0,0.45)]
                    transition-transform duration-200 ease-out
                    group-hover:-translate-y-2 group-hover:shadow-[0_32px_70px_rgba(248,181,0,0.6)]"
            >
            <div
                class="absolute inset-[6px] rounded-[22px]
                    bg-gradient-to-b from-[#ffe9bf] via-[#ffb547] to-[#ff8a1a]"
            ></div>
            <span
                class="relative text-3xl font-extrabold text-white
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
            >
                03
            </span>
            </div>

            <div class="space-y-2">
            <h3 class="text-lg font-semibold text-slate-900">Schedule</h3>
            <p class="text-sm text-slate-500 max-w-xs">
                Choose a convenient time for our certified electricians.
            </p>
            </div>
        </div>

        <!-- STEP 4 -->
        <div class="flex flex-col items-center text-center gap-4 group">
            <div
            class="relative flex items-center justify-center h-28 w-28 rounded-[26px]
                    bg-gradient-to-b from-amber-400 to-orange-500
                    shadow-[0_24px_55px_rgba(248,181,0,0.45)]
                    transition-transform duration-200 ease-out
                    group-hover:-translate-y-2 group-hover:shadow-[0_32px_70px_rgba(248,181,0,0.6)]"
            >
            <div
                class="absolute inset-[6px] rounded-[22px]
                    bg-gradient-to-b from-[#ffe9bf] via-[#ffb547] to-[#ff8a1a]"
            ></div>
            <span
                class="relative text-3xl font-extrabold text-white
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]"
            >
                04
            </span>
            </div>

            <div class="space-y-2">
            <h3 class="text-lg font-semibold text-slate-900">Complete</h3>
            <p class="text-sm text-slate-500 max-w-xs">
                We finish the job right and ensure your satisfaction.
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>

    <!-- CTA: READY TO GET STARTED (matches screenshot) -->
    <section
      class="bg-gradient-to-br from-amber-400 via-orange-400 to-orange-500 text-white"
    >
      <div
        class="max-page-width section-padding text-center flex flex-col items-center gap-6"
      >


        <!-- Icon (SVG lightning, like the reference) -->
        <div class="flex items-center justify-center">
        <svg
            viewBox="0 0 24 24"
            class="h-12 w-12 drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            aria-hidden="true"
        >
            <!-- Simple lightning bolt shape -->
            <path
            d="M13 2L4 14h6l-1 8 11-12h-6l-1-8z"
            fill="white"
            />
        </svg>
        </div>

        <!-- Heading -->
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
        >
          Ready to Get<br class="hidden sm:block" />
          Started?
        </h2>

        <!-- Copy (two lines like the design) -->
        <div class="space-y-2 text-sm sm:text-base">
          <p>Contact us today for a free estimate.</p>
          <p>Available 24/7 for emergencies.</p>
        </div>

        <!-- Buttons row -->
        <div
        class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        <!-- CALL BUTTON (dark) -->
        <button
            class="inline-flex items-center justify-center gap-3
                rounded-full bg-slate-950
                px-8 py-3
                text-xs sm:text-sm font-semibold tracking-wide uppercase
                shadow-[0_18px_40px_rgba(15,23,42,0.6)]
                transition-all duration-200 ease-out
                hover:-translate-y-1 hover:scale-[1.02]
                hover:shadow-[0_28px_60px_rgba(15,23,42,0.8)]
                active:translate-y-0 active:scale-100"
        >
            <span class="text-lg">📞</span>
            <span>Call (123) 456-7890</span>
        </button>

        <!-- REQUEST QUOTE BUTTON (outlined) -->
        <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center
                rounded-full border-2 border-white
                px-8 py-3
                text-xs sm:text-sm font-semibold tracking-wide uppercase
                bg-transparent
                transition-all duration-200 ease-out
                hover:-translate-y-1 hover:scale-[1.02]
                hover:bg-white/10
                hover:shadow-[0_25px_55px_rgba(0,0,0,0.25)]
                active:translate-y-0 active:scale-100"
        >
            Request Quote
        </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>