<template>
<section class="hero section is-dark is-platform is-large" id="platform">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-12 is-10-fullhd">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <div class="section-header">
              <h2 class="title is-2 is-spaced"> {{ $t("c-tabs-vertical.title") }} </h2>
              <p class="subtitle is-4"> {{ $t("c-tabs-vertical.subtitle") }} </p>
              <hr class="spacer is-2">
            </div>
            <div class="section-body">
              <div class="vertical-tabs"> 
                <a class="tab is-active" data-anchor="step#explore" href="#">
                  <h3 class="title is-4"> {{ $t("c-tabs-vertical.tab-title1") }} </h3>
                  <p class="subtitle"> {{ $t("c-tabs-vertical.tab-subtitle1") }}</p>
                </a><a class="tab" data-anchor="step#storyworld" href="#">
                  <h3 class="title is-4"> {{ $t("c-tabs-vertical.tab-title2") }}</h3>
                  <p class="subtitle"> {{ $t("c-tabs-vertical.tab-subtitle2") }}</p>
                </a><a class="tab" data-anchor="step#school" href="#">
                  <h3 class="title is-4"> {{ $t("c-tabs-vertical.tab-title3") }}</h3>
                  <p class="subtitle"> {{ $t("c-tabs-vertical.tab-subtitle3") }}</p>
                </a><a class="tab" data-anchor="step#storybuilder" href="#">
                  <h3 class="title is-4"> {{ $t("c-tabs-vertical.tab-title4") }}</h3>
                  <p class="subtitle"> {{ $t("c-tabs-vertical.tab-subtitle4") }}</p>
                </a> 
              </div>
              <hr class="spacer is-3">
            </div>
          </div>
          <div class="column is-6 align-self-stretch">
            <div class="section-media">
              <div class="screens">
                <div class="screen is-active" data-source="step#explore"> <img role="presentation" src="@/assets/img/screen-1.jpg"> </div>
                <div class="screen" data-source="step#storyworld"> <img role="presentation" src="@/assets/img/screen-2.jpg"> </div>
                <div class="screen" data-source="step#school"> <img role="presentation" src="@/assets/img/screen-3.jpg"> </div>
                <div class="screen" data-source="step#storybuilder"> <img role="presentation" src="@/assets/img/screen-4.jpg"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>