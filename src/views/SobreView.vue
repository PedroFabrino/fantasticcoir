<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const contentVisible = ref(false)

// SoundCloud embed configuration
const introductionUrl = 'https://soundcloud.com/emmanuel-fernandes-360214406/1-introducao'

// Convert SoundCloud URLs to embed URLs
const getSoundCloudEmbedUrl = (url: string) => {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
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
    <div class="audio-container">
      <iframe
        :src="getSoundCloudEmbedUrl(introductionUrl)"
        width="100%"
        height="166"
        frameborder="no"
        scrolling="no"
        allow="autoplay"
        class="soundcloud-player"
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

.text-content {
  max-width: 600px;
  width: 100%;
  color: #333;
  line-height: 1.8;
  margin-top: 5rem;
}

.text-content h2 {
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  color: #e91e63;
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
}

.text-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.text-content strong {
  color: #e91e63;
  font-weight: bold;
}

.text-content em {
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
}
</style>
