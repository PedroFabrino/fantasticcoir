<template>
  <footer class="app-footer">
    <div class="footer-content">
      <img src="@/assets/marcas.svg" alt="Marcas" class="marcas-logo" />
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 2rem 1rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.marcas-logo {
  height: 60px;
  width: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.marcas-logo:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .app-footer {
    padding: 1.5rem 1rem;
  }

  .marcas-logo {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 1rem;
  }

  .marcas-logo {
    height: 40px;
  }
}
</style>
