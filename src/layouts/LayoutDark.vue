<template>
<div class="app-container">

  <main class="app-content">
    <slot />
  </main>
  <Footer />
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: `LayoutDark`,
  components: {
    Footer
  }
}
</script>