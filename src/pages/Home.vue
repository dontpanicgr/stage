<template>
<layout-dark>
  <HeaderTrans/>
  <HeroHome/>
  <SectionFeatures3 />
  <Showcase />
  <SectionLeftImg />
  <SectionRightImg />
  <SectionCenter />

</layout-dark>
</template>

<script>
import HeaderTrans from '@/components/HeaderTrans.vue'
import Showcase from '@/components/Showcase.vue'
import SectionCenter from '@/components/SectionCenter.vue'
import HeroHome from '@/components/HeroHome.vue'
import SectionFeatures3 from '@/components/SectionFeatures3.vue'
import SectionLeftImg from '@/components/SectionLeftImg.vue'
import SectionRightImg from '@/components/SectionRightImg.vue'
import LayoutDark from '@/layouts/LayoutDark.vue'

export default {
  name: 'Home',
  components: {
    HeroHome,
    Showcase,
    HeaderTrans,
    SectionCenter,
    LayoutDark,
    SectionFeatures3,
    SectionLeftImg,
    SectionRightImg
  }
}
</script>
