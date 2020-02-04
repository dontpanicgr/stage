<template>
<layout-default>
  <section class="section is-dark">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <h1 class="title is-1 is-spaced"> {{ $t("p-about.title") }}
            <span class="spacer is-horizontal is-1"></span><span class="tag is-primary">{{ $t("p-about.tag") }}</span>
          </h1>
          <h2 class="subtitle is-5"> {{ $t("p-about.update") }}
          </h2>
          <div class="content is-medium">
            <p> {{ $t("p-about.content-p1") }}</p>
            <h2> {{ $t("p-about.content-h2-title") }}</h2>
            <h3> {{ $t("p-about.content-h2-subtitle") }}</h3>
            <p> {{ $t("p-about.content-p2") }}</p>
            <h3> {{ $t("p-about.content-h3-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p3") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionFeatures2 />
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <div class="content is-medium">
            <p> {{ $t("p-about.content-p4") }}</p>
            <h2> {{ $t("p-about.content-h5-title") }}</h2>
            <h3> {{ $t("p-about.content-h5-subtitle") }}</h3>
            <p> {{ $t("p-about.content-p5") }}</p>
            <h3> {{ $t("p-about.content-h6-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p6") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</layout-default>
</template>

<script>
import SectionCenter from '@/components/SectionCenter.vue'
import SectionFeatures2 from '@/components/SectionFeatures2.vue'
import SectionGrid from '@/components/SectionGrid.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import HeroAbout from '@/components/HeroAbout.vue'

export default {
  name: 'About',
  components: {
    HeroAbout,
    SectionCenter,
    SectionFeatures2,
    SectionGrid,
    LayoutDefault
  }
}
</script>
