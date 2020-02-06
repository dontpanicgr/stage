<template>
<footer class="section has-background is-medium">
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-5-widescreen">
          <div class="summary">

            <router-link :to="$i18nRoute({ name: 'home'})" class="brand">
              <div class="brand-icon"> <img alt="Bedtime Stories" role="presentation" src="@/assets/img/app-icon.png">
              </div>
              <div class="brand-content">
                <div class="brand-title"> {{ $t("brand.title") }} </div>
                <div class="brand-subtitle"> {{ $t("brand.subtitle") }}</div>
              </div>
            </router-link>
            <hr class="spacer is-2">
            <p class="is-size-5-mobile"> {{ $t("brand.description") }}</p>
            <hr class="spacer is-2">
            <p class="is-size-5-mobile"> {{ $t("brand.colophon") }}</p>

          </div>
        </div>
        <hr class="spacer is-2">
        <div class="column is-7 is-5-widescreen is-offset-2-widescreen">
          <div class="columns">
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">{{ $t("nav.category-product") }}</p>
                <ul class="menu-list">
                  <li>
                    <router-link :to="$i18nRoute({ name: 'home'})" exact>{{ $t("nav.home") }}</router-link>
                  </li>
                                    <li>
                    <router-link :to="$i18nRoute({ name: 'about'})">{{ $t("nav.about") }}</router-link>
                  </li>

                                     <li><a href=" mailto:hello@stageplus.live?subject=%F0%9F%91%8B%20Hello&body=From%20a%20simple%20hi%20to%20your%20awesome%20new%20idea%2C%20we%20love%20to%20hear%20from%20you!" target="_blank">{{ $t("nav.contact") }}</a></li>
            
                </ul>
              </div>
            </div>
            
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">{{ $t("nav.category-legal") }}</p>
                <ul class="menu-list">
                  <li>
                    <!-- <router-link :to="$i18nRoute({ name: 'home'})">{{ $t("nav.privacy") }}</router-link> -->
                     <a href="#">{{ $t("nav.privacy") }}</a>
                  </li>
                  <li>
                    <!-- <router-link :to="$i18nRoute({ name: 'home'})">{{ $t("nav.terms") }}</router-link> -->
                     <a href="#">{{ $t("nav.terms") }}</a>
                  </li>
                                    <li>
                    <!-- <router-link :to="$i18nRoute({ name: 'home'})">{{ $t("nav.cookies") }}</router-link> -->
                     <a href="#">{{ $t("nav.cookies") }}</a>
                  </li>
                                  </ul>
              </div>
            </div>
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">Social</p>
                <ul class="menu-list">
                                         <li>
                <a href="https://medium.com/@stagestreaming" target="_blank">Blog ↗</a>
              </li>
              <li>
                <a href="https://twitter.com/stagestreaming" target="_blank">Twitter ↗</a>
              </li>
              <li>
                <a href="https://instagram.com/stagestreaming" target="_blank">Instagram ↗</a>
              </li>
 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</footer>
</template>

<script>
import BaseIcon from '@/components/atoms/BaseIcon.vue'

export default {
  name: `Footer`,
  components: {
    BaseIcon
  }
}
</script>
