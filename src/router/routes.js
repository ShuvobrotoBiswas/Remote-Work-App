
const routes = [

  {
    path: '/',
    component: () => import('layouts/CreateNewAccount.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Page-Router.vue') },
      { path: '/Create-Account-Step1', component: () => import('src/pages/Create-Account-Step1.vue') },
      { path: '/Create-Account-Step2', component: () => import('src/pages/Create-Account-Step2.vue') },
      { path: '/Create-Account-Step2-1', component: () => import('src/pages/Create-Account-Step2-1.vue') },
      { path: '/Create-Account-Step3', component: () => import('src/pages/Create-Account-Step3.vue') },
 ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Contractor-profile-display', component: () => import('src/pages/Contractor-profile-display.vue') },
      { path: '/Create-Contractor-Profile', component: () => import('src/pages/Create-Contractor-Profile.vue') },
      { path: '/Create-Contractor-freelancer-profile', component: () => import('src/pages/Create-Contractor-freelancer-profile.vue') },
      { path: '/Create-Client-Profile', component: () => import('src/pages/Create-Client-Profile.vue') },
      { path: '/Create-Client-Company-Profile', component: () => import('src/pages/Create-Client-Company-Profile.vue') },
      { path: '/Client-Company-Profile-Doc-Verification', component: () => import('src/pages/Client-Company-Profile-Doc-Verification.vue') },
      { path: '/Client-Profile-Doc-Verification', component: () => import('src/pages/Client-Profile-Doc-Verification.vue') },
      { path: '/Client-Profile-Display', component: () => import('src/pages/Client-Profile-Display.vue') },
      { path: '/Contractor-freelancer-profile-display', component: () => import('src/pages/Contractor-freelancer-profile-display.vue') },
      { path: '/Client-Company-Profile-Display', component: () => import('src/pages/Client-Company-Profile-Display.vue') },
      { path: '/Create--Contractor-Company-Profile-Add-Freelancers', component: () => import('src/pages/Create--Contractor-Company-Profile-Add-Freelancers.vue') },
      { path: '/06-Remote-Work-Contractor-Search-Proj', component: () => import('src/pages/06-Remote-Work-Contractor-Search-Proj.vue') },
      { path: '/07-Remote-Work-Freelancer-Project-Display', component: () => import('src/pages/07-Remote-Work-Freelancer-Project-Display.vue') },



    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
