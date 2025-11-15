<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const contentVisible = ref(false)

// SoundCloud embed configuration
const introductionUrl = 'https://soundcloud.com/fantastico-cuir/1-introducao'

// Convert SoundCloud URLs to embed URLs
const getSoundCloudEmbedUrl = (url: string) => {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false&download=false&show_artwork=true&show_bpm=false&show_playcount=false`
}

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true
  }, 300)

  // Add sobre page class to body on mobile
  if (window.innerWidth <= 768) {
    document.body.classList.add('sobre-page-mobile')
  }
})

onUnmounted(() => {
  document.body.classList.remove('sobre-page-mobile')
})
</script>

<template>
  <div class="sobre-view" :class="{ visible: contentVisible }">
    <!-- Logo -->
    <div class="logo-container">
      <img src="@/assets/logo.svg" :alt="t('common.logoAlt')" class="main-logo" />
      <img
        src="@/assets/smaller_fancy.svg"
        :alt="t('common.decorationAlt')"
        class="fancy-decoration"
      />
    </div>

    <!-- SoundCloud Player for Introduction -->
    <div class="audio-container" role="region" aria-label="Reprodutor de áudio de introdução">
      <h2 class="sr-only">Áudio de Introdução</h2>
      <iframe
        :src="getSoundCloudEmbedUrl(introductionUrl)"
        title="Reprodutor SoundCloud para introdução"
        width="100%"
        height="166"
        frameborder="no"
        scrolling="no"
        class="soundcloud-player"
        tabindex="0"
        role="application"
        aria-label="Reprodutor de áudio: Introdução ao Fantástico Cuir"
      >
      </iframe>
    </div>

    <!-- Text Content Block -->
    <div class="text-content" v-html="t('about.content')"></div>
  </div>
</template>

<style scoped>
.sobre-view {
  background: #fff5e9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sobre-view.visible {
  opacity: 1;
  transform: translateY(0);
}

.logo-container {
  margin-top: 4rem;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
}

.main-logo {
  position: relative;
  width: 100%;
  margin-bottom: -100px;
  z-index: 10;
  height: auto;
}

.fancy-decoration {
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
}

.audio-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
  max-width: 600px;
}

.soundcloud-player {
  width: 100%;
  max-width: 500px;
  height: 166px;
  border-radius: 10px;
  margin: 0 auto;
}

/* Accessibility styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Improve focus visibility for the iframe */
.soundcloud-player:focus {
  outline: 3px solid #ff5500;
  outline-offset: 3px;
}

.text-content {
  max-width: 600px;
  width: 100%;
  color: #333;
  line-height: 2;
  margin-top: 5rem;
}

/* Because the content is injected with v-html, use :deep to style its children */
.text-content :deep(h2) {
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  color: #e91e63;
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
}

.text-content :deep(p) {
  font-size: 1.1rem;
  text-align: justify;
  line-height: 1.8;
  margin: 0 0 1rem 0; /* add vertical spacing between paragraphs */
}

.text-content :deep(p + p) {
  margin-top: 0.5rem; /* extra breathing room between consecutive paragraphs */
}

.text-content :deep(strong) {
  color: #e91e63;
  font-weight: bold;
}

.text-content :deep(em) {
  color: #ff6b35;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  :global(body.sobre-page-mobile),
  :global(body.sobre-page-mobile #app) {
    background: #fff5e9 !important;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  .sobre-view {
    padding: 1.5rem;
    background: #fff5e9 !important;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .main-logo {
    max-width: 250px;
  }

  .fancy-decoration {
    max-width: 120px;
  }

  .text-content h2 {
    font-size: 1.6rem;
  }

  .text-content p {
    font-size: 1rem;
    text-align: left;
  }

  /* Mobile accessibility improvements - elementos ocultos não precisam de estilos visuais */
  .audio-container {
    margin: 1.5rem 0;
    max-width: 100%;
  }

  .soundcloud-player {
    height: 166px;
    min-height: 166px;
    width: 100%;
  }

  /* Better focus indicators on mobile */
  .soundcloud-player:focus {
    outline: 4px solid #ff5500;
    outline-offset: 4px;
  }
}

@media (max-width: 480px) {
  .sobre-view {
    padding: 1rem;
  }

  .main-logo {
    max-width: 200px;
  }

  .fancy-decoration {
    max-width: 100px;
  }

  .text-content h2 {
    font-size: 1.4rem;
  }

  .text-content p {
    font-size: 0.95rem;
  }

  /* Enhanced mobile accessibility - elementos ocultos não precisam de estilos visuais */
  .audio-container {
    margin: 1rem 0;
  }
}
</style>
