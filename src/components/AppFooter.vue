<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="fantasy-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Event Info -->
        <div class="footer-section">
          <h3 class="footer-title">
            <span class="title-icon">🌟</span>
            Fantastic Coir Event
          </h3>
          <p class="footer-description">Uma experiência mágica através dos mundos da fantasia</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="section-title">Navegação</h4>
          <ul class="footer-links">
            <li><RouterLink to="/" class="footer-link">Início</RouterLink></li>
            <li><RouterLink to="/sobre" class="footer-link">Sobre</RouterLink></li>
            <li><a href="#" class="footer-link">Personagens</a></li>
          </ul>
        </div>

        <!-- Themes -->
        <div class="footer-section">
          <h4 class="section-title">Personagens Fantásticos</h4>
          <ul class="footer-links">
            <li>
              <RouterLink to="/pirata-sereia" class="footer-link">🏴‍☠️ Pirata e Sereia</RouterLink>
            </li>
            <li><RouterLink to="/princesas" class="footer-link">👑 Princesas</RouterLink></li>
            <li><RouterLink to="/fadas" class="footer-link">🧚 Fadas</RouterLink></li>
            <li><RouterLink to="/bruxas" class="footer-link">🔮 Bruxas</RouterLink></li>
          </ul>
        </div>

        <!-- Contact/Social -->
        <div class="footer-section">
          <h4 class="section-title">Conecte-se</h4>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">📘</a>
            <a href="#" class="social-link" aria-label="Instagram">📷</a>
            <a href="#" class="social-link" aria-label="Twitter">🐦</a>
            <a href="#" class="social-link" aria-label="YouTube">📺</a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Fantastic Coir Event. Todos os direitos reservados.</p>
          <p class="magic-text">✨ Criado com magia e Vue.js ✨</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.fantasy-footer {
  background: linear-gradient(135deg, var(--primary-dark) 0%, #0a0a1a 100%);
  border-top: 3px solid var(--primary-gold);
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  color: var(--primary-light);
}

.footer-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-gold);
}

.title-icon {
  margin-right: 0.5rem;
  font-size: 1.8rem;
}

.section-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--primary-gold);
  border-bottom: 2px solid rgba(212, 175, 55, 0.3);
  padding-bottom: 0.5rem;
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: var(--primary-gold);
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(212, 175, 55, 0.1);
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-gold);
  border-color: var(--primary-gold);
  transform: scale(1.1);
}

.footer-bottom {
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  padding-top: 2rem;
  text-align: center;
}

.copyright p {
  color: #888;
  margin: 0.5rem 0;
}

.magic-text {
  background: linear-gradient(45deg, var(--primary-gold), #ffd700, var(--primary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 1rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-title {
    font-size: 1.3rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 1.5rem 0.5rem 1rem;
  }

  .footer-title {
    font-size: 1.2rem;
  }

  .copyright p {
    font-size: 0.9rem;
  }
}
</style>
