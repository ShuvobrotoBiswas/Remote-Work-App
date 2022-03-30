
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
      { path: '/01-remote-work-Client-Post-Proj', component: () => import('src/pages/01-remote-work-Client-Post-Proj.vue') },
      { path: "/02-remote-work-Client-Post-Proj", component: () => import("src/pages/02-remote-work-Client-Post-Proj.vue"),},
      { path: "/03-remote-work-Client-Post-Proj", component: () => import("src/pages/03-remote-work-Client-Post-Proj.vue"),},
      { path: "/04-remote-work-Client-Post-Proj", component: () => import("src/pages/04-remote-work-Client-Post-Proj.vue"),},
      { path: "/05-remote-work-Client-Post-Proj", component: () => import("src/pages/05-remote-work-Client-Post-Proj.vue"),},
      { path: '/06-Remote-Work-Contractor-Search-Proj', component: () => import('src/pages/06-Remote-Work-Contractor-Search-Proj.vue') },
      { path: '/07-Remote-Work-Freelancer-Project-Display', component: () => import('src/pages/07-Remote-Work-Freelancer-Project-Display.vue') },
      { path: '/08-Remote-Work-Contractor-Application-To-Project-By-Freelancer', component: () => import('src/pages/08-Remote-Work-Contractor-Application-To-Project-By-Freelancer.vue') },
      { path: '/09-Remote-Work-Client_list-Of-Application-To-Project-By-Freelancer', component: () => import('src/pages/09-Remote-Work-Client_list-Of-Application-To-Project-By-Freelancer.vue') },
      { path: '/10-Remote-Work-Client-Milestones-List-For-Freelancer', component: () => import('src/pages/10-Remote-Work-Client-Milestones-List-For-Freelancer.vue') },
      { path: '/11-Remote-Work-Client-Milestones-Details-For-Freelancer', component: () => import('src/pages/11-Remote-Work-Client-Milestones-Details-For-Freelancer.vue') },
      { path: '/12-Remote-Work-Client-Feedback-To-Freelancer', component: () => import('src/pages/12-Remote-Work-Client-Feedback-To-Freelancer.vue') },
      { path: '/13-Remote-Work-Application-To-Project-By-Agency', component: () => import('src/pages/13-Remote-Work-Application-To-Project-By-Agency.vue') },
      { path: '/14-Remote-Work-Client-Lest-Application-To-Project-By-Agency', component: () => import('src/pages/14-Remote-Work-Client-Lest-Application-To-Project-By-Agency.vue') },
      { path: '/15-Remote-Work-Client-Milestones-List-For-Agency', component: () => import('src/pages/15-Remote-Work-Client-Milestones-List-For-Agency.vue') },
      { path: '/16-Remote-Work-Client-Milestones-Details-For-Agency', component: () => import('src/pages/16-Remote-Work-Client-Milestones-Details-For-Agency.vue') },
      { path: '/17-Remote-Work-Client-Feedback-To-Agency', component: () => import('src/pages/17-Remote-Work-Client-Feedback-To-Agency.vue') },









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
