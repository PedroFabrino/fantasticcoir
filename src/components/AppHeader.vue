<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
  <header class="desktop-header">
    <nav class="nav-container">
      <div class="nav-content">
        <!-- Logo -->
        <RouterLink to="/" class="logo">
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
                <RouterLink to="/pirata-sereia" class="dropdown-link">{{
                  t('characters.names.pirata-sereia')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/princese" class="dropdown-link">{{
                  t('characters.names.princese')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/fades" class="dropdown-link">{{
                  t('characters.names.fades')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/satiro-fauno" class="dropdown-link">{{
                  t('characters.names.satiro-fauno')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/vampiros" class="dropdown-link">{{
                  t('characters.names.vampiros')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/vampiras" class="dropdown-link">{{
                  t('characters.names.vampiras')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/bruxes" class="dropdown-link">{{
                  t('characters.names.bruxes')
                }}</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/sobre" class="nav-link">{{ t('navigation.about') }}</RouterLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
        </button>
      </div>
    </nav>
  </header>

  <!-- Mobile Navigation Overlay -->
  <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }">
    <nav class="mobile-nav">
      <div class="mobile-nav-header">
        <!-- <h2 class="mobile-nav-title">Fantástico & Juir</h2> -->
        <button class="mobile-close-btn" @click="closeMobileMenu">✕</button>
      </div>
      <ul class="mobile-menu">
        <li class="mobile-nav-item">
          <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">{{
            t('navigation.home')
          }}</RouterLink>
        </li>
        <li class="mobile-nav-section">
          <h3 class="mobile-section-title">{{ t('navigation.characters') }}</h3>
          <ul class="mobile-character-menu">
            <li>
              <RouterLink to="/pirata-sereia" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.pirata-sereia')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/princese" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.princese')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/fades" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.fades')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/satiro-fauno" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.satiro-fauno')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/vampiros" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.vampiros')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/vampiras" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.vampiras')
              }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/bruxes" class="mobile-nav-link" @click="closeMobileMenu">{{
                t('characters.names.bruxes')
              }}</RouterLink>
            </li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <RouterLink to="/sobre" class="mobile-nav-link" @click="closeMobileMenu">{{
            t('navigation.about')
          }}</RouterLink>
        </li>
      </ul>
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
  background-color: white;
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
  justify-content: space-between;
  height: 60px;
}

/* Logo */
.logo {
  text-decoration: none;
  color: white;
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
  background-color: white;
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
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #3a1a3a 0%, #2a0e2a 100%);
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
  padding: 2rem;
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.5rem;
  color: #e91e63;
  margin: 0;
  font-style: italic;
}

.mobile-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.mobile-close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-item {
  margin-bottom: 1rem;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.3s ease;
  text-transform: lowercase;
}

.mobile-nav-link:hover {
  color: #e91e63;
}

.mobile-nav-section {
  margin-top: 2rem;
}

.mobile-section-title {
  color: #e91e63;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-transform: lowercase;
  font-weight: 600;
}

.mobile-character-menu {
  list-style: none;
  margin: 0;
  padding-left: 1rem;
}

.mobile-character-menu li {
  margin-bottom: 0.5rem;
  position: relative;
}

.mobile-character-menu li:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ea5279;
}

.mobile-character-menu .mobile-nav-link {
  font-size: 1rem;
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
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
