<template>
<layout-dark>
    <HeaderTrans/>
<section class="hero section is-contact is-hero is-primary is-fullheight is-xlarge">
    <div class="container">
      <div class="has-text-centered">
        <hr class="spacer is-4">
        <h1 class="title is-1 is-spaced">{{ $t("p-join.title") }} </h1>
        <h2 class="subtitle is-5"> {{ $t("p-join.subtitle") }}  </h2>
                <hr class="spacer is-1">
        <div class="section is-feedback">
        <div class="field">
          <p class="control">
            <input class="input is-large" type="email" placeholder="Type your email...">
          </p>
        </div>
        <hr class="spacer is-1">
        <router-link to="/" class="button is-primary is-large">{{ $t("p-join.btn-primary") }} </router-link>
        <hr class="spacer is-5">
        <p class="is-desc is-light">{{ $t("p-join.description") }}</p>
        </div>
      </div>
    </div>
  </section>
</layout-dark>
</template>

<script>
import LayoutDark from '@/layouts/LayoutDark.vue'
import HeaderTrans from '@/components/HeaderTrans.vue'


export default {
  name: 'NotFound',
  components: {
    LayoutDark,
    HeaderTrans
  }
}
</script>
