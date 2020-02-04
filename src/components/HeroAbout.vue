<template>
<section class="hero section is-hero is-medium is-warning">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5-fullhd is-offset-1-fullhd">
        <div class="section-header">
          <h1 class="title is-spaced"> {{ $t("c-hero-about.title") }}
          </h1>
          <h2 class="subtitle is-4"> {{ $t("c-hero-about.subtitle") }}</h2>
          <div class="field is-grouped">
            <div class="control">
              <a class="button is-white is-medium" href="/school">{{ $t("c-hero-about.btn-primary") }}</a>
            </div>
          </div>
          <hr class="spacer is-1-5">
          <a class="has-tint has-text-weight-semibold" href="http://www.parents-choice.org/product.cfm?product_id=35555" target="_blank">
            <feather type="feather"></feather>
            <span>{{ $t("c-hero-about.strapline") }}</span>
          </a>
        </div>
      </div>
      <div class="column is-6">
        <div class="section-media"> <img class="full-width" role="presentation" src="@/assets/img/header.jpg">
          <p> <small>{{ $t("c-hero-about.image-text") }}</small> </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
