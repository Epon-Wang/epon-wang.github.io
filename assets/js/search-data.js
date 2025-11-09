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
  },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "Several courses attended covering a wide range of topics on manipulation, locomotion, optimal control, vision, ML/RL, etc.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-reinforcement-learning-td",
        
          title: "Reinforcement Learning - TD",
        
        description: "Temporal Difference Method. Based on Mathematical Foundations of Reinforcement Learning by Shiyu Zhao from Westlake University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Reinforcement-Learning-TD/";
          
        },
      },{id: "post-optimization-basics",
        
          title: "Optimization - Basics",
        
        description: "This tutorial mainly covers Newton&#39;s Method &amp; KKT Conditions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Optimization-Basics/";
          
        },
      },{id: "post-discrete-time-mpc",
        
          title: "Discrete-Time MPC",
        
        description: "Most basic mathematical model for Model Predictive Control",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Discrete-Time-MPC/";
          
        },
      },{id: "post-single-view-geometry",
        
          title: "Single-View Geometry",
        
        description: "This tutorial covers Homography &amp; other topics related to Single-View Reconstruction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Single-View-Geometry/";
          
        },
      },{id: "post-opencv-basics",
        
          title: "OpenCV - Basics",
        
        description: "Basic Usage of OpenCV(cv2) with its python bindings",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/OpenCV-Basics/";
          
        },
      },{id: "post-opencv-advanced",
        
          title: "OpenCV - Advanced",
        
        description: "Some advanced usage of OpenCV(cv2) with its python bindings",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/OpenCV-Advanced/";
          
        },
      },{id: "post-multi-view-geometry",
        
          title: "Multi-View Geometry",
        
        description: "This tutorial covers Epipolar Geometry &amp; Stereo",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Multi-View-Geometry/";
          
        },
      },{id: "post-camera-model",
        
          title: "Camera Model",
        
        description: "This tutorial covers Rigid-Body Transformation &amp; Pinhole Camera Model",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Camera-Model/";
          
        },
      },{id: "post-reinforcement-learning-vi-pi",
        
          title: "Reinforcement Learning - VI-PI",
        
        description: "Value/Policy Iteration. Based on Mathematical Foundations of Reinforcement Learning by Shiyu Zhao from Westlake University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Reinforcement-Learning-VI-PI/";
          
        },
      },{id: "post-reinforcement-learning-mc",
        
          title: "Reinforcement Learning - MC",
        
        description: "Monte Carlo Method. Based on Mathematical Foundations of Reinforcement Learning by Shiyu Zhao from Westlake University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Reinforcement-Learning-MC/";
          
        },
      },{id: "post-reinforcement-learning-basics",
        
          title: "Reinforcement Learning - Basics",
        
        description: "Basics of RL. Based on Mathematical Foundations of Reinforcement Learning by Shiyu Zhao from Westlake University",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Reinforcement-Learning-Basics/";
          
        },
      },{id: "post-machine-learning-nn",
        
          title: "Machine Learning - NN",
        
        description: "From linear classifier to Neural Network. Based on MIT 6.036 Introduction to Machine Learning Lecture 6-7",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Machine-Learning-NN/";
          
        },
      },{id: "post-machine-learning-basics",
        
          title: "Machine Learning - Basics",
        
        description: "Basics of ML. Based on MIT 6.036 Introduction to Machine Learning Lecture 1-5",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Machine-Learning-Basics/";
          
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
          description: "Course Project of ROB-GY 6323, a Sequential Quadratic Programming (SQP) solver for a 2D quadrotor to perform flipping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2dQuadrotor/";
            },},{id: "projects-apriltag-positioning-system",
          title: 'AprilTag Positioning System',
          description: "Object Tracking Module implemented with Cameras and AprilTags, for real world experiments of a mobile object rearrangement task",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AprilTagTracking/";
            },},{id: "projects-object-rearrangement-with-egocentric-view",
          title: 'Object Rearrangement with Egocentric View',
          description: "Action Distillation (DAgger) of egocentric nonprehensile manipulation (car with FPV camera pushing a box)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/activePerception/";
            },},{id: "projects-box-stacking-in-pybullet",
          title: 'Box Stacking in PyBullet',
          description: "Course Projects of ROB-UY 2004, impedance controllers for two manipulators to perform box stacking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boxStacking/";
            },},{id: "projects-e20-simulator",
          title: 'E20 Simulator',
          description: "Implementation of an hypothetical 16-bit processor using RISC Architecture with C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/e20Simulator/";
            },},{id: "projects-3d-gesture-based-unlock-system",
          title: '3D Gesture-Based Unlock System',
          description: "Course Final Project of ECE-UY 4144, a motion-based 3D gesture lock",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gestureUnlock/";
            },},{id: "projects-maze-vpr",
          title: 'Maze VPR',
          description: "Course Term Project of ROB-UY 3203, a VPR system providing navigations for the driver of a small car in a maze",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mazeVPR/";
            },},{id: "projects-quadruped-locomotion-under-low-gravity",
          title: 'Quadruped Locomotion Under Low Gravity',
          description: "Course Term Project of ROB-GY 7863A",
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
