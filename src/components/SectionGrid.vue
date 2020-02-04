<template>
<section class="section is-contact has-background is-medium">
  <div class="container">
    <div class="section-header has-text-centered">
      <h1 class="title is-1 is-spaced"> {{ $t("c-section-grid.title") }}</h1>
      <h2 class="subtitle is-5"> {{ $t("c-section-grid.subtitle") }}</h2>
    </div>
    <hr class="spacer is-1 is-horizontal">
    <div class="section-body has-text-centered">
      <div class="columns is-centered">
        <div class="column is-12 is-10-fullhd">
          <div class="columns">
            <div class="column is-3">
              <div class="card is-team">
                <div class="card-header">
                  <div class="card-image"> <img alt="Michael Sokolar" src="@/assets/img/avatar.png"> </div>
                </div>
                <div class="card-body">
                  <div class="card-title is-size-5 has-text-weight-bold"> {{ $t("c-section-grid.card-title1") }} </div>
                  <div class="card-subtitle"> {{ $t("c-section-grid.card-subtitle1") }} </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="card is-team">
                <div class="card-header">
                  <div class="card-image"> <img alt="Moritz Kobrna" src="@/assets/img/avatar.png"> </div>
                </div>
                <div class="card-body">
                  <div class="card-title is-size-5 has-text-weight-bold"> {{ $t("c-section-grid.card-title2") }} </div>
                  <div class="card-subtitle"> {{ $t("c-section-grid.card-subtitle2") }}</div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="card is-team">
                <div class="card-header">
                  <div class="card-image"></div> <img alt="Martin Wessely" src="@/assets/img/avatar.png">
                </div>
                <div class="card-body">
                  <div class="card-title is-size-5 has-text-weight-bold"> {{ $t("c-section-grid.card-title3") }} </div>
                  <div class="card-subtitle"> {{ $t("c-section-grid.card-subtitle3") }}</div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="card is-team">
                <div class="card-header">
                  <div class="card-image"> <img alt="Daniela Hanzl" src="@/assets/img/avatar.png"> </div>
                </div>
                <div class="card-body">
                  <div class="card-title is-size-5 has-text-weight-bold"> {{ $t("c-section-grid.card-title4") }}</div>
                  <div class="card-subtitle"> {{ $t("c-section-grid.card-subtitle4") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
