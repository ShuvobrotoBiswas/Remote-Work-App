
const routes = [

  {
    path: '/',
    component: () => import('layouts/CreateNewAccount.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Create-Account-Step1.vue') },
      { path: '/Page-Router', component: () => import('src/pages/Page-Router.vue') },
      { path: '/Page-Router', component: () => import('src/pages/Page-Router.vue') },
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
      //  Phase 2
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


      {
        path: '/',
        component: () => import('layouts/Phase-3.vue'),
        children: [
          // Phase 3
          { path: '/01-Remote-Work-2-Ongoing-Work-Client-Post-Proj', component: () => import('src/pages/01-Remote-Work-2-Ongoing-Work-Client-Post-Proj.vue') },
          { path: '/02-Remote-Work-2-Ongoing-Work-Contractor-Search-Proj', component: () => import('src/pages/02-Remote-Work-2-Ongoing-Work-Contractor-Search-Proj.vue') },
          { path: '/03-Remote-Work-2-Ongoing-Work-Contractor-Project-Display', component: () => import('src/pages/03-Remote-Work-2-Ongoing-Work-Contractor-Project-Display.vue') },
          { path: '/04-Remote-Work-2-Ongoing-Work-Contractor-Application-To-Project', component: () => import('src/pages/04-Remote-Work-2-Ongoing-Work-Contractor-Application-To-Project.vue') },
          { path: '/05-Remote-Work-2-Ongoing-Work-Client-List-Application-To-Project', component: () => import('src/pages/05-Remote-Work-2-Ongoing-Work-Client-List-Application-To-Project.vue') },
          { path: '/06-Remote-Work-2-Ongoing-Work-Client-Approve-Contractor-Application-To-Project', component: () => import('src/pages/06-Remote-Work-2-Ongoing-Work-Client-Approve-Contractor-Application-To-Project.vue') },
          { path: '/07-Remote-Work-2-Ongoing-Work-Client-Feedback-To-Client', component: () => import('src/pages/07-Remote-Work-2-Ongoing-Work-Client-Feedback-To-Client.vue') },
          { path: '/08-Remote-Work-2-Ongoing-Work-Agency-Application-To-Project', component: () => import('src/pages/08-Remote-Work-2-Ongoing-Work-Agency-Application-To-Project.vue') },
          { path: '/09-Remote-Work-2-Ongoing-Work-Client-List-Of-Application-To-Project', component: () => import('src/pages/09-Remote-Work-2-Ongoing-Work-Client-List-Of-Application-To-Project.vue') },
          { path: '/10-Remote-Work-2-Ongoing-Work-Client-Approve-Agency-Application-To-Project', component: () => import('src/pages/10-Remote-Work-2-Ongoing-Work-Client-Approve-Agency-Application-To-Project.vue') },
          { path: '/11-Remote-Work-2-Ongoing-Work-Client-Feedback-To-Client', component: () => import('src/pages/11-Remote-Work-2-Ongoing-Work-Client-Feedback-To-Client.vue') },
          //  Phase 4
          { path: '/01-Remote-Work-Client-Post-Project-1', component: () => import('src/pages/01-Remote-Work-Client-Post-Project-1.vue') },
          { path: '/02-Remote-Work-Client-Post-Project-2', component: () => import('src/pages/02-Remote-Work-Client-Post-Project-2.vue') },
          { path: '/03-Remote-Work-Client-Post-Project-3', component: () => import('src/pages/03-Remote-Work-Client-Post-Project-3.vue') },
          { path: '/04-Remote-Work-Client-Post-Project-4', component: () => import('src/pages/04-Remote-Work-Client-Post-Project-4.vue') },
          { path: '/05-Remote-Work-Client-Post-Project-5', component: () => import('src/pages/05-Remote-Work-Client-Post-Project-5.vue') },
          { path: '/06-Remote-Work-Client-Post-Project-6', component: () => import('src/pages/06-Remote-Work-Client-Post-Project-6.vue') },
          { path: '/07-Remote-Work-Contractor-Project-Display-07', component: () => import('src/pages/07-Remote-Work-Contractor-Project-Display-07.vue') },
          { path: '/08-Remote-Work-Contractor-Application-To-Project-08', component: () => import('src/pages/08-Remote-Work-Contractor-Application-To-Project-08.vue') },
          { path: '/09-Remote-Work-Client-List-Of-Application-To-Project-09', component: () => import('src/pages/09-Remote-Work-Client-List-Of-Application-To-Project-09.vue') },
          { path: '/10-Remote-Work-Contractor-Application-to-Project-By-Agency-10', component: () => import('src/pages/10-Remote-Work-Contractor-Application-to-Project-By-Agency-10.vue') },
          { path: '/11-Remote-Work-Client-Of-Application-to-Project-By-Agency-11', component: () => import('src/pages/11-Remote-Work-Client-Of-Application-to-Project-By-Agency-11.vue') },
          // Phase 5
          { path: '/Phase5-01-Remote-Work-Client-Post-Project-1', component: () => import('src/pages/Phase5-01-Remote-Work-Client-Post-Project-1.vue') },
          { path: '/Phase5-02-Remote-Work-Client-Post-Project-2', component: () => import('src/pages/Phase5-02-Remote-Work-Client-Post-Project-2.vue') },
          { path: '/Phase5-03-Remote-Work-Client-Post-Project-3', component: () => import('src/pages/Phase5-03-Remote-Work-Client-Post-Project-3.vue') },
          { path: '/Phase5-04-Remote-Work-Client-Post-Project-4', component: () => import('src/pages/Phase5-04-Remote-Work-Client-Post-Project-4.vue') },
          { path: '/Phase5-05-Remote-Work-Client-Post-Project-5', component: () => import('src/pages/Phase5-05-Remote-Work-Client-Post-Project-5.vue') },
          { path: '/Phase5-06-Remote-Work-Client-Post-Project-6', component: () => import('src/pages/Phase5-06-Remote-Work-Client-Post-Project-6.vue') },
          { path: '/Phase5-07-Remote-Work-Client-Post-Project-7', component: () => import('src/pages/Phase5-07-Remote-Work-Client-Post-Project-7.vue') },
          { path: '/Phase5-08-Remote-Work-Client-Post-Project-8', component: () => import('src/pages/Phase5-08-Remote-Work-Client-Post-Project-8.vue') },
          { path: '/Phase5-09-Remote-Work-Client-Post-Project-9', component: () => import('src/pages/Phase5-09-Remote-Work-Client-Post-Project-9.vue') },
          { path: '/Phase5-10-Remote-Work-Client-Post-Project-10', component: () => import('src/pages/Phase5-10-Remote-Work-Client-Post-Project-10.vue') },
          { path: '/Phase5-11-Remote-Work-Client-Post-Project-11', component: () => import('src/pages/Phase5-11-Remote-Work-Client-Post-Project-11.vue') },
          { path: '/Phase5-12-Remote-Work-Client-Post-Project-12', component: () => import('src/pages/Phase5-12-Remote-Work-Client-Post-Project-12.vue') },
          { path: '/Phase5-13-Remote-Work-Client-Post-Project-13', component: () => import('src/pages/Phase5-13-Remote-Work-Client-Post-Project-13.vue') },



     ]
      },
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
