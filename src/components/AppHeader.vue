<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

// Check if we're on the home page or character pages
const isHomePage = computed(() => route.path === '/')
const isCharacterPage = computed(() => {
  const characterRoutes = [
    'mariposa',
    'primavera',
    'fae',
    'princese',
    'bruxes',
    'vampiras',
    'vampiros',
    'satiro-fauno',
    'pirata-sereia',
  ]
  return characterRoutes.includes(route.name as string)
})

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isCharacterMenuOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  isCharacterMenuOpen.value = false // Reset character menu when opening/closing main menu
}

const toggleCharacterMenu = () => {
  isCharacterMenuOpen.value = !isCharacterMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isCharacterMenuOpen.value = false
}

// Close dropdown when clicking outside
const closeDropdown = () => {
  setTimeout(() => {
    isDropdownOpen.value = false
  }, 150)
}
</script>

<template>
  <!-- Desktop Navigation -->
  <header
    class="desktop-header"
    :class="{ 'home-header': isHomePage, 'character-header': isCharacterPage }"
  >
    <nav class="nav-container">
      <div class="nav-content">
        <!-- Back Button for Character Pages (Left Side) -->
        <button v-if="isCharacterPage" class="back-btn" @click="$router.go(-1)">
          <span class="back-arrow">←</span>
          <span class="back-text">voltar</span>
        </button>

        <!-- Logo (Hidden when back button is present) -->
        <RouterLink v-if="!isCharacterPage" to="/" class="logo">
          <!-- <span class="logo-text">Fantástico & Juir</span> -->
        </RouterLink>

        <!-- Navigation Menu -->
        <ul class="nav-menu">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">{{ t('navigation.home') }}</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle" @click="toggleDropdown" @blur="closeDropdown">
              {{ t('navigation.characters') }}
            </button>
            <ul class="dropdown-menu" :class="{ active: isDropdownOpen }">
              <li>
                <RouterLink to="/mariposa" class="dropdown-link">{{
                  t('characters.names.mariposa')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/primavera" class="dropdown-link">{{
                  t('characters.names.primavera')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/fae" class="dropdown-link">{{
                  t('characters.names.fae')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/princese" class="dropdown-link">{{
                  t('characters.names.princese')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/bruxes" class="dropdown-link">{{
                  t('characters.names.bruxes')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/vampiras" class="dropdown-link">{{
                  t('characters.names.vampiras')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/vampiros" class="dropdown-link">{{
                  t('characters.names.vampiros')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/satiro-fauno" class="dropdown-link">{{
                  t('characters.names.satiro-fauno')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/pirata-sereia" class="dropdown-link">{{
                  t('characters.names.pirata-sereia')
                }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/sobre" class="nav-link">{{ t('navigation.about') }}</RouterLink>
          </li>
        </ul>

        <!-- Mobile Menu Button (Right Side) -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span class="menu-text">menu</span>
          <div class="hamburger-icon">
            <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
          </div>
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile Navigation Overlay -->
  <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }">
    <nav class="mobile-nav">
      <div class="mobile-nav-header">
        <button class="mobile-close-btn" @click="closeMobileMenu">✕</button>
      </div>

      <!-- Main Menu -->
      <div v-if="!isCharacterMenuOpen" class="main-menu">
        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('navigation.home') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <button class="mobile-nav-link" @click="toggleCharacterMenu">
            {{ t('navigation.characters') }}
          </button>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/sobre" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('navigation.about') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="fancy-bottom-container">
          <img src="@/assets/fancy2_white.svg" alt="Decoration" class="fancy-decoration" />
        </div>
      </div>

      <!-- Character Submenu -->
      <div v-if="isCharacterMenuOpen" class="character-menu">
        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/mariposa" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.mariposa') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/primavera" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.primavera') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/fae" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.fae') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/princese" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.princese') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/bruxes" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.bruxes') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/vampiras" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.vampiras') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/vampiros" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.vampiros') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/satiro-fauno" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.satiro-fauno') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="menu-item">
          <RouterLink to="/pirata-sereia" class="mobile-nav-link" @click="closeMobileMenu">
            {{ t('characters.names.pirata-sereia') }}
          </RouterLink>
        </div>

        <div class="menu-separator"></div>

        <div class="fancy-bottom-container">
          <img src="@/assets/fancy2_white.svg" alt="Decoration" class="fancy-decoration" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Desktop Header */
