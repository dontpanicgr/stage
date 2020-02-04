<template>
<div class="app-container">
  <Header />
  <main class="app-content">
    <slot />
  </main>
  <Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: `LayoutDefault`,
  components: {
    Header,
    Footer
  }
}
</script>
