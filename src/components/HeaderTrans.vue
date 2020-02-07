<template>
<header class="app-header">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link :to="$i18nRoute({ name: 'home'})" exact class="brand">
            <div class="brand-icon"> <img alt="Bedtime Stories" role="presentation" src="@/assets/img/app-icon.png"> </div>
            <div class="brand-content">
              <div class="brand-title is-top"> {{ $t("brand.title") }} </div>
              <div class="brand-subtitle is-top"> {{ $t("brand.subtitle") }}</div>
            </div>
          </router-link>
        </div>
        <!-- Small Nav -->
        <div class="mobile-menu-simple is-marginless is-hidden-desktop">
          <!-- <router-link :to="$i18nRoute({ name: 'features'})" class="navbar-item">{{ $t("nav.features") }}</router-link>
          <router-link :to="$i18nRoute({ name: 'updates'})" class="navbar-item ">{{ $t("nav.updates") }}</router-link> -->
          <!-- <span class="is-invisible">|</span> -->
          <a href="#" target="_blank" class="navbar-item button is-dark is-transparent">{{ $t("nav.go-mobile") }}</a>
        </div>
      </div>
      <!-- Normal Nav -->
      <div class="navbar-menu">
        <div class="navbar-end">
            <a href="#" class="button is-dark is-transparent">{{ $t("nav.go") }}</a>

        </div>
      </div>
    </div>
  </nav>
</header>
</template>

