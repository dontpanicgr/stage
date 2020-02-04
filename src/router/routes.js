import { Trans } from '@/plugins/i18n/Translation'

const Home = () => import('@/pages/Home.vue');
const Features = () => import('@/pages/Features.vue');
const Updates = () => import('@/pages/Updates.vue');
const About = () => import('@/pages/About.vue');
const Pricing = () => import('@/pages/Pricing.vue');
const Terms = () => import('@/pages/Terms.vue');
const Privacy = () => import('@/pages/Privacy.vue');
const Security = () => import('@/pages/Security.vue');
const Cookies = () => import('@/pages/Cookies.vue');
const Values = () => import('@/pages/Values.vue');
const NotFound = () => import('@/pages/NotFound.vue');

export default [
  {
    path: '/:lang',
    // create a container component
    component: {
      render (c) { return c('router-view') }
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'features',
        name: 'features',
        component: Features,
      },
      {
        path: 'updates',
        name: 'updates',
        component: Updates,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'pricing',
        name: 'pricing',
        component: Pricing,
      },
      {
        path: 'security',
        name: 'security',
        component: Security,
      },
      {
        path: 'values',
        name: 'values',
        component: Values,
      },
      // Secondary pages
      {
        path: 'terms',
        name: 'terms',
        component: Terms,
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: Privacy,
      },
      {
        path: 'cookies',
        name: 'cookies',
        component: Cookies,
      },
      // Error pages
      {
        path: '*',
        component: NotFound,
      }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect: '/en'
    // redirect (to) {
    //   return Trans.getUserSupportedLang()
    // }
  }
]