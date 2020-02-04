<template>
<header class="app-header">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link :to="$i18nRoute({ name: 'home'})" exact class="brand">
            <div class="brand-icon"> <img alt="Bedtime Stories" role="presentation" src="@/assets/img/app-icon.png"> </div>
            <div class="brand-content">
              <div class="brand-title"> {{ $t("brand.title") }} </div>
              <div class="brand-subtitle"> {{ $t("brand.subtitle") }}</div>
            </div>
          </router-link>
        </div>
        <!-- Small Nav -->
        <div class="mobile-menu-simple is-marginless is-hidden-desktop">
          <!-- <router-link :to="$i18nRoute({ name: 'features'})" class="navbar-item">{{ $t("nav.features") }}</router-link>
          <router-link :to="$i18nRoute({ name: 'updates'})" class="navbar-item ">{{ $t("nav.updates") }}</router-link> -->
          <!-- <span class="is-invisible">|</span> -->
          <a href="/login" class="navbar-item button is-primary">{{ $t("nav.go-mobile") }}</a>
        </div>
      </div>
      <!-- Normal Nav -->
      <div class="navbar-menu">
        <div class="navbar-end">
            <a href="/login" class="button is-primary">{{ $t("nav.go") }}</a>

        </div>
      </div>
    </div>
  </nav>
</header>
</template>

