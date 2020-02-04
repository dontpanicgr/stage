<template>
<section class="hero section is-dark is-course is-xlarge">
  <div class="container">
    <div class="columns has-equal-heights reverse">
      <div class="column is-6 is-offset-1">
        <div class="section-header">
          <h3 class="subtitle is-5 is-muted"> {{ $t("c-section-left-img.overtitle") }} </h3>
          <h2 class="title is-2 is-spaced"> {{ $t("c-section-left-img.title") }}<span class="spacer is-horizontal is-05"></span>
          <span class="tag is-warning is-uppercase"> {{ $t("common.free") }}</span> </h2>
          <h3 class="subtitle is-4"> {{ $t("c-section-left-img.subtitle") }}</h3>
          <h3 class="subtitle is-5 is-muted"> {{ $t("c-section-left-img.left-img-overtitle1") }}</h3>
          <ul class="numbered-list">
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-left-img.left-img-overtitle2") }} </h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-left-img.left-img-overtitle3") }} </h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-left-img.left-img-overtitle4") }}</h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-left-img.left-img-overtitle5") }} </h4>
            </li>
            <li class="item">
              <h4 class="title is-4 has-text-weight-normal"> {{ $t("c-section-left-img.left-img-overtitle6") }}</h4>
            </li>
          </ul>
          <div class="hr spacer is-2"></div>
          <div class="field is-grouped">
            <div class="control"> <a class="button is-warning is-medium" href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548" target="_blank">{{ $t("c-section-left-img.btn-primary") }}</a> </div>
          </div>
        </div>
      </div>
      <div class="column is-5">
        <div class="section-media aos-init aos-animate" data-aos="fade" data-aos-duration="2000"> 
          <img class="full-width" role="presentation" src="@/assets/img/hero-3-removebg-preview.png">
          <p> <small>{{ $t("c-section-left-img.text-small") }}</small> </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
