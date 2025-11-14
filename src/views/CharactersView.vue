<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// Add character page class to body on mobile
onMounted(() => {
  if (window.innerWidth <= 768) {
    document.body.classList.add('character-page-mobile')
  }
})

onUnmounted(() => {
  document.body.classList.remove('character-page-mobile')
})

// Import SVG files using Vite's explicit import syntax
import pirataSereiaSvg from '@/assets/pirata e sereia.svg'
import princeseSvg from '@/assets/princese.svg'
import faesSvg from '@/assets/fae.svg'
import mariposaSvg from '@/assets/mariposa.svg'
import primaveraSvg from '@/assets/primavera.svg'
import satiroFaunoSvg from '@/assets/sátiro e fauno.svg'
import vampirosSvg from '@/assets/vampiros.svg'
import vampirasSvg from '@/assets/vampiras.svg'
import bruxesSvg from '@/assets/bruxes.svg'

// Character data configuration (ordered by index numbers 2-10)
const characterData = {
  // 2. Fadas Mariposa
  mariposa: {
    svgSrc: mariposaSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/2-fadas-mariposammanu',
  },
  // 3. Fadas Primavera
  primavera: {
    svgSrc: primaveraSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/3-fadas-primavera',
  },
  // 4. Fadas Fae
  fae: {
    svgSrc: faesSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/4-fadas-fae',
  },
  // 5. Princese
  princese: {
    svgSrc: princeseSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/5-princese',
  },
  // 6. Bruxe
  bruxes: {
    svgSrc: bruxesSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/6-bruxe',
  },
  // 7. Mallicar e Dalia (Vampira)
  vampiras: {
    svgSrc: vampirasSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/7-mallicar-e-dalia',
  },
  // 8. Os Vampiros
  vampiros: {
    svgSrc: vampirosSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/8-os-vampiros',
  },
  // 9. O Fauno e o Sátiro
  'satiro-fauno': {
    svgSrc: satiroFaunoSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/9-o-fauno-e-o-satiro',
  },
  // 10. A Pirata e a Sereia
  'pirata-sereia': {
    svgSrc: pirataSereiaSvg,
    soundcloudUrl: 'https://soundcloud.com/emmanuel-fernandes-360214406/10-a-pirata-e-a-sereia',
  },
}

// Convert SoundCloud URLs to embed URLs
const getSoundCloudEmbedUrl = (url: string) => {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
}

// Get current character based on route
const currentCharacter = computed(() => {
  const routeName = route.name as string
  return characterData[routeName as keyof typeof characterData] || characterData['bruxes']
})
</script>

<template>
  <div class="character-view">
    <!-- Character SVG -->
    <div class="svg-container">
      <img
        :src="currentCharacter.svgSrc"
        :alt="`Logo ${t(`characters.names.${String(route.name)}`)}`"
        class="character-svg"
      />
    </div>

    <!-- SoundCloud Player -->
    <div class="audio-container">
      <iframe
        :src="getSoundCloudEmbedUrl(currentCharacter.soundcloudUrl)"
        width="100%"
        height="166"
        frameborder="no"
        scrolling="no"
        allow="autoplay"
        class="soundcloud-player"
      >
      </iframe>
    </div>

    <!-- Text Content -->
    <div class="text-container">
      <div class="character-text" v-html="t(`characters.content.${String(route.name)}`)"></div>
    </div>
    <img src="@/assets/fancy2.svg" :alt="t('common.logoAlt')" class="fancy-bottom" />
  </div>
</template>

<style scoped>
.character-view {
  background-color: #b889af;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}

.svg-container {
  /* max-width: 400px; */
  width: 100%;
  display: flex;
  justify-content: center;
}

.character-svg {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
}

.audio-container {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.soundcloud-player {
  width: 100%;
  max-width: 500px;
  height: 166px;
  border-radius: 10px;
  margin: 0 auto;
}

.text-container {
  max-width: 800px;
  width: 100%;
  border-radius: 15px;
  padding: 2rem;
}

.character-title {
  font-size: 2.5rem;
  color: #fff5e9;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
}

.character-text {
  line-height: 1.8;
}

.character-text p {
  font-size: 1.1rem;
  color: #fff5e9;
  margin-bottom: 1.5rem;
  text-align: justify;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.character-text strong {
  color: #ffeb3b;
  font-weight: bold;
}

.character-text em {
  color: #ff9800;
  font-style: italic;
}

.text-paragraph:last-child {
  margin-bottom: 0;
}

.fancy-bottom {
  position: relative;

  max-height: 100px;
  z-index: 10;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  :global(body.character-page-mobile),
  :global(body.character-page-mobile #app) {
    background: #b889af !important;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  .character-view {
    padding: 1.5rem;
    gap: 1.5rem;
    background: #b889af !important;
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    min-height: 100vh;
  }

  .character-title {
    font-size: 2rem;
  }

  .text-container {
    padding: 1.5rem;
  }

  .character-text p {
    font-size: 1rem;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .character-view {
    padding: 1rem;
  }

  .character-title {
    font-size: 1.6rem;
  }

  .text-container {
    padding: 1rem;
  }

  .svg-container {
    max-width: 300px;
  }
}
</style>