.desktop-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff5e9;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  border-bottom: 2px solid #284e42;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
}

/* Desktop layout - push nav menu to the right */
.nav-menu {
  flex: 1;
  justify-content: flex-end;
}

/* Hide back button on desktop */
.back-btn {
  display: none;
}

/* Position mobile menu button on the right */
.mobile-menu-btn {
  margin-left: auto;
}

/* Logo */
.logo {
  text-decoration: none;
  color: #fff5e9;
}

.logo-text {
  font-family: 'Times New Roman', serif;
  font-size: 1.4rem;
  font-style: italic;
  font-weight: 500;
}

/* Desktop Navigation */
.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #ea5279;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  text-transform: lowercase;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff5e9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

/* Ensure dropdown is visible on home page */
.desktop-header.home-header .dropdown-menu {
  background-color: #fff5e9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* Back Button */
.back-btn {
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.back-arrow {
  font-size: 18px;
  font-weight: bold;
}

.back-text {
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
}

.back-btn .back-arrow,
.back-btn .back-text {
  color: #ea5279;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  position: relative;
}

.dropdown-menu li {
  border-bottom: 1px solid #ea5279;
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #ea5279;
  text-decoration: none;
  transition: background-color 0.2s ease;
  text-transform: capitalize;
}

.dropdown-link:hover {
  background-color: #f5f5f5;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-text {
  color: #ea5279;
  font-size: 14px;
  font-weight: 500;
  text-transform: lowercase;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: #ea5279;
  transition: all 0.3s ease;
}

.hamburger-icon .hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-icon .hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-icon .hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ea5279;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.mobile-nav-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}

.mobile-close-btn {
  background: none;
  border: none;
  color: #fff5e9;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.mobile-close-btn:hover {
  opacity: 0.8;
}

/* Main Menu and Character Menu */
.main-menu,
.character-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.menu-separator {
  width: 80%;
  height: 1px;
  background-color: #fff5e9;
  margin: 0.75rem 0;
  opacity: 1;
}

.menu-item {
  width: 100%;
  text-align: center;
  margin: 0;
}

.mobile-nav-link {
  display: block;
  color: #fff5e9;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-transform: lowercase;
  transition: opacity 0.3s ease;
}

.mobile-nav-link:hover {
  opacity: 0.8;
}

.fancy-bottom-container {
  margin-top: 2rem;
  text-align: center;
}

.fancy-decoration {
  max-height: 80px;
  max-width: 100px;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  /* Home page mobile styling - green header with white elements */
  .desktop-header.home-header {
    background-color: #284e42;
    border-bottom: 2px solid #284e42;
  }

  .desktop-header.home-header .nav-link {
    color: #fff5e9;
  }

  .desktop-header.home-header .menu-text {
    color: #fff5e9;
  }

  .desktop-header.home-header .hamburger-line {
    background-color: #fff5e9;
  }

  /* Character page mobile styling - purple header with white elements */
  .desktop-header.character-header {
    background-color: #b889af;
    border-bottom: 2px solid #b889af;
  }

  .desktop-header.character-header .nav-link {
    color: #fff5e9;
  }

  .desktop-header.character-header .menu-text {
    color: #fff5e9;
  }

  .desktop-header.character-header .hamburger-line {
    background-color: #fff5e9;
  }

  .desktop-header.character-header .back-arrow,
  .desktop-header.character-header .back-text {
    color: #fff5e9;
  }

  /* Show back button on mobile for character pages */
  .back-btn {
    display: flex;
  }

  /* Mobile navigation layout adjustments */
  .nav-content {
    justify-content: space-between;
  }

  .nav-menu {
    flex: none;
    justify-content: flex-start;
  }

  .mobile-menu-btn {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .nav-content {
    height: 50px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .mobile-nav {
    padding: 1.5rem;
  }

  .mobile-nav-title {
    font-size: 1.3rem;
  }
}
</style>
