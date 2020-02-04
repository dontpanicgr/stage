<template>
<section class="hero section is-hero is-medium is-warning is-bold">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5-fullhd is-offset-1-fullhd">
        <div class="section-header">
          <h1 class="title is-spaced"> {{ $t("c-hero-features.title") }}</h1>
          <h2 class="subtitle is-4"> {{ $t("c-hero-features.subtitle") }}</h2>
          <div class="field is-grouped">
            <div class="control"> <a class="button is-primary is-medium" href="#platform">{{ $t("c-hero-features.btn-primary") }}</a> </div>
            <div class="control"> <a class="button is-light is-medium" href="/library">{{ $t("c-hero-features.btn-secondary") }}</a> </div>
          </div>
          <hr class="spacer is-1-5">
          <a class="has-tint has-text-weight-semibold" href="http://www.parents-choice.org/product.cfm?product_id=35555" target="_blank">
            <feather type="award"></feather>
            <span>{{ $t("c-hero-features.strapline") }}</span>
          </a>
        </div>
      </div>
      <div class="column is-6">
        <div class="section-media"> <img class="full-width" role="presentation" src="@/assets/img/hero-2-removebg-preview.png">
          <p> <small>{{ $t("c-hero-features.image-text") }}</small> </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
