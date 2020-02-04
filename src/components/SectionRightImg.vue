<template>
<section class="hero section is-dark is-course">
  <div class="container">
    <div class="columns has-equal-heights">
      <div class="column is-6 is-offset-1">
        <div class="section-header">
          <h3 class="subtitle is-5 is-muted"> {{ $t("c-section-right-img.overtitle") }}</h3>
          <h2 class="title is-2 is-spaced"> {{ $t("c-section-right-img.title") }}<span class="spacer is-horizontal is-05"></span><span class="tag is-warning is-uppercase">
            {{ $t("common.free") }}</span> </h2>
          <h3 class="subtitle is-4"> {{ $t("c-section-right-img.subtitle") }} </h3>
          <h3 class="subtitle is-5 is-muted"> {{ $t("c-section-right-img.list-title") }}</h3>
          <ul class="numbered-list">
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-right-img.list-item1") }} </h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-right-img.list-item2") }}</h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-right-img.list-item3") }}</h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-right-img.list-item4") }}</h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-right-img.list-item5") }}</h4>
            </li>
          </ul>
          <div class="hr spacer is-2"></div>
          <div class="field is-grouped">
            <div class="control"> <a class="button is-warning is-medium" href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548" target="_blank">{{ $t("c-section-right-img.btn-primary") }}</a> </div>
          </div>
        </div>
      </div>
      <div class="column is-5">
        <div class="section-media aos-init aos-animate" data-aos="fade" data-aos-duration="2000"> 
          <img class="full-width" role="presentation" src="@/assets/img/hero-4-removebg-preview.png">
          <p> <small>{{ $t("c-section-right-img.text-small") }}</small> </p>
        </div>
      </div>
    </div>
    <div class="hero section is-dark is-course is-medium"></div>
  </div>
</section>
</template>
