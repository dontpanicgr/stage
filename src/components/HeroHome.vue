<template>
<section class="hero section is-hero is-primary is-fullheight is-xlarge">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5-fullhd is-offset-1-fullhd">
        <div class="section-header">
          <h1 class="title is-spaced"> 
            {{ $t("c-hero-home.title") }}</h1>
          <h2 class="subtitle is-4"> {{ $t("c-hero-home.subtitle") }}</h2>
          <div class="field is-grouped">
            <div class="control"> <a class="button is-dark is-large" href="#platform">{{ $t("c-hero-home.btn-primary") }}</a> </div>
          </div>
          <hr class="spacer is-1-5">
          <a class="has-tint has-text-weight-semibold" href="http://www.parents-choice.org/product.cfm?product_id=35555" target="_blank">
            <feather type="user" class="svg-icon"></feather>
            <span>{{ $t("c-hero-home.strapline") }}</span>
          </a>
        </div>
      </div>
      <div class="column is-6">
        <div class="section-media"> <img role="presentation" src="@/assets/img/hero-1-removebg-preview - Copy.png">
          <p> <small>{{ $t("c-hero-home.image-text") }}</small> </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
