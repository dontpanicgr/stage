<template>
<layout-default>
  <section class="section is-contact is-top has-background">
  <div class="container">
    <div class="has-text-centered">
      <h2 class="title is-1 is-spaced">{{ $t("p-pricing.title") }} </h2>
      <p class="subtitle is-5"> {{ $t("p-pricing.subtitle") }} </p>
    </div>
  </div>
</section>
  <SectionCards />
  <section class="section has-background">
    <div class="container">
      <p>{{ $t("p-pricing.disclaimer") }} </p>
    </div>
    <hr class="spacer is-4">
  </section>
    <SectionGrid class="is-medium has-background" />

</layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import SectionCards from '@/components/SectionCards.vue'

export default {
  name: 'Pricing',
  components: {
    SectionCards,
    LayoutDefault
  }
}
</script>
