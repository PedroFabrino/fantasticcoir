<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const heroVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    heroVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section" :class="{ visible: heroVisible }">
      <div class="hero-content">
        <div class="logo-container">
          <img src="@/assets/fancy_logo.svg" alt="Fantastic Coir Event Logo" class="main-logo" />
        </div>

        <!-- Exhibition Title -->
        <div class="exhibition-section">
          <div class="exhibition-decorations">
            <img
              src="@/assets/fancy1.svg"
              alt="Fantastic Coir Event Logo"
              class="decoration-left"
            />
            <h2 class="exhibition-title">{{ $t('home.exhibition') }}</h2>
            <img
              src="@/assets/fancy1.svg"
              alt="Fantastic Coir Event Logo"
              class="decoration-right"
            />
          </div>

          <!-- Event Details -->
          <div class="mobile-event-details">
            <ul class="event-locations-list">
              <li class="event-location">
                <h3>{{ $t('home.event1_name') }}</h3>
                <p class="event-dates">{{ $t('home.event1_dates') }}</p>
              </li>

              <li class="event-location">
                <h3>{{ $t('home.event2_name') }}</h3>
                <p class="event-dates">{{ $t('home.event2_dates') }}</p>
              </li>
            </ul>
          </div>
          <img
            src="@/assets/fancy2.svg"
            :alt="t('common.logoAlt')"
            class="fancy-bottom desktop-fancy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  background: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.hero-section {
  display: flex;
  background: #284e42;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: 2rem;
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  text-align: center;
  max-width: 637px;
  max-height: 700px;
  width: 100%;
}

.logo-container {
  margin-bottom: 2rem;
  position: relative;
}

.main-logo {
  width: 100%;
  height: 100%;
}

.exhibition-section {
  margin-top: 2rem;
  background-color: white;
}

.exhibition-decorations {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.decoration-left {
  width: 71px;
  height: 89px;
  transform: scaleX(-1);
}
.decoration-right {
  width: 71px;
  height: 89px;
  fill: #71a2b5;
}

.exhibition-title {
  font-family: 'Times New Roman', serif;
  /* font-size: clamp(1.8rem, 5vw, 2.5rem); */
  color: #ea5279;
  /* font-family: IBM Plex Serif; */
  font-weight: 700;
  font-style: Bold;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
}

.mobile-event-details {
  display: block;
  margin: 2rem 0;
  padding: 0;
}

.event-locations-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.event-location {
  margin: 1.5rem 0;
  text-align: center;
}

.event-location h3 {
  color: #ea5279;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.event-dates {
  color: #ea5279;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
}

.details-decorations {
  position: relative;
  height: 20px;
  margin-bottom: 1rem;
}

.event-separator {
  height: 1px;
  background: #284e42;
  margin: 1rem 2rem;
  opacity: 0.3;
}

.fancy-bottom {
  /* position: relative; */
  max-height: 100px;
  z-index: 10;
  margin-top: 2.5rem;
}

.mobile-fancy {
  display: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  :global(body) {
    overflow-x: hidden;
    background: #284e42 !important;
    margin: 0;
    padding: 0;
  }

  :global(html) {
    background: #284e42 !important;
  }

  :global(#app) {
    background: #284e42 !important;
  }

  .home-view {
    padding: 0;
    margin: 0;
    background: #284e42 !important;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .hero-section {
    background: #284e42 !important;
    width: 100%;
    margin: 0;
    padding: 1rem;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .main-logo {
    max-width: 350px;
  }

  .exhibition-section {
    background: #284e42 !important;
  }

  .exhibition-decorations {
    gap: 1rem;
  }

  .decoration-left,
  .decoration-right {
    display: none;
  }

  .exhibition-title {
    font-size: 32px;
    color: white;
  }

  .mobile-event-details {
    display: block !important;
    margin: 2rem 0 0 0;
    padding: 1.5rem;
    background: #284e42 !important;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .details-decorations {
    display: none;
  }

  .event-locations-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .event-location {
    text-align: left;
    border-bottom: 1px solid white;
    padding: 1rem 0;
    margin: 0.5rem 0;
  }

  .event-location:first-child {
    border-top: 1px solid white;
  }

  .event-location h3 {
    color: white;
    text-align: left;
  }

  .event-dates {
    color: white;
    text-align: left;
  }

  .event-separator {
    display: none;
  }

  .desktop-fancy {
    display: none;
  }
}

@media (max-width: 480px) {
  :global(body) {
    background: #284e42 !important;
  }

  :global(html) {
    background: #284e42 !important;
  }

  :global(#app) {
    background: #284e42 !important;
  }

  .home-view {
    padding: 0;
    margin: 0;
    background: #284e42 !important;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .main-logo {
    max-width: 300px;
  }

  .exhibition-decorations {
    gap: 0.8rem;
  }

  .decoration-left,
  .decoration-right {
    display: none;
  }

  .exhibition-title {
    font-size: 28px;
    color: white;
  }

  .mobile-event-details {
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background: #284e42 !important;
    width: 100%;
    box-sizing: border-box;
  }

  .hero-section {
    padding: 0.5rem;
  }

  .event-location h3 {
    font-size: 1rem;
    color: white;
  }

  .event-dates {
    font-size: 0.85rem;
    color: white;
  }
}

@media (max-width: 360px) {
  .main-logo {
    max-width: 280px;
  }

  .decoration-left,
  .decoration-right {
    display: none;
  }
}
</style>
