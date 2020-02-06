<template>
<layout-default>
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <h1 class="title is-1 is-spaced"> {{ $t("p-about.title") }}
          </h1>
          <div class="content is-medium">
            <p> {{ $t("p-about.content-p1") }}</p>
            <p> {{ $t("p-about.content-p2") }}</p>
                    <div class="hr spacer is-1"></div>

            <h3> {{ $t("p-about.content-h3-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p3") }}</p>
                        <h3> {{ $t("p-about.content-h4-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p4") }}</p>
                        <h3> {{ $t("p-about.content-h5-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p5") }}</p>
                        <h3> {{ $t("p-about.content-h6-subtitle") }} </h3>
            <p> {{ $t("p-about.content-p6") }}</p>
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
            <h2> {{ $t("p-about.content-h7-title") }}</h2>
            <p> {{ $t("p-about.content-p7") }}</p>
            <p> {{ $t("p-about.content-p8") }}</p>
            <p> {{ $t("p-about.content-p9") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    <SectionCenter/>
</layout-default>
</template>

<script>
import SectionFeatures2 from '@/components/SectionFeatures2.vue'
import SectionCenter from '@/components/SectionCenter.vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
  name: 'About',
  components: {
    SectionFeatures2,
    SectionCenter,
    LayoutDefault
  }
}
</script>
