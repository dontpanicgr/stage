<template>
<layout-default>
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <h1 class="title is-1 is-spaced">{{ $t("p-security.title") }}
            <span class="spacer is-horizontal is-1"></span>
            <span class="tag is-primary">{{ $t("p-security.tag") }}</span>
          </h1>
          <h2 class="subtitle is-5"> {{ $t("p-security.update") }}</h2>
          <div class="message is-primary">
            <div class="message-body">
              <p>
                <strong>{{ $t("p-security.message-title") }}</strong>
                <i18n path="p-security.term" for="p-security.link">
                  <a :href="url1" target="_blank">{{ $t('p-security.link') }}?</a>
                </i18n>
              </p>
            </div>
          </div>
          <div class="content is-medium">
            <p> {{ $t("p-security.content-p1") }}</p>
            <h2> {{ $t("p-security.content-h2-title") }}</h2>
            <h3> {{ $t("p-security.content-h2-subtitle") }}</h3>
            <p> {{ $t("p-security.content-p2") }}</p>
            <h3> {{ $t("p-security.content-h3-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p3") }}</p>
            <h3> {{ $t("p-security.content-h4-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p4-1") }}
              <a href="http://tools.google.com/dlpage/gaoptout?hl=en" target="_blank">http://tools.google.com/dlpage/gaoptout?hl=en</a>.
              {{ $t("p-security.content-p4-2") }}
              {{ $t("common.learn-more") }}
              <a href="http://www.google.com/intl/en/analytics/privacyoverview.html" target="_blank">http://www.google.com/intl/en/analytics/privacyoverview.html</a>.
              {{ $t("p-security.content-p4-3") }}</p>
            <h3> {{ $t("p-security.content-h5-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p5-1") }}
              <a href="mailto:studio@littlelightsstudio.com" target="_blank">studio@littlelightsstudio.com</a> /
              <a href="mailto:support@getbedtimestories.com" target="_blank">support@getbedtimestories.com</a>.
              {{ $t("p-security.content-p5-2") }}
            </p>
            <h3> {{ $t("p-security.content-h6-subtitle") }}</h3>
            <p> {{ $t("p-security.content-p6") }}</p>
            <h3> {{ $t("p-security.content-h7-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p7") }}
              {{ $t("common.learn-more") }}
              <a href="http://www.google.com/intl/en/policies/privacy" target="_blank">http://www.google.com/intl/en/policies/privacy</a>. </p>
            <h3> {{ $t("p-security.content-h8-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p8") }}
              {{ $t("common.learn-more") }}
              <a href="https://www.facebook.com/about/privacy" target="_blank">https://www.facebook.com/about/privacy</a>. </p>
            <h3> {{ $t("p-security.content-h9-subtitle") }} </h3>
            <p>{{ $t("p-security.content-p9") }}
              {{ $t("common.learn-more") }}
              <a href="https://twitter.com/privacy" target="_blank">https://twitter.com/privacy</a>.</p>
            <h3> {{ $t("p-security.content-h10-subtitle") }}</h3>
            <p> {{ $t("p-security.content-p10") }}</p>
            <h3> {{ $t("p-security.content-h11-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p11") }}
              <a href="mailto:studio@littlelightsstudio.com" target="_blank">studio@littlelightsstudio.com</a> / <a href="mailto:support@getbedtimestories.com" target="_blank">support@getbedtimestories.com</a>. </p>
            <h3> {{ $t("p-security.content-h12-subtitle") }} </h3>
            <p> {{ $t("p-security.content-p12") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
  name: 'Security',
  components: {
    LayoutDefault
  },
  data: function () {
    return {
      url1: 'http://www.google.com'
    };
  }
}
</script>
