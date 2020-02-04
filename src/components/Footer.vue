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
                   <li>
                    <router-link :to="$i18nRoute({ name: 'updates'})">{{ $t("nav.updates") }}<span class="tag is-warning is-micro is-uppercase">{{ $t("common.new") }}</span></router-link>
                  </li> 
                                     <li><a href="mailto:email@email.com?subject=%F0%9F%91%8B%20Hello&body=If%20you%20need%20help%20you%20can%20also%20visit%20our%20community%20at%20www.google.com" target="_blank">{{ $t("nav.contact") }}</a></li>
            
                </ul>
              </div>
            </div>
            
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">{{ $t("nav.category-legal") }}</p>
                <ul class="menu-list">
                  <li>
                    <router-link :to="$i18nRoute({ name: 'privacy'})">{{ $t("nav.privacy") }}</router-link>
                  </li>
                  <li>
                    <router-link :to="$i18nRoute({ name: 'terms'})">{{ $t("nav.terms") }}</router-link>
                  </li>
                                    <li>
                    <router-link :to="$i18nRoute({ name: 'cookies'})">{{ $t("nav.cookies") }}</router-link>
                  </li>
                                  </ul>
              </div>
            </div>
            <div class="column is-4">
              <div class="menu">
                <p class="menu-label">Social</p>
                <ul class="menu-list">
              <li>
                <a href="/external_medium" target="_blank">Twitter ↗</a>
              </li>
              <li>
                <a href="/external_medium" target="_blank">Instagram ↗</a>
              </li>
                            <li>
                <a href="/external_medium" target="_blank">Community ↗</a>
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
