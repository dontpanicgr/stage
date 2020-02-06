<template>
<section class="hero section is-hero is-primary is-fullheight is-xlarge">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5-fullhd is-offset-1-fullhd">
        <div class="section-header">
          <h1 class="title is-spaced"> 
            {{ $t("c-hero-home.title") }}</h1>
          <h2 class="subtitle is-4"> {{ $t("c-hero-home.subtitle") }}</h2>
                    <hr class="spacer is-1-5">

          <div class="field is-grouped">
            <div class="control"> <a class="button is-warning is-large" href="/login" target="_blank">{{ $t("c-hero-home.btn-primary") }}</a> </div>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="section-media"> <img role="presentation" src="@/assets/img/herofin.png">
        </div>
      </div>
    </div>
  </div>
</section>
</template>
