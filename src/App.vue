<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="app" class="fantasy-app">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff5e9;
  color: #f0f0f0;
  min-height: 100vh;
}

.fantasy-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Fantasy theme colors */
:root {
  --primary-gold: #d4af37;
  --primary-purple: #6b46c1;
  --primary-dark: #1a1a2e;
  --primary-light: #f0f0f0;
  --accent-red: #dc2626;
  --accent-green: #059669;
  --accent-blue: #2563eb;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem 0.5rem;
  }
}
</style>
