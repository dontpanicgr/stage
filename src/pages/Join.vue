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
<form action="https://live.us4.list-manage.com/subscribe/post?u=84dd9cd7e6284087e98ee6f0a&amp;id=701a209283" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="field">
                    <p class="control">
                    <input type="email" value="" name="EMAIL" class="input is-large email" id="mce-EMAIL" placeholder="Type your email" required>
                    </p>
                </div>
                <hr class="spacer is-1">
                <input type="submit" value="👍 Yes, keep me updated" name="subscribe" id="mc-embedded-subscribe" class="button is-primary is-large is-fullwidthmobile">
                         </form>
                <hr class="spacer is-6">
        <p class="is-desc is-light"> {{ $t("p-join.description1") }} {{ $t("p-join.description2") }} </p>
                </div>
                <hr class="spacer is-4">
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
