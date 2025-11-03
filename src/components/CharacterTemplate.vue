<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  characterName: string
  svgContent: string
  audioSrc: string
  themeColor: string
  textContent: string
}

const props = defineProps<Props>()
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const audioRef = ref<HTMLAudioElement | null>(null)

const togglePlay = () => {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

const updateTime = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
  }
}

const updateDuration = () => {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
  }
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.addEventListener('loadedmetadata', updateDuration)
    audioRef.value.addEventListener('timeupdate', updateTime)
    audioRef.value.addEventListener('ended', () => {
      isPlaying.value = false
    })
  }
})
</script>

<template>
  <div class="character-page" :style="{ '--theme-color': themeColor }">
    <!-- Back Button -->
    <button class="back-button" @click="$router.go(-1)">
      <span>←</span>
      voltar
    </button>

    <!-- Character Title -->
    <h1 class="character-title">{{ characterName }}</h1>

    <!-- SVG Illustration -->
    <div class="svg-container" v-html="svgContent"></div>

    <!-- Audio Player -->
    <div class="audio-player">
      <audio ref="audioRef" :src="audioSrc" preload="metadata"></audio>

      <button class="play-button" @click="togglePlay">
        <span v-if="!isPlaying">▶</span>
        <span v-else>⏸</span>
      </button>

      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: duration ? (currentTime / duration) * 100 + '%' : '0%' }"
          ></div>
        </div>
        <div class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
      </div>
    </div>

    <!-- Text Content -->
    <div class="text-content">
      <p v-html="textContent"></p>
    </div>

    <!-- Character Icon at Bottom -->
    <div class="bottom-icon">
      <div class="icon-decoration"></div>
    </div>
  </div>
</template>

<style scoped>
.character-page {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, var(--theme-color), rgba(255, 255, 255, 0.9));
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  min-height: 80vh;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  color: #fff5e9;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.back-button span {
  font-size: 16px;
}

.character-title {
  color: #fff5e9;
  font-size: 2.5rem;
  margin: 60px 0 30px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'serif';
  font-weight: normal;
}

.svg-container {
  margin: 30px auto;
  max-width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-container svg {
  max-width: 100%;
  max-height: 100%;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
}

.audio-player {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
  padding: 15px 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.play-button {
  background: #fff5e9;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.progress-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.progress-bar {
  background: rgba(255, 255, 255, 0.3);
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  background: #fff5e9;
  height: 100%;
  border-radius: 2px;
  transition: width 0.1s ease;
}

.time-display {
  color: #fff5e9;
  font-size: 12px;
  text-align: right;
}

.text-content {
  margin: 30px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  color: #333;
  line-height: 1.6;
  font-size: 14px;
  text-align: justify;
}

.text-content p {
  margin: 0;
}

.bottom-icon {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.icon-decoration {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: relative;
}

.icon-decoration::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #fff5e9;
  border-radius: 50%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .character-page {
    margin: 1rem;
    padding: 1.5rem;
    max-width: none;
  }

  .character-title {
    font-size: 2rem;
    margin: 50px 0 20px 0;
  }

  .svg-container {
    height: 120px;
  }

  .audio-player {
    padding: 12px 15px;
    gap: 10px;
  }

  .play-button {
    width: 35px;
    height: 35px;
  }

  .text-content {
    padding: 15px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .character-page {
    margin: 0.5rem;
    padding: 1rem;
  }

  .back-button {
    top: 15px;
    left: 15px;
    padding: 6px 12px;
    font-size: 12px;
  }

  .character-title {
    font-size: 1.8rem;
    margin: 40px 0 15px 0;
  }
}
</style>
