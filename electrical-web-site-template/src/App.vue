<script setup>
import MainNavbar from './components/MainNavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <MainNavbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped></style>