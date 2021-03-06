// import { Trans } from '@/plugins/i18n/Translation'

const Home = () => import('@/pages/Home.vue');
const About = () => import('@/pages/About.vue');
const Join = () => import('@/pages/Join.vue');
const NotFound = () => import('@/pages/NotFound.vue');

export default [
    {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/join',
        name: 'join',
        component: Join
      },
      // Secondary pages
      {
        path: '*',
        name: 'notfound',
        component: NotFound
      }
]


// With i18n
// export default [
//     {
//       path: '/:lang',
//       // create a container component
//       component: {
//         render (c) { return c('router-view') }
//       },
//       beforeEnter: Trans.routeMiddleware,
//       children: [
//         // Primary pages
//         {
//           path: '',
//           name: 'home',
//           component: Home,
//         },
//         {
//           path: 'about',
//           name: 'about',
//           component: About,
//         },
//         {
//           path: 'join',
//           name: 'join',
//           component: Join,
//         },
//         // Secondary pages
//         {
//           path: '*',
//           name: 'notfound',
//           component: NotFound,
//         }
//       ]
//     },
//     {
//       // Redirect user to supported lang version.
//       path: '*',
//        redirect (to) {
//          return Trans.getUserSupportedLang()
//        }
//     }
//   ]