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
          section: "News",},{id: "projects-apriltag-positioning-system",
          title: 'AprilTag Positioning System',
          description: "Vision Setup for real world experiment of a mobile object rearrangement task",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AprilTagTracking/";
            },},{id: "projects-object-rearrangement-with-egocentric-view",
          title: 'Object Rearrangement with Egocentric View',
          description: "Action Distillation (DAgger) of nonprehensile manipulation (car pushing a box)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/activePerception/";
            },},{id: "projects-box-stacking-in-pybullet",
          title: 'Box Stacking in PyBullet',
          description: "Course Projects of ROB-UY 2004",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boxStacking/";
            },},{id: "projects-e20-simulator",
          title: 'E20 Simulator',
          description: "Implementation of an hypothetical 16-bit processor using RISC Architecture with C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/e20Simulator/";
            },},{id: "projects-3d-gesture-based-unlock-system",
          title: '3D Gesture-Based Unlock System',
          description: "Course Final Project of ECE-UY 4144",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gestureUnlock/";
            },},{id: "projects-maze-vpr",
          title: 'Maze VPR',
          description: "Course Term Project of ROB-UY 3203",
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
