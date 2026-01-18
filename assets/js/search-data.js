// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-acrobatic-2d-quadrotor",
          title: 'Acrobatic 2D Quadrotor',
          description: "A Sequential Quadratic Programming (SQP) solver for a 2D quadrotor to perform flipping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2dQuadrotor/";
            },},{id: "projects-object-rearrangement-with-egocentric-view",
          title: 'Object Rearrangement with Egocentric View',
          description: "Action Distillation (DAgger) of egocentric nonprehensile manipulation (car with FPV camera pushing a box)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/activePerception/";
            },},{id: "projects-box-stacking-in-pybullet",
          title: 'Box Stacking in PyBullet',
          description: "Impedance controllers for two manipulators to perform box stacking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boxStacking/";
            },},{id: "projects-reinforcement-learning-for-quadrupedal-locomotion",
          title: 'Reinforcement Learning for Quadrupedal Locomotion',
          description: "Training robust walking policies for the Unitree Go2 robot using Proximal Policy Optimization (PPO)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quadrupedalLocomotion/";
            },},{id: "projects-quadrupedal-landing-control-under-low-gravity",
          title: 'Quadrupedal Landing Control Under Low Gravity',
          description: "Quadrupedal attitude control &amp; landing control under reduced gravity with diverse initial poses, trained using Proximal Policy Optimization (PPO)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spaceDoggy/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%77%36%35%31%34@%6E%79%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Epon-Wang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yp-yipeng-wang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
